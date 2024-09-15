import BasicHero from "@/components/home/basic_hero/BasicHero";
import Foundation from "@/components/home/foundation/Foundation";
import GivebackRibbon from "@/components/home/giveback_ribbon/GivebackRibbon";
import AnnualGrants from "@/components/home/annual_grants/AnnualGrants";
import VitalPreview from "@/components/home/vital_preview/VitalPreview";

export default function Home() {
  return (
      <div className="home">
          <BasicHero/>
          <Foundation/>
          <GivebackRibbon />
          <AnnualGrants />
          <VitalPreview />
      </div>
  );
}
