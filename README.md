# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## VS Code

`ESLint` configuration:

```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "editor.formatOnSave": false,
  /*  */
  "eslint.options": {
    "cache": true,
    "overrideConfigFile": ".config/eslint.ts"
  },
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],
  "eslint.validate": [
    "html",
    "json",
    "markdown",
    "tailwindcss",
    "typescript",
    "vue"
  ]
}
```

`Tailwind CSS` configuration:

```json
{
  "editor.quickSuggestions": {
    "strings": "on"
  },
  /*  */
  "files.associations": {
    "*.css": "tailwindcss"
  },
  /*  */
  "tailwindCSS.classAttributes": [
    "active-class",
    "class",
    "enter-active-class",
    "enter-active-class",
    "enter-from-class",
    "enter-to-class",
    "leave-active-class",
    "leave-from-class",
    "leave-to-class",
    "inactive-class",
    "ui"
  ],
  "tailwindCSS.emmetCompletions": true,
  "tailwindCSS.experimental.classRegex": [
    ["ui:\\s*{([^)]*)\\s*}", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```
