import type { Meta, StoryObj } from "@storybook/react-vite";
import { NoticeList } from "./NoticeList";
import "./NoticeList.css";

const meta = {
  component: NoticeList,
} satisfies Meta<typeof NoticeList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleNotices = [
  {
    id: "1",
    publishedAt: "2026-08-01",
    title: "休館",
  },
  {
    id: "2",
    publishedAt: "2026-07-28",
    title: "夏季休業のお知らせ",
  },
  {
    id: "3",
    publishedAt: "2026-07-15",
    title:
      "システムメンテナンスに伴うサービス一時停止と再開予定時刻、および影響範囲とお客様へのお願いについてのお知らせ",
  },
];

export const Default: Story = {
  args: {
    notices: sampleNotices,
  },
};

export const Loading: Story = {
  args: {
    notices: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    notices: [],
  },
};

export const Scroll: Story = {
  args: {
    notices: Array.from({ length: 40 }, (_, index) => ({
      id: String(index + 1),
      publishedAt: "2026-07-01",
      title: `お知らせ ${index + 1}`,
    })),
  },
};
