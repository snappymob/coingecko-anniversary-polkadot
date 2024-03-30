const FooterSection = () => {
  return (
    <footer className="px-4 sm:px-0 grid lg:grid-cols-6 grid-cols-3 gap-12 sm:gap-4 container mx-auto py-10">
      <div className="col-span-3">
        <a href="#" className="flex gap-4 items-center">
          <img
            className="h-10 w-10"
            src="https://support.coingecko.com/hc/article_attachments/4499575478169/CoinGecko_logo.png"
            alt=""
          />
          <div className="text-xl lg:text-2xl font-medium">Crypto Engagement Hub</div>
        </a>
      </div>
      <div>
        <h4 className="pb-5">Resources</h4>
        <nav>
          <ul>
            <li className="pb-5">
              <a href="#campaigns" className="text-[#64748B] font-normal">
                Campaigns
              </a>
            </li>
            <li className="pb-5">
              <a href="#sweepstakes" className="text-[#64748B] font-normal">
                Sweepstakes
              </a>
            </li>
            <li className="pb-5">
              <a href="#knowledge-hub" className="text-[#64748B] font-normal">
                Knowledge Hub
              </a>
            </li>
            <li>
              <a href="#dapps" className="text-[#64748B] font-normal">
                DApps
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h4 className="pb-5">Contacts</h4>
        <nav>
          <ul>
            <li className="pb-5">
              <a href="#" className="text-[#64748B] font-light">
                name@email.com
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="text-[#64748B] font-light">
                +60 1242 0912
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="text-[#64748B] font-light">
                123 Kuala Lumpur Malaysia
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h4 className="pb-5">Social Media</h4>
        <nav>
          <ul>
            <li className="pb-5">
              <a href="#" className="text-[#64748B] font-light">
                Twitter/X
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="text-[#64748B] font-light">
                Facebook
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="text-[#64748B] font-light">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-[#64748B] font-light">
                Discord
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default FooterSection;
