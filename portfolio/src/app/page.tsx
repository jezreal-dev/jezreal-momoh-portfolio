import Hero from "@/components/Hero";
import ValueRole from "@/components/ValueRole";
import ProofOfWork from "@/components/ProofOfWork";
import SkillMatrix from "@/components/SkillMatrix";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <ValueRole />
      <ProofOfWork />
      <SkillMatrix />
    </div>
  );
}
