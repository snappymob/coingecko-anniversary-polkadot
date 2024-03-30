import { useState } from 'react';

type ArticleItem = {
  thumbnailUrl: string;
  title: string;
  description: string;
  datePublished: string;
};

const KnowledgeHubSection = () => {
  const [data, setData] = useState<ArticleItem[]>([
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/article-defi.png',
      title: 'Demystifying Decentralized Finance (DeFi)',
      description: 'Uncover the revolutionary world of DeFi, understanding its impact on traditional finance.',
      datePublished: '01 Feb 2024',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/article-nft.png',
      title: 'Navigating NFTs: Art, Collectibles, and Beyond',
      description:
        'Dive into the realm of Non-Fungible Tokens (NFTs), exploring their significance in digital art, collectibles.',
      datePublished: '01 Feb 2024',
    },
    {
      thumbnailUrl: 'http://landing.coingecko.com/wp-content/uploads/2024/03/article-emerging.png',
      title: 'Rising Stars: Emerging Cryptocurrencies to Watch',
      description:
        'Explore the promising landscape of lesser-known cryptocurrencies, discovering the potential contenders.',
      datePublished: '01 Feb 2024',
    },
  ]);

  return (
    <section className="bg-white pt-[120px]" id="knowledge-hub">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center flex flex-col justify-center items-center gap-6">
            <h2 className="font-semibold text-[44px] leading-[48.4px] text-[#4A4A4A]">Knowledge Hub</h2>
            <div className="text-lg text-[#64748B] leading-[21.6px] max-w-xl">
              Stay informed and explore the latest insights in the ever-evolving world of cryptocurrencies.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8">
          <div>
            <h3 className="font-semibold text-4xl text-[#4A4A4A] mb-8">Articles</h3>
            <div className="text-lg text-[#64748B] leading-[21.6px]">
              Stay informed, sharpen your skills, and navigate the ever-evolving landscape of digital assets. Whether
              you're a seasoned trader or a curious beginner, our articles provide valuable insights and knowledge to
              keep you ahead in the crypto game.
            </div>
          </div>
          <div className="flex gap-8 justify-center pt-6 lg:pt-0 lg:items-end lg:justify-end">
            <div className="rounded-full flex justify-center items-center h-[40px] w-[40px] bg-[#8390a2] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                className="mr-1 w-8 h-8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className="rounded-full flex justify-center items-center h-[40px] w-[40px] bg-[#8390a2] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                className="ml-1 w-8 h-8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {data.map((d) => (
            <div className="flex flex-col">
              <div className="rounded-md mb-6 overflow-clip">
                <img src={d.thumbnailUrl} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="font-medium text-[28px] leading-[30.8px] mb-6">{d.title}</div>
              <div className="text-lg text-[#64748B] font-normal leading-[21.6px] mb-4">{d.description}</div>
              <div className="text-[#4A4A4A] text-sm">{d.datePublished}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-center">
          <div className="rounded-full h-[12px] w-[12px] bg-slate-400"></div>
          <div className="rounded-full h-[12px] w-[12px] bg-slate-300"></div>
          <div className="rounded-full h-[12px] w-[12px] bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHubSection;
