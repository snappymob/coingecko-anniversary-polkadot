import PrimaryButton from '../components/PrimaryButton';

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full">
        <img
          className="w-full object-contain"
          src="http://landing.coingecko.com/wp-content/uploads/2024/03/polkadot-subpage-banner.png"
          alt=""
        />
      </div>
      <div className="w-full justify-center flex flex-col items-center">
        <img
          className="w-full object-contain"
          src="http://landing.coingecko.com/wp-content/uploads/2024/03/polkadot-subpage-subbanner.png"
          alt=""
        />
        <PrimaryButton
          label="Explore Now"
          buttonPt={{ className: 'py-4 px-6 inline-flex' }}
          innerPt={{ className: 'text-2xl font-bold' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
