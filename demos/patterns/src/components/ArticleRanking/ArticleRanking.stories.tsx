import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArticleRanking } from "./ArticleRanking";
import "./ArticleRanking.css";

const meta = {
  component: ArticleRanking,
} satisfies Meta<typeof ArticleRanking>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 基準：短い・普通・長めの日本語タイトルを混ぜた5件 */
export const Japanese: Story = {
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

/** 英語タイトル。長い見出しは省略位置が日本語と違う */
export const English: Story = {
  args: {
    articles: [
      { id: "1", title: "Getting started with Storybook", viewCount: 32100 },
      {
        id: "2",
        title: "Card layouts with CSS container queries",
        viewCount: 18400,
      },
      { id: "3", title: "Vite basics", viewCount: 9800 },
      {
        id: "4",
        title:
          "How to organize the stories you register in Storybook and reduce the display patterns that are easy to miss",
        viewCount: 4200,
      },
      { id: "5", title: "WebGPU intro", viewCount: 1500 },
    ],
  },
};

/** 0件の表示 */
export const Empty: Story = {
  args: {
    articles: [],
  },
};
