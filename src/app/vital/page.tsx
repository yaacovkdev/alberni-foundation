import PageHeader from "@/components/page_header/PageHeader";
import VitalSigns from "@/components/vital_signs/VitalSigns";

export default function Vital() {
  return (
    <div className="vital">
        <PageHeader>Vital Signs</PageHeader>

        <VitalSigns />
    </div>
  )
}
