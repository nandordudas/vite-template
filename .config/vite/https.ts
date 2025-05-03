import type { SecureContextOptions } from 'node:tls'

import { isFileReadable } from '../utils/fs'

async function validateSecureContextItems(items: SecureContextOptions['cert'] | SecureContextOptions['key']) {
  if (!Array.isArray(items))
    return isFileReadable(items)

  for (const item of items) {
    if (typeof item === 'object') {
      console.warn('Object like items are not supported.')

      continue
    }

    const isValid = await isFileReadable(item)

    if (!isValid)
      return false
  }

  return true
}

function warn(message: string) {
  const WARNING_SYMBOL = '\u26A0'
  const WARNING_COLOR = '\x1B[33m'
  const RESET_COLOR = '\x1B[0m'

  console.warn(`${WARNING_COLOR + WARNING_SYMBOL} ${message}${RESET_COLOR}`)
}

export async function createHttpsOptions<T extends Required<Pick<SecureContextOptions, 'cert' | 'key'>>>(props: T) {
  const result = await Promise.all([
    validateSecureContextItems(props.cert),
    validateSecureContextItems(props.key),
  ])

  if (result.includes(false)) {
    warn('HTTPS cert/key cannot be accessed. Using HTTP instead.')

    return
  }

  return props
}
