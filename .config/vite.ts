import { access, constants } from 'node:fs/promises'
import process from 'node:process'

import uiPro from '@nuxt/ui-pro/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const https = await getHttpsOptions(env.VITE_HTTPS_CERT, env.VITE_HTTPS_KEY)

  return {
    plugins: [
      vue(),
      uiPro({
        autoImport: {
          imports: ['pinia', 'vue'],
          dirs: ['src/stores/**'],
        },
      }),
    ],
    server: { https },
    resolve: {
      alias: {
        '@': '/src', // [INFO] use same in tsconfig.app.json `compilerOptions.paths`
      },
    },
  }
})

async function getHttpsOptions(cert: string, key: string) {
  try {
    await access(cert, constants.R_OK)
    await access(key, constants.R_OK)

    return { cert, key } as const
  }
  catch {
    console.warn('HTTPS cert/key cannot access')
  }
}
