import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import router from 'unplugin-vue-router/vite'
import { VueRouterAutoImports as routerImports } from 'unplugin-vue-router'
import imports from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import tsxProps from 'unplugin-vue-tsx-auto-props/vite'
import icons from 'unplugin-icons/vite'
import iconsResolver from 'unplugin-icons/resolver'
import { viteVueCSSVars as cssVars } from 'unplugin-vue-cssvars'
import unocss from 'unocss/vite'
import imageMin from 'unplugin-imagemin/vite'

// import macros from 'unplugin-macros/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: { '@': fileURLToPath(new URL('.', import.meta.url)) },
    },
    plugins: [
      // https://github.com/posva/unplugin-vue-router/tree/main#configuration
      router({
        routesFolder: 'pages',
        extensions: ['.vue', '.page.vue', '.page.md'],
        exclude: ['**/*.component.vue'],
        routeBlockLang: 'yaml',
        dts: './types/router.d.ts',
        logs: true,
      }),
      vue(),
      // https://github.com/unplugin/unplugin-vue-jsx#configuration
      jsx({}), // { include: [/\.tsx?$/], sourceMap: true, version: 3 }
      // https://github.com/unplugin/unplugin-vue-tsx-auto-props
      tsxProps(),
      // https://github.com/unplugin/unplugin-auto-import#configuration
      imports({
        dirs: ['components', 'composables'],
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          'vue', 'pinia', routerImports,
          {
            'vue-router/auto': ['RouterView', 'RouterLink', 'createRouter', 'createWebHistory', 'setupDataFetchingGuard'],
          },
        ],
        vueTemplate: true,
        dts: './types/imports.d.ts',
      }),
      // https://github.com/unplugin/unplugin-vue-components#configuration
      components({
        dirs: ['components'], deep: true, version: 3,
        include: [/\.tsx?$/, /\.vue$/, /\.vue\?vue/],
        extensions: ['tsx', 'vue'],
        resolvers: [
          iconsResolver(),
          (ComponentName) => {
            console.debug(ComponentName)
            // if (ComponentName === 'RouterView')
            //   return { name: ComponentName, from: 'vue-router/auto' }
          },
        ],
        dts: './types/components.d.ts',
      }),
      // https://github.com/unplugin/unplugin-icons
      icons(),
      // https://github.com/unplugin/unplugin-vue-cssvars
      cssVars({
        include: [/.vue/],
        includeCompile: ['**/**.css', '**/**.less', '**/**.sass', '**/**.scss', '**/**.styl'],
        alias: { '@': fileURLToPath(new URL('.', import.meta.url)) },
        server: false,
      }),
      // unocss.config.ts
      unocss(),
      // https://github.com/unplugin/unplugin-imagemin#support-vite-and-rollup
      imageMin(),
      // https://github.com/unplugin/unplugin-macros/tree/main#usage
      // macros(),
    ],
  }
})
