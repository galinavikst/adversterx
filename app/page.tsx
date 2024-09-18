import Image from "next/image";
import RIGHT_IMG from "@/assets/1right.svg";
import LEFT_IMG from "@/assets/1left.svg";
import RIGHT3_IMG from "@/assets/3right.svg";
import LEFT3_IMG from "@/assets/3left.svg";
import Sound from "@/components/Sound";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const step = searchParams?.step || "1";

  return (
    <main className="relative w-full h-full">
      {(step === "1" || !step) && (
        <>
          <Step1 />
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
        </>
      )}

      {step === "2" && <Step2 />}

      {step === "3" && (
        <>
          <Step3 />
          <Image
            src={RIGHT3_IMG}
            alt="women"
            className="absolute hidden md:block -z-10 w-auto h-2/3 sm:h-3/4 bottom-0 sm:translate-x-0 -translate-x-1/4 right-10"
          />
          <Image
            src={LEFT3_IMG}
            alt="women"
            className="w-auto h-2/3 sm:h-3/4 absolute -z-10 bottom-0 left-10"
          />
        </>
      )}

      <Sound />
    </main>
  );
}
