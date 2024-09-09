import Hero from "@/components/ui/hero";
import Newest from "@/components/ui/newest";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-white pb-6 sm:pb-8">
    <Hero/>
    <Newest/>
   </div>
  );
}
