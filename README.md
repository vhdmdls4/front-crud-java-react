# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


#### Tailwindcss commands config:
Docs: https://tailwindcss.com/docs/guides/vite

$ yarn add tailwindcss -D
$ yarn add postcss
$ yarn add autoprefixer

- Para iniciar as configurações do tailwind gerando postcss.config.js e tailwind.config.js:
$ yarn tailwindcss init -p

<!-- - Você vai precisar do yarn add @types/node para usar o require -->
- Se for trabalhar sem outros preprocessors (sass, less...) instale esses plugins para o postcss cuidar disso
Docs: https://tailwindcss.com/docs/using-with-preprocessors

$ yarn add -D postcss-import //importacoes de estilos em outros arquivos
$ yarn add -D postcss-nesting //usando css nesting

(postcss.config precisa ser .js)

- Caso queira dar uma olhada em quais propriedades css os navegadores em diferentes versões suportam:
https://caniuse.com/

