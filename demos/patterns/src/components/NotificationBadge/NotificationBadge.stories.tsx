import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationBadge } from "./NotificationBadge";
import "./NotificationBadge.css";

const meta = {
  component: NotificationBadge,
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

export const SingleDigit: Story = {
  args: {
    count: 3,
  },
};

export const DoubleDigit: Story = {
  args: {
    count: 42,
  },
};

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

export const One: Story = {
  args: {
    count: 1,
  },
};

export const ExactMax: Story = {
  args: {
    count: 99,
    max: 99,
  },
};
