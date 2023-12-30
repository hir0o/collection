import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";
import { within, userEvent } from "@storybook/testing-library";

const meta = {
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Play: Story = {
  play: async ({ canvasElement }) => {
    const counter = within(canvasElement).getByRole("button");

    await expect(counter).toHaveTextContent("0");

    await userEvent.click(counter);
    await expect(counter).toHaveTextContent("1 is odd");

    await userEvent.click(counter);
    await expect(counter).toHaveTextContent("2 is even");
  },
};
