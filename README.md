# PhoneGap + Vue + TypeScript

PhoneGap のアプリを Vue + TypeScript で実装するためのボイラープレートプロジェクトです。
実際の構築手順は [構築ログ](./docs/CONSTRUCT.md) を参照してください。

## セットアップ

```bash
npm install --global @vue/cli
npm install
npm run build
npm run phonegap prepare
```

### コンパイル & ブラウザでの起動

コマンドラインターミナルを 2 つ起動して、それぞれで以下のコマンドを実行。

```bash
npm run watch
```

```bash
npm run serve
```

### iOS エミュレータでの起動

初回実行時のみ最初に以下のコマンドを実行。

```bash
npm run phonegap prepare ios
```

上記コマンド実行済みなら以下のコマンドを実行。

```bash
npm run ios
```

### Android エミュレータでの起動

コマンドラインでの実行はできないため、[構築ログ](./docs/CONSTRUCT.md) を参照。

### Run all tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Run your end-to-end tests

```bash
npm run test:e2e
```

### Run your unit tests

```bash
npm run test:unit
```

### Add cordova/phonegap plugin

```bash
npm run cordova plugin add cordova-plugin-xxxxxxx -- --save
npm run phonegap plugin add phonegap-plugin-xxxxxxx -- --save
```

### Add vue cli plugin

```bash
vue add vuetify
```
