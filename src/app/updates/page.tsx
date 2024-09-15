import PageHeader from "@/components/page_header/PageHeader";
import Announcements from "@/components/announcements/Announcements";

export default function Page() {
    return (
        <div className="updates">
            <PageHeader>Updates</PageHeader>

            <Announcements />
        </div>
    );
}