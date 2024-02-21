import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

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
    
    <div className='flex flex-col h-[75%] w-[75%]  min-w-[400px]'>
    <div className={`h-[75%] w-[75%] min-w-[400px] -mb-8  ${backgroundImage} bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl scale-75 bg-contain bg-center flex flex-col justify-center`}>
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
    <section className="2xl:max-container relative flex flex-col  lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-sponser1"
          title="International Immigration Conference"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
          position="Lead"
        />
        <CampSite
          backgroundImage="bg-sponser2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
          position="Diamond"
        />
        <CampSite
          backgroundImage="bg-sponser3"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
          position="Sapphire"
        />
        <CampSite
          backgroundImage="bg-sponser4"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
          position="Gold"
        />
      </div>

      <div className="flexEnd px-6 lg:-mt-48 lg:mr-6">
        <div className="bg-blue-500 -mt-12 lg:-mt-0 p-4 lg:p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>CONFERENCE</strong> | SPONSORS
          </h2>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
