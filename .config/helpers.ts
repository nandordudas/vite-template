import type { Buffer } from 'node:buffer'
import type { SecureContextOptions } from 'node:tls'
import { access, constants } from 'node:fs/promises'

async function checkAccess(item: string | Buffer | undefined) {
  if (item === undefined)
    throw new Error('Access denied')

  return access(item.toString(), constants.R_OK)
}

async function validateContextPart(items: SecureContextOptions['cert'] | SecureContextOptions['key']) {
  if (!Array.isArray(items))
    return checkAccess(items)

  for await (const item of items) {
    if (typeof item !== 'object')
      await checkAccess(item)
  }
}

export async function getHttpsOptions<
  const T extends Required<Pick<SecureContextOptions, 'cert' | 'key'>>,
>({ cert, key }: T): Promise<T | undefined> {
  try {
    await validateContextPart(cert)
    await validateContextPart(key)

    return {
      cert,
      key,
    } as const as T
  }
  catch {
    console.warn('HTTPS cert/key cannot access')
  }
}
