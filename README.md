# 260803_storybook

Vite + React のお知らせ一覧（本編）と、Stories に残すパターン例（人気記事ランキング・通知バッジ）のサンプルです。

## 構成

npm workspaces でデモを分けています。

```
demos/
  notice-list/   # 本編（アプリ + Storybook）
  patterns/      # パターン登録用（Storybook のみ）
```

読者向けの `package.json` は各デモ配下を参照してください。

## 開発

ルートで依存を入れたあと、本編またはパターン用を起動します。

```sh
npm install
npm run dev                 # 本編アプリ
npm run storybook           # 本編 Storybook（port 6006）
npm run storybook:patterns  # パターン用 Storybook（port 6007）
```

## ビルド

```sh
npm run build
```

出力:

```
dist/
  index.html            # リンク一覧
  app/                  # 本編アプリ
  storybook/            # 本編 Storybook
  storybook-patterns/   # パターン用 Storybook
```
