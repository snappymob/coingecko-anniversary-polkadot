import { ReactNode, useState } from 'react';
import { shuffle } from '../utils/array-helpers';

const GamingIcon = () => (
  <svg viewBox="0 0 13 15" fill="currentColor" className="text-primary-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99992 0.833255C7.98808 0.83225 8.96406 1.05137 9.85696 1.4747C10.7499 1.89802 11.5372 2.51493 12.1619 3.28059L7.94258 7.49992L12.1619 11.7193C11.5372 12.4849 10.7499 13.1018 9.85696 13.5251C8.96406 13.9485 7.98808 14.1676 6.99992 14.1666C3.31792 14.1666 0.333252 11.1819 0.333252 7.49992C0.333252 3.81792 3.31792 0.833255 6.99992 0.833255ZM6.99992 2.83326C6.7347 2.83326 6.48035 2.93861 6.29281 3.12615C6.10528 3.31368 5.99992 3.56804 5.99992 3.83326C5.99992 4.09847 6.10528 4.35283 6.29281 4.54036C6.48035 4.7279 6.7347 4.83326 6.99992 4.83326C7.26514 4.83326 7.51949 4.7279 7.70703 4.54036C7.89456 4.35283 7.99992 4.09847 7.99992 3.83326C7.99992 3.56804 7.89456 3.31368 7.70703 3.12615C7.51949 2.93861 7.26514 2.83326 6.99992 2.83326Z" />
  </svg>
);

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary-500 w-5 h-5">
    <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
  </svg>
);

const DeFiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary-500 w-5 h-5">
    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
  </svg>
);

const DexIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary-500 w-5 h-5">
    <path
      fillRule="evenodd"
      d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
      clipRule="evenodd"
    />
  </svg>
);

const LstIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="text-primary-500 w-5 h-5"
  >
    {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
    <path d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12 31-3.9 1-.1 1 .1 31 3.9 96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32zM32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H132.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160H320l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256V180.2l-32-4-32 4V224H173.3c-8.5 0-16.6 3.4-22.6 9.4L128 256H32z" />
  </svg>
);

type DiscoverDAppsItem = {
  thumbnailUrl: string;
  callToActionUrl: string;
  name: string;
  callToAction: string;
  category: string;
  icon: ReactNode;
};

