// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';

import prettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js builtins
            'external', // npm packages
            'internal', // internal packages (monorepo)
            'parent', // parent imports
            'sibling', // sibling imports
            'index', // same folder index
            'object', // object imports
            'type', // type imports
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-dom',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-router-dom',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@mui/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/components/ui/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/theme/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/types/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/services/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/features/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: [
            'react',
            'react-dom',
            'react-router-dom',
          ],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  // Enforce Fc layer: forbid direct MUI imports outside src/components/ui/
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/components/ui/**', 'src/theme/**'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          name: '@mui/material',
          message:
            'Direct MUI imports are forbidden in app code. Use Fc components from @/components/ui instead.',
        },
        {
          name: '@mui/material/*',
          message:
            'Direct MUI imports are forbidden in app code. Use Fc components from @/components/ui instead.',
        },
        {
          name: '@mui/icons-material',
          message:
            'Direct MUI icon imports are forbidden in app code. Import icons from @/components/ui instead.',
        },
        {
          name: '@mui/icons-material/*',
          message:
            'Direct MUI icon imports are forbidden in app code. Import icons from @/components/ui instead.',
        },
        {
          name: '@/features/**/*',
          message:
            'Cross-feature imports are forbidden. Use shared layers (types, services, components/ui) instead.',
        },
      ],
    },
  },
  // Enforce feature structure: features can only import from shared layers
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        // Forbidden imports for features
        {
          name: '@mui/**',
          message:
            'Use Fc components from @/components/ui instead of direct MUI imports.',
        },
        {
          name: '@/features/**/*',
          message:
            'Cross-feature imports are forbidden. Use shared layers instead.',
        },
      ],
    },
  },
  // Component size warnings
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'max-lines': [
        'warn',
        {
          max: 150,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'max-lines-per-function': [
        'warn',
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'const',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: 'let',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: 'var',
          next: '*',
        },
      ],
    },
  },
  ...storybook.configs['flat/recommended'],
]);
