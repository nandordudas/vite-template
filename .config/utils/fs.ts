import type { Buffer } from 'node:buffer'
import { access, constants } from 'node:fs/promises'

export async function isFileReadable(path?: string | Buffer) {
  if (path === undefined)
    return false

  try {
    await access(path, constants.R_OK)

    return true
  }
  catch {
    return false
  }
}
