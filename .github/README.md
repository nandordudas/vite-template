# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

> [!TIP]
> > mkcert is a simple tool for making locally-trusted development certificates. It requires no configuration.
> [mkcert](https://github.com/FiloSottile/mkcert)

## VS Code

General configuration:

```jsonc
{
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  /*  */
  "editor.detectIndentation": false,
  "editor.gotoLocation.multipleDefinitions": "goto",
  "editor.inlayHints.enabled": "offUnlessPressed",
  "editor.tabSize": 2,
  /*  */
  "files.encoding": "utf8",
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  /*  */
  "js/ts.implicitProjectConfig.checkJs": false,
  /*  */
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.disableAutomaticTypeAcquisition": true,
  "typescript.format.semicolons": "remove",
  "typescript.inlayHints.enumMemberValues.enabled": true,
  "typescript.inlayHints.functionLikeReturnTypes.enabled": true,
  "typescript.inlayHints.parameterNames.enabled": "literals",
  "typescript.inlayHints.parameterNames.suppressWhenArgumentMatchesName": true,
  "typescript.inlayHints.parameterTypes.enabled": true,
  "typescript.inlayHints.propertyDeclarationTypes.enabled": true,
  "typescript.inlayHints.variableTypes.enabled": true,
  "typescript.inlayHints.variableTypes.suppressWhenTypeMatchesName": true,
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "typescript.preferences.importModuleSpecifierEnding": "minimal",
  "typescript.preferences.preferTypeOnlyAutoImports": true,
  "typescript.preferences.quoteStyle": "single",
  "typescript.suggest.completeFunctionCalls": false,
  "typescript.tsc.autoDetect": "off",
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.tsserver.maxTsServerMemory": 4096,
  "typescript.tsserver.useSyntaxServer": "never",
  "typescript.tsserver.watchOptions": {
    "fallbackPolling": "dynamicPriorityPolling",
    "synchronousWatchDirectory": true,
    "watchFile": "useFsEventsOnParentDirectory"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  /*  */
  "vue.autoInsert.dotValue": true,
  "vue.codeLens.enabled": false,
  "vue.inlayHints.destructuredProps": true,
  "vue.inlayHints.inlineHandlerLeading": true,
  "vue.inlayHints.missingProps": true,
  "vue.inlayHints.optionsWrapper": true,
  "vue.inlayHints.vBindShorthand": true,
  /*  */
  "cSpell.allowCompoundWords": true,
  "cSpell.language": "en-US",
  "cSpell.words": [
    "bumpp",
    "nums",
    "nuxt",
    "unplugin"
  ],
  /*  */
  "errorLens.fontStyleItalic": true,
  "errorLens.gutterIconsEnabled": true,
  "errorLens.scrollbarHackEnabled": true
}
```

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

```jsonc
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
