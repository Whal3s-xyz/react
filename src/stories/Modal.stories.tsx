import type { Meta, StoryContext, StoryObj } from '@storybook/react'
import { WagmiConfig, createConfig, useAccount } from 'wagmi'
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from 'connectkit'
import { WagmiProvider } from '@whal3s/wagmiprovider'
import { watchAccount } from '@wagmi/core'
import { Whal3sModalContext, Whal3sModalProvider } from '../index'
import { useContext } from 'react'


const meta: Meta<typeof Whal3sModalProvider> = {
  title: 'Modal',
  component: Whal3sModalProvider,
  args: {
    utilityId: '8dbe5a9a-42c9-452b-aef4-521b4162feed',
    modalImage: 'https://picsum.photos/200',
  },
  argTypes: {
    utilityId: {
      control: {
        type: 'text',
      }
    },
    modalImage: {
      control: {
        type: 'text',
      }
    }
  }
}
export default meta
type Story = StoryObj<typeof Whal3sModalProvider>;


export const Default = {
  decorators: [
    (Story: React.ReactNode, {args}:StoryContext) => {
      const account = useAccount()
      const wagmiProvider = new WagmiProvider(account)

      const unwatch = watchAccount((account) => {
        wagmiProvider.setAccount(account)
      })
      return (
        <Whal3sModalProvider utilityId={args.utilityId}
                             modalImage={args.modalImage}
                             provider={wagmiProvider}>
          <Story />
        </Whal3sModalProvider>
      )
    },

  ],
  render: () => {
    const {state, dispatch} = useContext(Whal3sModalContext);

    return (
      <>
        <ConnectKitButton />
        <button onClick={() => {
          dispatch({type: 'SET_OPEN', payload: true})
        }}>Shot</button>
      </>
    )
  },
}
