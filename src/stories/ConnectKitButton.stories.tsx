import type { Meta, StoryObj } from '@storybook/react';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const meta: Meta<typeof ConnectKitButton> = {
  title: 'ConnectKitButton',
  component: ConnectKitButton,
};
export default meta;
type Story = StoryObj<typeof ConnectKitButton>;



export const Default = {

};
