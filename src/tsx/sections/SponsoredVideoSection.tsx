const SponsoredVideoSection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[60px]">
        <div className="bg-[url('http://landing.coingecko.com/wp-content/uploads/2024/03/crypto-unveiled-feature.png')] rounded-3xl aspect-[66/48] flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16">
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-[44px] leading-[48.4px] text-[#4A4A4A] mb-8">
            Crypto Unveiled:
            <br />
            Sponsored Insights
          </h3>
          <div className="text-lg leading-[21.6px] text-[#64748B] mb-[60px]">
            Gain exclusive insights into the crypto world with our sponsored video, featuring experts breaking down
            market trends, project developments, and essential tips for both beginners and seasoned enthusiasts.
            Sponsored by leading voices in the crypto space.
          </div>
          <button className="btn-primary py-4 px-6 inline-flex">
            <div className="text-2xl font-bold btn-primary-text">Learn More</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsoredVideoSection;
