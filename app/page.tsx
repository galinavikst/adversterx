import Image from "next/image";
import RIGHT_IMG from "@/assets/1right.svg";
import LEFT_IMG from "@/assets/1left.svg";
import Sound from "@/components/Sound";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <Step1 />
      {/* <Step2 /> */}
      <Sound />
      <Image
        src={RIGHT_IMG}
        alt="women"
        className="absolute -z-10 w-auto h-2/3 sm:h-3/4 bottom-0 sm:translate-x-0 -translate-x-1/4 right-0"
      />
      <Image
        src={LEFT_IMG}
        alt="women"
        className="w-auto h-2/3 sm:h-3/4 hidden sm:block absolute -z-10 bottom-0 left-0"
      />
    </main>
  );
}
