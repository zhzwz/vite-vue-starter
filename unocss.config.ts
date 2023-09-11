import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [
    // prose-coolgray prose-sky prose-rose prose-truegray prose-warmgray prose-invert
    ['markdown', 'prose prose-truegray dark:prose-invert m-auto'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true }),
    presetTypography(), // prose
    presetWebFonts({
      fonts: { sans: 'DM Sans', serif: 'DM Serif Display', mono: 'DM Mono' },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'markdown flex prose text-left display-none'.split(' '),
})
