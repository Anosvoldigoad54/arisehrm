import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    rules: {
      // Core rules
      'no-console': 'error',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      
      // Code quality rules
      'no-unreachable': 'error',
      'no-dupe-keys': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-constant-condition': 'error',
      'no-empty': 'warn',
      'no-extra-semi': 'error',
      'no-irregular-whitespace': 'error',
      'no-multiple-empty-lines': 'warn',
      'no-trailing-spaces': 'error',
      
      // Formatting rules
      'prefer-template': 'warn',
      'template-curly-spacing': 'error',
      'object-curly-spacing': 'error',
      'array-bracket-spacing': 'error',
      'comma-dangle': 'error',
      'semi': 'error',
      'quotes': ['error', 'single'],
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'coverage/**',
      '*.config.js',
      '*.config.ts',
      'scripts/**',
      'public/**',
      '.console-log-backups/**',
    ],
  },
]
