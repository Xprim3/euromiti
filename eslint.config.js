import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{vue,js,ts,jsx,tsx}'],
    languageOptions: {
      parser: vue.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        parser: typescriptParser,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      vue: vue,
      prettier: prettier,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...vue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prettier/prettier': 'error',
    },
  },
]