const DiscoverDAppsSection = () => {
  const [data, setData] = useState<DiscoverDAppsItem[]>([
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/nova-wallet-icon.png',
      name: 'Nova Wallet',
      callToAction: 'Get Nova Wallet',
      callToActionUrl: 'https://novawallet.io/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/subwallet-icon.png',
      name: 'Sub Wallet',
      callToAction: 'Get Sub Wallet',
      callToActionUrl: 'https://www.subwallet.app/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/talisman-icon-red.png',
      name: 'Talisman',
      callToAction: 'Get Talisman',
      callToActionUrl: 'https://www.talisman.xyz/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/enkrypt-logo.png',
      name: 'Enkrypt',
      callToAction: 'Get Enkrypt',
      callToActionUrl: 'https://www.enkrypt.com/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/fearless-wallet-icon.png',
      name: 'Fearless Wallet',
      callToAction: 'Get Fearless Wallet',
      callToActionUrl: 'https://fearlesswallet.io/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/PolkaWallet.png',
      name: 'PolkaWallet',
      callToAction: 'Get PolkaWallet',
      callToActionUrl: 'https://polkawallet.io/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Polkagate.png',
      name: 'PolkaGate',
      callToAction: 'Get PolkaGate',
      callToActionUrl: 'https://polkagate.xyz/',
      icon: <WalletIcon />,
      category: 'Wallet',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/centrifuge-logo.png',
      name: 'Centrifuge',
      callToAction: 'Platform for tokenizing, managing, and investing in a diversified portfolio of real-world assets.',
      callToActionUrl: 'https://centrifuge.io/',
      icon: <DeFiIcon />,
      category: 'Defi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/interlay-icon.png',
      name: 'Interlay',
      callToAction: 'Bitcoin DeFi via a trustless gateway with fiat access and multi-chain support.',
      callToActionUrl: 'https://www.interlay.io/',
      icon: <DeFiIcon />,
      category: 'Defi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/starlay-icon.png',
      name: 'Starlay',
      callToAction: 'Decentralized network for creating, betting on, and resolving prediction markets.',
      callToActionUrl: 'https://starlay.finance/',
      icon: <DeFiIcon />,
      category: 'Defi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Zeitgeist.png',
      name: 'Zeitgeist',
      callToAction: 'First omni-inscriptions marketplace on Polkadot to create, transfer and manage your inscriptions.',
      callToActionUrl: 'https://zeitgeist.pm/',
      icon: <DeFiIcon />,
      category: 'Defi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Moonwell.png',
      name: 'Moonwell',
      callToAction:
        'Open lending and borrowing protocol on Base, Moonbeam, and Moonriver with intuitive user interface.',
      callToActionUrl: 'https://moonwell.fi/',
      icon: <DeFiIcon />,
      category: 'Defi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Dotins.png',
      name: 'Dotins',
      callToAction:
        'Lending protocol that allows quick and easy depositing and borrowing of tokens on top of Astar Network.',
      callToActionUrl: 'https://www.dotins.io/',
      icon: <DeFiIcon />,
      category: 'Defi',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/HydraDX.png',
      name: 'HydraDX',
      callToAction: 'DEX protocol utilizing multiple AMMs for low-slippage trades.',
      callToActionUrl: 'https://hydradx.io/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Arthswap.png',
      name: 'Arthswap',
      callToAction: 'DeFi protocol offering swapped assets, staking, farming, and more.',
      callToActionUrl: 'https://app.arthswap.org/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/BeamSwap.png',
      name: 'Beamswap',
      callToAction: 'Moonbeam-based DeFi hub primarily with DEX and an AMM.',
      callToActionUrl: 'https://beamswap.io/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Polkadex.png',
      name: 'Polkadex',
      callToAction: 'The combination of CEX and DEXs into a non-custodial, order book based exchange.',
      callToActionUrl: 'https://polkadex.trade',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/PolkaSwap.png',
      name: 'Polkaswap',
      callToAction: 'Non-custodial AMM DEX for fast and secure cross-chain exchange of assets.',
      callToActionUrl: 'https://polkaswap.io/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/StellaSwap.png',
      name: 'StellaSwap',
      callToAction: 'Hybrid DEX with 3 AMMs to swap, farm, bridge, and explore assets easily.',
      callToActionUrl: 'https://stellaswap.com/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Zenlink.png',
      name: 'Zenlink',
      callToAction: 'DEX composable hub between all Polkadot parachains.',
      callToActionUrl: 'https://zenlink.pro/en/',
      icon: <DexIcon />,
      category: 'Dex',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Acala.png',
      name: 'Acala',
      callToAction: 'Cross-chain DeFi network and liquidity hub built on Polkadot.',
      callToActionUrl: 'https://acala.network/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/BiFrost.png',
      name: 'Bifrost',
      callToAction: 'Non-custodial liquid staking protocol, serving the omni-chain vision.',
      callToActionUrl: 'https://bifrost.finance/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Algem.png',
      name: 'Algem',
      callToAction: 'DeFi dapp for liquid assets on Astar Network.',
      callToActionUrl: 'https://www.algem.io/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/EQ-Finance.png',
      name: 'EQ Finance',
      callToAction: 'The first interest-bearing stablecoin backed by LSTs on Polkadot.',
      callToActionUrl: 'https://equilibrium.io/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Parallel.png',
      name: 'Parallel',
      callToAction: 'DeFi protocol with liquid staking and crowdloan, AMM, money market, DAO FI, and farming.',
      callToActionUrl: 'https://app.parallel.fi/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Taiga.png',
      name: 'Taiga',
      callToAction: 'Synthetic asset protocol unifying DOT and KSM staking and crowdloan derivatives',
      callToActionUrl: 'https://www.taigaprotocol.io/',
      icon: <LstIcon />,
      category: 'LST',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Heal3.png',
      name: 'Heal3',
      callToAction: 'Game-Fi healthcare dapp built on Astar network.',
      callToActionUrl: 'https://heal3.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/moonbeans-logo.png',
      name: 'Moonbeans',
      callToAction: 'Multi-chain digital collectibles marketplace with self-managed storefronts.',
      callToActionUrl: 'https://moonbeans.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/GreatEscape.png',
      name: 'The Great Escape',
      callToAction: 'New-gen hyper-casual Web3 game based on a free-to-play, gas-less and chain-agnostic model.',
      callToActionUrl: 'https://www.playtge.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Singular.png',
      name: 'Singular',
      callToAction: 'Modular NFT marketplace to mint, trade, and experience advanced NFTs.',
      callToActionUrl: 'https://singular.app/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/KodaDot.png',
      name: 'KodaDOT',
      callToAction: 'NFT marketplace enabling multi-chain digital asset creation, trading, and management on Polkadot.',
      callToActionUrl: 'https://kodadot.xyz/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/UniqueNetwork.png',
      name: 'Unique Network',
      callToAction: 'Next-generation NFT utility tools for creating and trading the advanced NFTs.',
      callToActionUrl: 'https://unique.network/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/AwesomeAjunaAvatars.png',
      name: 'Awesome Ajuna Avatars',
      callToAction: 'Blockchain game with unique heroes, seasons, quests, and NFTs.',
      callToActionUrl: 'https://aaa.ajuna.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/ArtZero.png',
      name: 'ArtZero',
      callToAction: 'NFT marketplace on Aleph Zero, 5ireChain and Astar networks.',
      callToActionUrl: 'https://a0.artzero.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/AstarStrike.png',
      name: 'Astar Strike',
      callToAction: 'Multiplayer first-person shooter (FPS) browser game.',
      callToActionUrl: 'https://zkstrike.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/ExiledRacer.png',
      name: 'Exiled Racers',
      callToAction: 'Low touch racing manager and prediction game, integrated with premium digital collectibles.',
      callToActionUrl: 'https://www.exiledracers.com/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Bluez.png',
      name: 'Bluez',
      callToAction: 'Community-driven NFT marketplace built on Astar network.',
      callToActionUrl: 'https://www.bluez.app/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/Everloot.png',
      name: 'Evrloot',
      callToAction: 'Dark-fantasy role playing game pioneering intriguing lore and deep on-chain progression.',
      callToActionUrl: 'https://evrloot.io/',
      icon: <GamingIcon />,
      category: 'GameFi & NFT',
    },
  ]);

  return (
    <section className="py-24 bg-white" id="dapps">
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-semibold text-[44px] leading-[48.4px] text-[#4A4A4A] mb-6">Discover DApps</h3>
          <div className="text-lg leading-[21.6px] text-[#64748B]">
            Explore the decentralised world with our curated selection of innovative DApps across various categories and
            platforms.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 my-12 md:px-20">
          {data.map((d) => (
            <a
              href={d.callToActionUrl}
              target="_blank"
              className="border border-solid border-slate-300 rounded-3xl text-center py-4 px-8 flex flex-col items-center shadow-secondaryShadow border-t-2 border-x-2"
            >
              <h4 className="text-[28px] font-medium pb-1">{d.name}</h4>
              <img className="m-3 max-w-40 h-full object-contain" src={d.thumbnailUrl} />
              <p className="text-[#64748B] mb-2 text-lg" title={d.callToAction}>
                {d.callToAction}
              </p>
              <div className="border border-solid border-[#33415566] text-[#64748B] rounded-full px-3 py-1 flex items-center gap-1">
                {d.icon}
                <span className="inline-flex">{d.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverDAppsSection;
