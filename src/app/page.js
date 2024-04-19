import Navbar from "@/components/Navbar";
import CurriculumSection from "@/components/CurriculumSection";
import GenedSection from "@/components/GenedSection";
import SummarySection from "@/components/SummarySection";
export default function Home() {
  return (
    <main className="bg-white w-full h-full">
      <Navbar />
      <CurriculumSection />
      <GenedSection />
      <SummarySection />
    </main>
  );
}
