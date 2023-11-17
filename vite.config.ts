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
import markdown from 'unplugin-vue-markdown/vite'
import mis from 'markdown-it-shiki'
import mila from 'markdown-it-link-attributes'
import mia from 'markdown-it-anchor'
import mimt from 'markdown-it-multimd-table'
import chalk from 'chalk'
import macros from 'unplugin-macros/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: { '@': fileURLToPath(new URL('.', import.meta.url)) },
    },
    plugins: [
      // https://github.com/posva/unplugin-vue-router/tree/main#configuration
      router({
        routesFolder: [
          'pages',
          { src: 'posts', path: 'blog/' },
        ],
        extensions: ['.vue', '.page.vue', '.md', '.page.md'],
        exclude: ['**/*.component.vue'],
        routeBlockLang: 'yaml',
        dts: './types/router.d.ts',
        logs: true,
      }),

      vue({
        include: [/\.vue$/, /\.md$/], // allows vue to compile markdown files
      }),

      // https://github.com/unplugin/unplugin-vue-markdown#options
      markdown({
        // https://markdown-it.github.io/markdown-it/
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
        // headEnabled: true,
        markdownItSetup(markdownIt) {
          // https://github.com/antfu/markdown-it-shiki#usage
          // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
          markdownIt.use(mis, {
            highlightLines: true,
            theme: 'dark-plus',
          })
          markdownIt.use(mila, {
            matcher: (link: string) => /^https?:\/\//.test(link),
            attrs: { target: '_blank', rel: 'noopener' },
          })
          markdownIt.use(mia, {
            permalink: mia.permalink.headerLink({
              safariReaderFix: true,
            }),
          })
          markdownIt.use(mimt, {
            multiline: true,
            rowspan: true,
            headerless: true,
            multibody: true,
            aotolabel: true,
          })
        },
        // markdownItSetup(markdownIt) {
        //   import MarkdownItAnchor from 'markdown-it-anchor'
        //   import MarkdownItPrism from 'markdown-it-prism'
        //   markdownIt.use(MarkdownItAnchor)
        //   markdownIt.use(MarkdownItPrism)
        // },
        wrapperClasses: 'markdown',
      }),

      // https://github.com/unplugin/unplugin-vue-jsx#configuration
      jsx(), // { include: [/\.tsx?$/], sourceMap: true, version: 3 }

      // https://github.com/unplugin/unplugin-vue-tsx-auto-props
      tsxProps(),

      // https://github.com/unplugin/unplugin-auto-import#configuration
      imports({
        dirs: ['components', 'composables'],
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          'vue',
          'pinia',
          routerImports,
          {
            'vue-router/auto': ['RouterView', 'RouterLink', 'createRouter', 'createWebHistory', 'setupDataFetchingGuard'],
          },
        ],
        // auto import in vue sfc <template>
        vueTemplate: true,
        dts: './types/imports.d.ts',
      }),

      // https://github.com/unplugin/unplugin-vue-components#configuration
      components({
        dirs: ['components'], deep: true, version: 3,
        include: [/\.tsx?$/, /\.md/, /\.vue$/, /\.vue\?vue/],
        extensions: ['tsx', 'md', 'vue'],
        resolvers: [
          iconsResolver(),
          (ComponentName) => {
            console.debug(chalk.cyan('Component:'), chalk.green(ComponentName))
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

      /**
       * @see https://github.com/unplugin/unplugin-macros/tree/main#usage
       * @example
       * [macros.js]
       *   export const buildTime = Date.now();
       * [index.js]
       *   import { buildTime } from './macros' assert { type: 'macro' };
       *   // the `buildTime` will be replaced with the timestamp at build time.
       */
      macros(),
    ],
    // assetsInclude: ['**/*.md'],
  }
})
