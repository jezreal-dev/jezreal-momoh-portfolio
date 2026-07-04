import Hero from "@/components/Hero";
import ValueRole from "@/components/ValueRole";
import ProofOfWork from "@/components/ProofOfWork";
import SkillMatrix from "@/components/SkillMatrix";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <ProofOfWork />
      <ValueRole />
      <SkillMatrix />
      <Newsletter />
    </div>
  );
}