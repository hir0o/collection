import type { Meta, StoryObj } from "@storybook/react";

import { Collection } from "./Collection";

const meta: Meta<typeof Collection> = {
  component: Collection,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
