import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideMenu } from "./SideMenu";
import "./SideMenu.css";

const meta = {
  component: SideMenu,
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const japaneseItems = [
  { id: "home", label: "ホーム" },
  { id: "notices", label: "お知らせ" },
  { id: "notice-settings", label: "通知の設定" },
  { id: "language", label: "言語設定" },
  { id: "logout", label: "ログアウト" },
];

const englishItems = [
  { id: "home", label: "Home" },
  { id: "notices", label: "Notifications" },
  { id: "notice-settings", label: "Notification settings" },
  { id: "language", label: "Language preferences" },
  { id: "logout", label: "Sign out" },
];

/** 基準：日本語のラベル。バッジなし */
export const Japanese: Story = {
  args: {
    activeId: "home",
    items: japaneseItems,
  },
};

/** 日本語 + バッジ。ラベルの幅を奪ってもバッジは潰れない */
export const JapaneseWithBadge: Story = {
  args: {
    activeId: "home",
    items: [
      { id: "home", label: "ホーム" },
      { id: "notices", label: "お知らせ", badgeCount: 120 },
      { id: "notice-settings", label: "通知の設定", badgeCount: 3 },
      { id: "language", label: "言語設定" },
      { id: "logout", label: "ログアウト" },
    ],
  },
};

/** 英語ラベル。バッジなし。長い項目は折り返す */
export const English: Story = {
  args: {
    activeId: "home",
    items: englishItems,
  },
};

/** 英語 + バッジ。長いラベルとバッジが並ぶ */
export const EnglishWithBadge: Story = {
  args: {
    activeId: "home",
    items: [
      { id: "home", label: "Home" },
      { id: "notices", label: "Notifications", badgeCount: 120 },
      { id: "notice-settings", label: "Notification settings", badgeCount: 12 },
      { id: "language", label: "Language preferences" },
      { id: "logout", label: "Sign out" },
    ],
  },
};
