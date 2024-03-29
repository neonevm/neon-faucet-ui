import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import { isMobile } from './config'
import Layout from './components/common/Layout'
import Button from './components/common/Button'
import { ReactComponent as MobileErrorIcon } from './assets/mobile-error.svg'
import TokenGetter from './components/TokenGetter'
import CookieBanner from './components/CookieBanner';
import { TokensProvider } from './contexts/tokens'
import './App.scss'

function getLibrary(provider) {
  return new Web3(provider)
}

const MobileErrorOverlay = () => {
  return (
    <div className='flex flex-col items-center justify-between pb-12'>
      <div>
        <MobileErrorIcon className='mb-8 -mr-4' />
      </div>
      <div>
        <div className='text-center pt-4 pb-8 text-3xl leading-snug'>
          Sorry, Neon Faucet <br />
          doesn’t work
          <br /> at mobile phones.
        </div>
        <div className='text-center text-gray-300'>
          But you can still explore the possibilities of Neon ecosystem at neon-labs.org
        </div>
      </div>
      <div className='mt-10'>
        <a rel='noopener noreferrer' target='_blank' href='https://neon-labs.org'>
          <Button>Visit Neon-labs</Button>
        </a>
      </div>
    </div>
  )
}

function App() {
  if (isMobile())
    return (
      <Layout className='flex flex-col w-full relative'>
        <MobileErrorOverlay />
      </Layout>
    )

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout className='flex flex-col w-full relative'>
        <TokensProvider>
          <TokenGetter />
        </TokensProvider>

        <CookieBanner />
      </Layout>
    </Web3ReactProvider>
  )
}

export default App
