import process from 'node:process'

import uiPro from '@nuxt/ui-pro/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

import { getHttpsOptions } from './helpers'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const https = await getHttpsOptions({
    cert: env.VITE_HTTPS_CERT,
    key: env.VITE_HTTPS_KEY,
  })

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
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia'],
    },
    build: {
      reportCompressedSize: false,
      sourcemap: process.env.NODE_ENV === 'development',
      esbuild: {
        pure: ['console.log', 'console.debug', 'console.info'],
        drop: ['debugger'],
        legalComments: 'none',
      },
      chunkSizeWarningLimit: 100,
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 10_000,
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              const modulePath = id.split('node_modules/')[1]
              const topLevelFolder = modulePath.split('/')[0]

              if (topLevelFolder !== '.pnpm')
                return topLevelFolder

              const scopedPackageName = modulePath.split('/')[1]
              const chunkName = scopedPackageName.split('@')[scopedPackageName.startsWith('@') ? 1 : 0]

              return chunkName
            }
          },
        },
      },
    },
  }
})
