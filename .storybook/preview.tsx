import type { Preview } from "@storybook/react";
import { createConfig, useAccount, WagmiConfig } from 'wagmi'
import { ConnectKitButton, ConnectKitProvider, getDefaultConfig } from 'connectkit'
import {WagmiProvider} from "@whal3s/wagmiprovider";
import {watchAccount} from "@wagmi/core";
import { Whal3sModalProvider } from '../lib'

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: '', // or infuraId
    walletConnectProjectId: '',

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);


const preview: Preview = {

  decorators: [
    (Story) => (
      <WagmiConfig config={config}>
        <ConnectKitProvider>
         <Story />
        </ConnectKitProvider>
      </WagmiConfig>
    ),
  ]
};

export default preview;
