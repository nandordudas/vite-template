import type { Buffer } from 'node:buffer'
import type { SecureContextOptions } from 'node:tls'
import { access, constants } from 'node:fs/promises'

async function checkAccess(item: string | Buffer | undefined) {
  if (item === undefined)
    throw new Error('Access denied')

  return await access(item.toString(), constants.R_OK)
}

async function validateItems(items: SecureContextOptions['cert'] | SecureContextOptions['key']) {
  if (Array.isArray(items)) {
    for (const item of items) {
      if (typeof item === 'object')
        throw new Error('Invalid cert/key')

      await checkAccess(item)
    }
  }
  else {
    await checkAccess(items)
  }
}

export async function getHttpsOptions({ cert, key }: Required<Pick<SecureContextOptions, 'cert' | 'key'>>) {
  try {
    await validateItems(cert)
    await validateItems(key)

    return {
      cert,
      key,
    } as const
  }
  catch {
    console.warn('HTTPS cert/key cannot access')
  }
}
