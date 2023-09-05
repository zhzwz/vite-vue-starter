import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import router from 'unplugin-vue-router/vite'
import { VueRouterAutoImports as routerImports } from 'unplugin-vue-router'
import imports from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
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
      // https://github.com/unplugin/unplugin-auto-import#configuration
      imports({
        dirs: ['./composables'],
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          'vue', 'pinia', routerImports,
        ],
        vueTemplate: true,
        dts: './types/imports.d.ts',
      }),
      // https://github.com/unplugin/unplugin-vue-components#configuration
      components({
        dts: './types/components.d.ts',
        dirs: ['components'],
        deep: true,
        version: 3,
        include: [/\.vue$/, /\.vue\?vue/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      }),
      unocss(),
    ],
  }
})
