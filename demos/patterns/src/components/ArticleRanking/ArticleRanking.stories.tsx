import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArticleRanking } from "./ArticleRanking";
import "./ArticleRanking.css";

const meta = {
  component: ArticleRanking,
} satisfies Meta<typeof ArticleRanking>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 短い・長めの日本語タイトルを混ぜる。長い行は三点リーダーで省略される */
export const Japanese: Story = {
  args: {
    articles: [
      {
        id: "1",
        title: "Storybook入門：コンポーネントの状態をカタログにして確認する",
        viewCount: 32100,
      },
      {
        id: "2",
        title: "CSSのコンテナクエリーで作るカードレイアウトと余白の整え方",
        viewCount: 18400,
      },
      { id: "3", title: "Vite入門", viewCount: 9800 },
      {
        id: "4",
        title:
          "TypeScriptの型パズルを実務で使えるところまで落とし込むための考え方",
        viewCount: 4200,
      },
      { id: "5", title: "WebGPU入門", viewCount: 1500 },
    ],
  },
};

/** 英語タイトル。同じ幅でも省略の始まる位置が日本語と違う */
export const English: Story = {
  args: {
    articles: [
      {
        id: "1",
        title:
          "Getting started with Storybook: cataloging component states for review",
        viewCount: 32100,
      },
      {
        id: "2",
        title: "Card layouts with CSS container queries and spacing tips",
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

/** 閲覧数が同じ記事は同じ順位にし、次の順位はその件数分飛ばす（1, 2, 2, 4） */
export const TiedRanks: Story = {
  args: {
    articles: [
      { id: "1", title: "Storybook入門", viewCount: 10000 },
      { id: "2", title: "Vite入門", viewCount: 5000 },
      { id: "3", title: "WebGPU入門", viewCount: 5000 },
      { id: "4", title: "CSS入門", viewCount: 1000 },
    ],
  },
};

/** タイトルが空文字の行は「(タイトルなし)」と表示する */
export const EmptyTitle: Story = {
  args: {
    articles: [
      { id: "1", title: "Storybook入門", viewCount: 32100 },
      { id: "2", title: "", viewCount: 18400 },
      { id: "3", title: "Vite入門", viewCount: 9800 },
    ],
  },
};

/** 0件の表示 */
export const Empty: Story = {
  args: {
    articles: [],
  },
};
