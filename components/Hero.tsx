import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className="relative sm:h-[625px] h-96 bg-cover sm:bg-cover sm:bg-no-repeat bg-center bg-tripoli sm:w-full mx-auto">
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div> */}
      </div>
      <section className="justify-content-center max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        {/* <div className="hero-map"/> */}

        <div id='home' className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          {/* <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
          <h1 className="text-center bold-18 lg:text-3xl">
            International <span className="text-blue-500">Immigration</span>   Conference
          </h1>
          <div className="w-full flex flex-col justify-content-center regular-18 mt-6 -mb-24 lg:-mb-0 text-gray-30">
            The critical conditions that have been affecting Lebanon for the
            past three consecutive years on the economic, political and monetary
            levels, have contributed to the elevation of unemployment rates and
            youth immigration. In light of the tremendous collapse of the
            country, where no one can take over the role of state with its
            institutions, resources and capabilities, immigration support and
            private investments currently form a preliminary step towards
            achieving economic recovery. Youth, in return, play an essential
            role in the society's progress and the development of the country's
            economy. Thus, because the City of Tripoli and the North in
            particular, is full of diverse resources, it is necessary to
            encourage young people to stay in their homeland by promoting job
            opportunities, giving them hope, and securing a promising future for
            them. Subsequently, the diaspora support is of great benefit to
            facilitate a better future for our youth, by connecting them to
            Lebanese expatriates worldwide. As a result, joint efforts between
            the " Lebanese-French Businessmen Association- HALFA", " Beirut Arab
            University- BAU " and " Sunday Cultural Council" have paved the way
            to launch the immigration conference.
          </div>
          {/* <div className="my-11 flex flex-wrap gap-5"></div> */}
        </div>

        {/* <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
            </div>
            <p className="bold-20 text-white">Tripoli</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">85.3 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">21 m</p>
            </div>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
};

export default Hero;
