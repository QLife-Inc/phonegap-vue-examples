# PhoneGap + Vue + TypeScript 構築ログ

## Requirements

- Node.js 10+
- XCode 3.X (iOS を利用する場合)
- Android Studio 3.X (Android を利用する場合)

> `phonegap` コマンドを利用すると `npm` コマンドが実行されて `package-lock.json` が生成されるため、`yarn` は使わないほうがいい。

## 構築ログ

### Vue プロジェクト作成

```bash
npm install --global @vue/cli
vue create phonegap-vue-examples
```

`PWA` 以外をすべて選択、`Vue-Router` の `history` モードは無効に。あとはお好みで。

```console
Vue CLI v3.11.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Pick a E2E testing solution: Nightwatch
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: phonegap-vue-examples
```

### Vue 動作確認

```bash
cd phonegap-vue-examples
npm run serve
```

ブラウザで http://localhost:8080/ にアクセス。
![Vue + TypeScript](./vue-ts.png)

### PhoneGap プロジェクト作成

`PhoneGap CLI` でひな形を作成し、内容をプロジェクトルートにコピー。
コピーしたらひな形のプロジェクトは削除する。

```bash
npm install --save-dev phonegap
$(npm bin)/phonegap create ./phonegap --id com.example --name VuePhonegap
mv phonegap/config.xml phonegap/www ./
rm -rf phonegap
```
