import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArticleRanking } from "./ArticleRanking";
import "./ArticleRanking.css";

const meta = {
  component: ArticleRanking,
} satisfies Meta<typeof ArticleRanking>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 基準：短い・普通・長めのタイトルを混ぜた5件 */
export const Default: Story = {
  args: {
    articles: [
      { id: "1", title: "Storybook入門", viewCount: 32100 },
      { id: "2", title: "CSSのコンテナクエリーで作るカードレイアウト", viewCount: 18400 },
      { id: "3", title: "Vite入門", viewCount: 9800 },
      { id: "4", title: "TypeScriptの型パズルを実務で使えるところまで落とし込む", viewCount: 4200 },
      { id: "5", title: "WebGPU入門", viewCount: 1500 },
    ],
  },
};

/** 最小と最大：タイトルの長短と、閲覧数の桁数の違い */
export const MinAndMax: Story = {
  args: {
    articles: [
      {
        id: "1",
        title:
          "アニメーションの実装で悩んだときに読み返したいCSSとJavaScriptの使い分けの指針",
        viewCount: 1234567,
      },
      { id: "2", title: "AI", viewCount: 7 },
    ],
  },
};

/** 同値の広がり：同じ「短いタイトル」でも文字種で幅が変わる */
export const EquivalenceSpread: Story = {
  args: {
    articles: [
      { id: "1", title: "React入門", viewCount: 5000 },
      { id: "2", title: "リアクト入門", viewCount: 4000 },
      { id: "3", title: "Ｒｅａｃｔ入門", viewCount: 3000 },
      { id: "4", title: "React（β）入門", viewCount: 2000 },
      { id: "5", title: "CSSの:has()入門", viewCount: 1000 },
    ],
  },
};

/** 空に近い値：空文字・空白のみのタイトル、0 PV、集計前 */
export const NearEmpty: Story = {
  args: {
    articles: [
      { id: "1", title: "Storybook入門", viewCount: 120 },
      { id: "2", title: "", viewCount: 80 },
      { id: "3", title: "   ", viewCount: 0 },
      { id: "4", title: "公開直後の記事" },
    ],
  },
};

/** 並び順：閲覧数が同じ2件を同順位にし、次の順位を飛ばす */
export const SortOrder: Story = {
  args: {
    articles: [
      { id: "1", title: "1位の記事", viewCount: 9000 },
      { id: "2", title: "3位タイの記事（登録順は先）", viewCount: 3000 },
      { id: "3", title: "2位の記事", viewCount: 5000 },
      { id: "4", title: "3位タイの記事（登録順は後）", viewCount: 3000 },
      { id: "5", title: "4位ではなく5位になる記事", viewCount: 1000 },
      { id: "6", title: "集計前なので末尾に並ぶ記事" },
    ],
  },
};

/** 境界：メダル色が付く3位と、付かない4位の差 */
export const MedalBoundary: Story = {
  args: {
    articles: [
      { id: "1", title: "1位の記事", viewCount: 4000 },
      { id: "2", title: "2位の記事", viewCount: 3000 },
      { id: "3", title: "3位の記事", viewCount: 2000 },
      { id: "4", title: "4位の記事", viewCount: 1000 },
    ],
  },
};

/** 0件の表示 */
export const Empty: Story = {
  args: {
    articles: [],
  },
};
