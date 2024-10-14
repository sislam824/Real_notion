"use client";
import Image from "next/image";
const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex  items-center">
        <div
          className="relative w-[300px] h-[300px]
        sm:w-[350px] sm-h[400px] md:-w-[400px]"
        >
          <Image
            src="/documents.png"
            fill
            className="object contain"
            alt="Documents"
          />
        </div>
        <div className="relative hidden md:block h-[400px] w-[400px]">
          <Image
            src="/reading.png"
            alt="Reading "
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
