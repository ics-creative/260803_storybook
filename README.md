# 260803_storybook

Vite + React のお知らせ一覧アプリと、同じコンポーネントを確認する Storybook のサンプルです。

## 開発

```sh
npm install
npm run dev
```

Storybook:

```sh
npm run storybook
```

## ビルド

```sh
npm run build
```

出力:

```
dist/
  index.html   # 入口（リンク一覧）
  app/         # 通常のアプリデモ
  storybook/   # Storybook 静的書き出し
```

相対パス（`base: './'`）で出力するため、GitHub Pages などでもディレクトリ構成を保てば動作します。
