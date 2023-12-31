import type { Meta, StoryObj } from "@storybook/react";

import { CollectionCard } from "./CollectionCard";

const meta: Meta<typeof CollectionCard> = {
  component: CollectionCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
