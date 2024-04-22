const MeetupSection = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto">
        <img
          className="rounded-lg mb-12"
          src="http://landing.coingecko.com/wp-content/uploads/2024/04/cg-polkadot-meetup.png"
          alt=""
        />
        <div className="text-[#64748B] lg:max-w-3xl mx-auto">
          <div className="text-black font-unbounded mb-4">
            Join us and our Head of Research, Zhong Yang Chan, as he presents key highlights of our 2024 Q1 Crypto
            Industry Report – from an overview of crypto markets, to analyzing Bitcoin and Ethereum, deep diving into
            DeFi and NFT ecosystems, and finally CEX and DEX performances.
          </div>
          <div className="mb-2">When: Wednesday, April 25, 2024 8.30am - 10am EDT.</div>
          <div className="mb-2">Tune in for our Virtual Meetup #30, featuring an exciting panel of speakers:</div>
          <ul>
            <li>Zhong Yang Chan, Head of Research, CoinGecko (Moderator)</li>
            <li>Ingo Ruebe (Founder, Kilt Protocol)</li>
            <li>Bill Laboon (Director of Education & Governance Initiatives, Web3 Foundation)</li>
            <li>John Linden (CEO & Co-Founder, Mythical Games)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MeetupSection;
