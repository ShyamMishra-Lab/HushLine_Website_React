import { SiteFooter } from "../../components/SiteFooter.jsx";
import { SiteHeader } from "../../components/SiteHeader.jsx";
import { CommunityBand } from "./sections/CommunityBand.jsx";
import { FeatureBand } from "./sections/FeatureBand.jsx";
import { FlowBand } from "./sections/FlowBand.jsx";
import { HeroSection } from "./sections/HeroSection.jsx";
import { SpecsStrip } from "./sections/SpecsStrip.jsx";
import { TrustBand } from "./sections/TrustBand.jsx";

export function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <SpecsStrip />
        <FeatureBand />
        <FlowBand />
        <TrustBand />
        <CommunityBand />
      </main>
      <SiteFooter />
    </div>
  );
}
