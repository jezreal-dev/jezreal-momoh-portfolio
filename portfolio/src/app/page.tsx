import Hero from "@/components/Hero";
import ValueRole from "@/components/ValueRole";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <ValueRole />
    </div>
  );
}