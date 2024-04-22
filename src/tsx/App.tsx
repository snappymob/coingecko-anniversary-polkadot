import { render } from 'react-dom';
import DiscoverDAppsSection from './sections/DiscoverDAppsSection';
import FooterSection from './sections/FooterSection';
import HeaderSection from './sections/HeaderSection';
import HeroSection from './sections/HeroSection';
import KnowledgeHubSection from './sections/KnowledgeHubSection';
import MeetupSection from './sections/MeetupSection';
import SponsoredVideoSection from './sections/SponsoredVideoSection';
import SubHeroSection from './sections/SubHeroSection';

const App = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        {/* <CompaniesSection /> */}
        {/* <CandyCampaignSection /> */}
        {/* <SweepstakesSection /> */}
        <MeetupSection />
        <KnowledgeHubSection />
        {/* <DataCampaignSection /> */}
        <SponsoredVideoSection
          title="What is Polkadot?"
          videoUrl="https://www.youtube.com/embed/29Ty-VTDnh4?si=yPipAeIz3Wxxdiap"
          callToActionUrl="https://wiki.polkadot.network/docs/learn-index"
          pt={{ className: 'pb-14 bg-slate-5' }}
        >
          Polkadot unites, secures and facilitates a network of heterogeneous blockchains called Parachains.
        </SponsoredVideoSection>
        <SponsoredVideoSection
          title="Explore Polkadot with Nova Wallet"
          videoUrl="https://www.youtube.com/embed/mOZe_OprONQ?si=pobiAaigDSayXsz9"
          videoSide="right"
          callToActionUrl="https://wiki.polkadot.network/docs/learn-index"
          pt={{ className: 'pt-14 bg-slate-5' }}
        >
          Learn how to stake, participate in Polkadot OpenGov and more using Nova Wallet.
        </SponsoredVideoSection>
        <DiscoverDAppsSection />
        <SubHeroSection />
      </main>
      <FooterSection />
    </>
  );
};

document.documentElement.classList.add('scroll-smooth');

render(<App />, document.getElementById('app'));
