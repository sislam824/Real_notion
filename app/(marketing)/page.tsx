import Footer from "./_components/footer";
import { Heading } from "./_components/heading";
import Heroes from "./_components/heroes";
const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col ">
      <div className="flex flex-col md:justify-start items-center justify-center  text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />

        <Heroes />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;
