// @ts-check
import { defineConfig } from 'eslint-define-config';
import eslint from 'eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import { parserOptions } from '@typescript-eslint/parser'; // Ensure TypeScript parser options

export default defineConfig({
  root: true, // Ensures ESLint knows it's the root configuration
  parser: '@typescript-eslint/parser', // Use the TypeScript parser for ESLint
  parserOptions: {
    project: './tsconfig.json', // Points to your tsconfig for TypeScript specific settings
    tsconfigRootDir: __dirname, // Resolves relative paths
    sourceType: 'module', // Allows ES Modules
  },
  plugins: ['@typescript-eslint', 'prettier'], // Enable TypeScript and Prettier plugins
  extends: [
    'eslint:recommended', // ESLint base recommendations
    'plugin:@typescript-eslint/recommended', // TypeScript specific rules
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  env: {
    node: true,
    jest: true, // Enable Jest environment if you're using Jest for testing
  },
  rules: {
    // Custom rules
    '@typescript-eslint/no-explicit-any': 'off', // Disabling explicit 'any' rule
    '@typescript-eslint/no-floating-promises': 'warn', // Warn on unhandled promises
    '@typescript-eslint/no-unsafe-argument': 'warn', // Warn on unsafe arguments
    'prettier/prettier': ['error', { singleQuote: true, semi: false }], // Prettier integration (optional)
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Apply specific rules to TypeScript files
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable module boundary type enforcement
      },
    },
  ],
  settings: {
    globals: {
      ...globals.node,
      ...globals.jest, // Use Jest globals for testing
    },
  },
});
