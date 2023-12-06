import Navbar from "./components/Navbar";
import LavaLamp from "./components/LavaLamp";

function Hero() {
  return (
    <div className="w-screen h-screen bg-white relative">
      <LavaLamp />
      <Navbar />
      <div className="absolute z-[10] top-0 left-0 w-full h-full flex  pt-[25%] md:pt-0 md:items-center justify-center  ">
        <div className="flex flex-col gap-y-5 p-4 px-8 md:px-4 w-full max-w-screen-lg">
          <h1 className="text-[48px] leading-[45px] sm:text-[73px] sm:leading-[71px]   lg:text-[93px] lg:leading-[90px] title-font font-bold w-[11ch]   ">
            Financial infrastructure for the internet
          </h1>
          <p className="w-[40ch] sm:w-[45ch] text-md sm:text-lg">
            Millions of companies of all sizes use Stripe online and in person
            to accept payments, send payouts, automate financial processes, and
            ultimately grow revenue.
          </p>
          <div className="flex gap-x-4 items-center">
            <button className="bg-black text-white px-4 py-[6px] rounded-[25px] hover:bg-opacity-75">
              Start now
            </button>
            <a className="hover:opacity-50 cursor-pointer"> Contact sales</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
