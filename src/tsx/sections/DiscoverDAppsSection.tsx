import { useState, ReactNode } from 'react';

const GamingIcon = () => (
  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.99992 0.833255C7.98808 0.83225 8.96406 1.05137 9.85696 1.4747C10.7499 1.89802 11.5372 2.51493 12.1619 3.28059L7.94258 7.49992L12.1619 11.7193C11.5372 12.4849 10.7499 13.1018 9.85696 13.5251C8.96406 13.9485 7.98808 14.1676 6.99992 14.1666C3.31792 14.1666 0.333252 11.1819 0.333252 7.49992C0.333252 3.81792 3.31792 0.833255 6.99992 0.833255ZM6.99992 2.83326C6.7347 2.83326 6.48035 2.93861 6.29281 3.12615C6.10528 3.31368 5.99992 3.56804 5.99992 3.83326C5.99992 4.09847 6.10528 4.35283 6.29281 4.54036C6.48035 4.7279 6.7347 4.83326 6.99992 4.83326C7.26514 4.83326 7.51949 4.7279 7.70703 4.54036C7.89456 4.35283 7.99992 4.09847 7.99992 3.83326C7.99992 3.56804 7.89456 3.31368 7.70703 3.12615C7.51949 2.93861 7.26514 2.83326 6.99992 2.83326Z"
      fill="#34AF00"
    />
  </svg>
);

const FinanceAndDeFiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#34AF00" width="20" height="20">
    <path
      fill-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.624 7.084a.75.75 0 0 0-1.248.832l2.223 3.334H9a.75.75 0 0 0 0 1.5h2.25v1.5H9a.75.75 0 0 0 0 1.5h2.25v1.5a.75.75 0 0 0 1.5 0v-1.5H15a.75.75 0 0 0 0-1.5h-2.25v-1.5H15a.75.75 0 0 0 0-1.5h-1.599l2.223-3.334a.75.75 0 1 0-1.248-.832L12 10.648 9.624 7.084Z"
      clip-rule="evenodd"
    />
  </svg>
);

const NFTIcon = () => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.00008 7.50008C5.3537 7.50008 5.69284 7.35961 5.94289 7.10956C6.19294 6.85951 6.33342 6.52037 6.33342 6.16675C6.33342 5.81313 6.19294 5.47399 5.94289 5.22394C5.69284 4.97389 5.3537 4.83342 5.00008 4.83342C4.64646 4.83342 4.30732 4.97389 4.05727 5.22394C3.80722 5.47399 3.66675 5.81313 3.66675 6.16675C3.66675 6.52037 3.80722 6.85951 4.05727 7.10956C4.30732 7.35961 4.64646 7.50008 5.00008 7.50008ZM7.00008 0.166748L13.3334 3.83341V11.1667L7.00008 14.8334L0.666748 11.1667V3.83341L7.00008 0.166748ZM2.00008 4.60208V10.3981L3.58141 11.3134L8.96342 7.36675L12.0001 9.18941V4.60275L7.00008 1.70675L2.00008 4.60208Z"
      fill="#34AF00"
    />
  </svg>
);

type DiscoverDAppsItem = {
  thumbnailUrl: string;
  name: string;
  network: string;
  uniqueActiveWallets: number;
  category: string;
  icon: ReactNode;
};

const DiscoverDAppsSection = () => {
  const [data, setData] = useState<DiscoverDAppsItem[]>([
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/gaming-guild-icon.png',
      name: 'Gaming Guild',
      network: 'Flow Blockchain',
      icon: <GamingIcon />,
      category: 'Gaming',
      uniqueActiveWallets: 18000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/nft-explorer-icon.png',
      name: 'NFT Explorer',
      network: 'Binance Smart Chain',
      icon: <NFTIcon />,
      category: 'NFT',
      uniqueActiveWallets: 15000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/defi-yield-farm-icon.png',
      name: 'DeFi Yield Farm',
      network: 'Polygon',
      icon: <FinanceAndDeFiIcon />,
      category: 'Finance and DeFi',
      uniqueActiveWallets: 30000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/gaming-guild-icon.png',
      name: 'Gaming Guild',
      network: 'Flow Blockchain',
      icon: <GamingIcon />,
      category: 'Gaming',
      uniqueActiveWallets: 18000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/nft-explorer-icon.png',
      name: 'NFT Explorer',
      network: 'Binance Smart Chain',
      icon: <NFTIcon />,
      category: 'NFT',
      uniqueActiveWallets: 15000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/defi-yield-farm-icon.png',
      name: 'DeFi Yield Farm',
      network: 'Polygon',
      icon: <FinanceAndDeFiIcon />,
      category: 'Finance and DeFi',
      uniqueActiveWallets: 30000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/gaming-guild-icon.png',
      name: 'Gaming Guild',
      network: 'Flow Blockchain',
      icon: <GamingIcon />,
      category: 'Gaming',
      uniqueActiveWallets: 18000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/nft-explorer-icon.png',
      name: 'NFT Explorer',
      network: 'Binance Smart Chain',
      icon: <NFTIcon />,
      category: 'NFT',
      uniqueActiveWallets: 15000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/defi-yield-farm-icon.png',
      name: 'DeFi Yield Farm',
      network: 'Polygon',
      icon: <FinanceAndDeFiIcon />,
      category: 'Finance and DeFi',
      uniqueActiveWallets: 30000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/gaming-guild-icon.png',
      name: 'Gaming Guild',
      network: 'Flow Blockchain',
      icon: <GamingIcon />,
      category: 'Gaming',
      uniqueActiveWallets: 18000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/nft-explorer-icon.png',
      name: 'NFT Explorer',
      network: 'Binance Smart Chain',
      icon: <NFTIcon />,
      category: 'NFT',
      uniqueActiveWallets: 15000,
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/defi-yield-farm-icon.png',
      name: 'DeFi Yield Farm',
      network: 'Polygon',
      icon: <FinanceAndDeFiIcon />,
      category: 'Finance and DeFi',
      uniqueActiveWallets: 30000,
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
            <div className="border border-solid border-slate-300 rounded-3xl text-center py-4 flex flex-col items-center shadow-secondaryShadow border-t-2 border-x-2">
              <h4 className="text-[28px] font-medium pb-1">{d.name}</h4>
              <p className="text-2xl text-[#64748B]">{d.network}</p>
              <img className="m-3 max-w-40 h-full object-contain" src={d.thumbnailUrl} />
              <p className="text-[#64748B] mb-2 text-lg">UAW: {d.uniqueActiveWallets.toLocaleString(undefined)}</p>
              <div className="border border-solid border-[#33415566] text-[#64748B] rounded-full px-3 py-1 flex items-center gap-1">
                {d.icon}
                <span className="inline-flex">{d.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverDAppsSection;
