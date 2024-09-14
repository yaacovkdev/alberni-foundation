import AboutHeader from "@/components/about/about_header/AboutHeader";
import AboutTree from "@/components/about/about_tree/AboutTree";
import AnnualReports from "@/components/about/annual_reports/AnnualReports";
import AvailableGrants from "@/components/about/available_grants/AvailableGrants";
import MissionStatement from "@/components/about/mission_statement/MissionStatement";

export default function About() {
  return (
    <div className="about">
      <AboutHeader />
      <MissionStatement />
      <AvailableGrants />
      <AboutTree />
      <AnnualReports />
    </div>
  );
}
