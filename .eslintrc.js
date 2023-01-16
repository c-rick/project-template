module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    },
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  },
  parserOptions: {
    'ecmaVersion': 2019,
    'sourceType': 'module',
    'ecmaFeatures': {
      jsx: true
    }
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'quotes': [2, 'single'],
    'object-curly-spacing': [2, 'always'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-empty-function': 'off'
  }
}