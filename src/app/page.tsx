import Hero from "@/components/home/hero/Hero";
import Foundation from "@/components/home/foundation/Foundation";
import GivebackRibbon from "@/components/home/giveback_ribbon/GivebackRibbon";
import AnnualGrants from "@/components/home/AnnualGrants/AnnualGrants";

export default function Home() {
  return (
      <div className="home">
          <Hero/>
          <Foundation/>
          <GivebackRibbon />
          <AnnualGrants />
      </div>
  );
}
