[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

> [!TIP]
>
> > [mkcert](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development
> > certificates. It requires no configuration.

## Prerequisites

Use GitHub the current template or clone repository.

```bash
git clone https://github.com/nandordudas/vite-template project-acme
cd project-acme
rm -rf .git
git init
git commit --allow-empty --message 'chore: initial commit'
```

## Setup

```bash
cp .env.example .env # (optional) fill out missing values
pnpm install
pnpm run dev --open
```

> [!NOTE]
>
> If you encounter ESLint errors that are difficult to resolve, try temporarily disabling TypeScript in your ESLint
> configuration as a first troubleshooting step.
>
> ```diff
> - typescript: { tsconfigPath: 'tsconfig.app.json' }, // [INFO] should be commented out
> + // typescript: { tsconfigPath: 'tsconfig.app.json' },
> ```

Is recommended to set `VS Code` settings for better DX with

## `VS Code` snippets

<details>
<summary>Click to expand</summary>

```jsonc
{
  "Vue Component Template": {
    "prefix": "vue-component",
    "description": "Creates a new component template with TypeScript support",
    "scope": "vue",
    "body": [
      "<script lang=\"ts\">",
      "/* [INFO] empty */",
      "</script>",
      "",
      "<script setup lang=\"ts\">",
      "defineOptions({",
      "  name: '${TM_FILENAME_BASE}',",
      "  inheritAttrs: false,",
      "})",
      "</script>",
      "",
      "<template>",
      "  <div>",
      "    ${TM_FILENAME_BASE}",
      "  </div>",
      "</template>",
      ""
    ]
  },
  /*  */
  "Pinia Setup Store Boilerplate": {
    "prefix": "pinia-setup",
    "description": "Bootstrap the code needed for a Pinia Setup Store file",
    "scope": "typescript",
    "body": [
      "export const use${TM_FILENAME_BASE/^(.*)$/${1:/pascalcase}/}Store = defineStore('$TM_FILENAME_BASE', () => {",
      "  return {}",
      "})",
      "",
      "if (import.meta.hot)",
      " import.meta.hot.accept(acceptHMRUpdate(use${TM_FILENAME_BASE/^(.*)$/${1:/pascalcase}/}Store, import.meta.hot))",
      ""
    ]
  }
}
```

</details>

## `VS Code` settings

<details>
<summary>Click to expand</summary>

```jsonc
{
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  /*  */
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "editor.formatOnSave": false,
  "editor.gotoLocation.multipleDefinitions": "goto",
  "editor.inlayHints.enabled": "offUnlessPressed",
  "editor.quickSuggestions": {
    "strings": "on"
  },
  /*  */
  "files.associations": {
    "*.css": "tailwindcss"
  },
  /*  */
  "javascript.inlayHints.parameterNames.enabled": "literals",
  "javascript.inlayHints.variableTypes.enabled": true,
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
  "vue.codeLens.enabled": false,
  "vue.inlayHints.destructuredProps": true,
  "vue.inlayHints.inlineHandlerLeading": true,
  "vue.inlayHints.missingProps": true,
  "vue.inlayHints.optionsWrapper": true,
  "vue.inlayHints.vBindShorthand": true,
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
  ],
  /*  */
  "cSpell.allowCompoundWords": true,
  "cSpell.language": "en-US",
  "cSpell.words": [
    "bradlc",
    "bumpp",
    "dbaeumer",
    "nums",
    "nuxt",
    "unplugin",
    "usernamehw"
  ],
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
    "inactive-class"
  ],
  "tailwindCSS.emmetCompletions": true,
  /*  */
  "errorLens.fontStyleItalic": true,
  "errorLens.gutterIconsEnabled": true,
  "errorLens.scrollbarHackEnabled": true
}
```

</details>

---

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
