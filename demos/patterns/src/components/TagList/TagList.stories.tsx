import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagList } from "./TagList";
import "./TagList.css";

const meta = {
  component: TagList,
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 基準：短い・普通・長めを混ぜた一覧 */
export const Default: Story = {
  args: {
    tags: [
      { id: "1", label: "新着", priority: 1 },
      { id: "2", label: "メンテナンス", priority: 2 },
      { id: "3", label: "システムに関する重要なお知らせ", priority: 3 },
    ],
  },
};

/** 最小と最大：極端に短い／長いラベル */
export const MinAndMax: Story = {
  args: {
    tags: [
      { id: "1", label: "A", priority: 1 },
      { id: "2", label: "お", priority: 2 },
      {
        id: "3",
        label:
          "とても長いラベル名で三点リーダーになるかどうかを確認するためのタグ",
        priority: 3,
      },
    ],
  },
};

/** 同値の広がり：同じ「短い」でも描画が違う入力 */
export const EquivalenceSpread: Story = {
  args: {
    tags: [
      { id: "1", label: "API", priority: 1 },
      { id: "2", label: "エーピーアイ", priority: 2 },
      { id: "3", label: "ＡＰＩ", priority: 3 },
      { id: "4", label: "API!", priority: 4 },
      { id: "5", label: "API（β）", priority: 5 },
    ],
  },
};

/** 空に近い値：空文字・空白のみ */
export const NearEmpty: Story = {
  args: {
    tags: [
      { id: "1", label: "通常", priority: 1 },
      { id: "2", label: "", priority: 2 },
      { id: "3", label: "   ", priority: 3 },
    ],
  },
};

/** 並び順：priority とラベルでのソート結果を固定データで確認 */
export const SortOrder: Story = {
  args: {
    tags: [
      { id: "c", label: "緊急", priority: 1 },
      { id: "a", label: "お知らせ", priority: 2 },
      { id: "b", label: "アップデート", priority: 2 },
      { id: "d", label: "メモ" },
    ],
  },
};

export const Empty: Story = {
  args: {
    tags: [],
  },
};
