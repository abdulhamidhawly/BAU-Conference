import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

const campSitesData = [
  {
    backgroundImage: "bg-sponser1",
    title: "International Immigration Conference",
    subtitle: "Prigen, Pasuruan",
    peopleJoined: "50+ Joined",
    position: "Lead",
  },
  {
    backgroundImage: "bg-sponser2",
    title: "Mountain View Camp",
    subtitle: "Somewhere in the Wilderness",
    peopleJoined: "50+ Joined",
    position: "Diamond",
  },
  {
    backgroundImage: "bg-sponser3",
    title: "Mountain View Camp",
    subtitle: "Somewhere in the Wilderness",
    peopleJoined: "50+ Joined",
    position: "Sapphire",
  },
  {
    backgroundImage: "bg-sponser4",
    title: "Mountain View Camp",
    subtitle: "Somewhere in the Wilderness",
    peopleJoined: "50+ Joined",
    position: "Gold",
  },
];
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  position: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  position,
}: CampProps) => {
  return (
    <div className=" -ml-4 flex flex-col h-[75%] w-[75%]  min-w-[400px]">
      <div
        className={`h-[75%] w-[75%] min-w-[400px] -mb-8  ${backgroundImage} bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl scale-75 bg-contain bg-center flex flex-col justify-center`}
      >
        <div className="flex h-full mb-4 flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-4">
            {/* <div className="rounded-full bg-blue-500 lg:-ml-12 lg:-mt-4 p-4 text-white font-bold">
            {position}
          </div> */}
            <div className="flex flex-col gap-1"></div>
          </div>
          <div className="flexCenter gap-6">
            <span className="flex -space-x-4 overflow-hidden"></span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 lg:mt-0 align-middle">
        <div className="rounded-full p-2 bg-blue-500  text-white font-bold  flex justify-center w-1/2">
          {position}
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col">
      <div className="flexEnd lg:mr-36">
        <div className="bg-blue-500 mt-10 lg:-mt-0 p-4 lg:p-8 max-sm:m-20 xl:max-w-[600px] xl:max-h-[200px] xl:rounded-5xl xl:py-8 relative overflow-hidden rounded-5xl ">
          <h1 className="text-5xl capitalize text-white px-7 py-2 max-sm:text-base">
            <strong>OUR SPONSORS </strong>
          </h1>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>

      {/* <div className="flex h-[340px] lg:h-[400px] xl:h-[640px]">
        {campSitesData.map((campSiteData, index) => (
          <CampSite
            key={index}
            backgroundImage={campSiteData.backgroundImage}
            title={campSiteData.title}
            subtitle={campSiteData.subtitle}
            peopleJoined={campSiteData.peopleJoined}
            position={campSiteData.position}
          />
        ))}
      </div> */}
      <div className="w-full h-[340px] lg:h-[400px] xl:h-[640px] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
  <div className="flex items-center justify-center md:justify-start [&_li]:mx-8   animate-infinite-scroll gap-4">
    {campSitesData.map((campSiteData, index) => (
      <CampSite
        key={index}
        backgroundImage={campSiteData.backgroundImage}
        title={campSiteData.title}
        subtitle={campSiteData.subtitle}
        peopleJoined={campSiteData.peopleJoined}
        position={campSiteData.position}
      />
    ))}
  </div>
  <div className="flex items-center justify-center md:justify-start [&_li]:mx-8  animate-infinite-scroll gap-4" aria-hidden="true">
    {campSitesData.map((campSiteData, index) => (
      <CampSite
        key={index}
        backgroundImage={campSiteData.backgroundImage}
        title={campSiteData.title}
        subtitle={campSiteData.subtitle}
        peopleJoined={campSiteData.peopleJoined}
        position={campSiteData.position}
      />
    ))}
  </div>
</div>
    </section>
  );
};

export default Camp;
