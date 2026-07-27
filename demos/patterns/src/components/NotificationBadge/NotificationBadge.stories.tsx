import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationBadge } from "./NotificationBadge";
import "./NotificationBadge.css";

const meta = {
  component: NotificationBadge,
  // バッジ単体では位置が分かりにくいため、アイコンを模した土台に重ねて表示する
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 8,
          background: "#eef1f4",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 18,
            height: 18,
            borderRadius: 4,
            background: "#8c959f",
          }}
        />
        <span style={{ position: "absolute", top: -15, right: -18 }}>
          <Story />
        </span>
      </div>
    ),
  ],
} satisfies Meta<typeof NotificationBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 1桁の表示 */
export const SingleDigit: Story = {
  args: {
    count: 3,
  },
};

/** 2桁の表示。1桁より幅が広がる */
export const DoubleDigit: Story = {
  args: {
    count: 42,
  },
};

/** maxを超えたら「99+」に省略する（最大） */
export const CapAtNinetyNinePlus: Story = {
  args: {
    count: 120,
    max: 99,
  },
};

/** 0 件はバッジを出さない（空に近い値） */
export const ZeroHidden: Story = {
  args: {
    count: 0,
  },
};

/** 表示される最小の件数（最小） */
export const One: Story = {
  args: {
    count: 1,
  },
};

/** ちょうどmaxの件数。省略せずそのまま表示する（境界） */
export const ExactMax: Story = {
  args: {
    count: 99,
    max: 99,
  },
};
