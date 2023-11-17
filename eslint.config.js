import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

/**
 * The plugin `eslint-plugin-perfectionist` allows you to sorted object keys, imports, etc, with auto-fix.
 */
/* eslint perfectionist/sort-objects: "error" */
export default antfu(
  /**
   * @see https://github.com/antfu/eslint-config#create-config-file
   * Combined with legacy config.
   */
  ...new FlatCompat().config({
    extends: [
      '@unocss',
    ],
  }),
  /**
   * Overrides.
   */
  {
    rules: {
      // 'no-unused-vars': 'warn',
      // 'useRouter' is not defined.eslint
      'no-undef': 'off',
      'no-console': 'warn',
      'vue/singleline-html-element-content-newline': 'off',
      // jsonc/sort-keys: off
      // object-property-newline: off
      // '@unocss/order': 'off',
    },
  },
)
/* eslint perfectionist/sort-objects: "off" */
