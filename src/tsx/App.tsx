import { render } from 'react-dom';
import CandyCampaignSection from './sections/CandyCampaignSection';
import CompaniesSection from './sections/CompaniesSection';
import DataCampaignSection from './sections/DataCampaignSection';
import DiscoverDAppsSection from './sections/DiscoverDAppsSection';
import FooterSection from './sections/FooterSection';
import HeaderSection from './sections/HeaderSection';
import HeroSection from './sections/HeroSection';
import KnowledgeHubSection from './sections/KnowledgeHubSection';
import SponsoredVideoSection from './sections/SponsoredVideoSection';
import SweepstakesSection from './sections/SweepstakesSection';

const App = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <CompaniesSection />
        <CandyCampaignSection />
        <SweepstakesSection />
        <KnowledgeHubSection />
        <DataCampaignSection />
        <SponsoredVideoSection />
        <DiscoverDAppsSection />
      </main>
      <FooterSection />
    </>
  );
};

document.documentElement.classList.add('scroll-smooth');

render(<App />, document.getElementById('app'));
