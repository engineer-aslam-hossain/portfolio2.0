import cn from "@/lib/cn";
import Image from "next/image";
import "./Achievements.css";

const Achievements = ({ isDark }: any) => {
  const listOfAchievement = [
    {
      img: "/images/award1.jpg",
      link: "https://www.linkedin.com/posts/aslamhossain-dev_outstandingownership-awards-awardnight-activity-6939453764596563969-pHHK?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: "/images/award2.jpg",
      link: "https://www.linkedin.com/posts/aslamhossain-dev_work-motivation-selise-activity-7076509545795129345-c5LF?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: "/images/award3.jpg",
      link: "https://www.linkedin.com/posts/aslamhossain-dev_work-motivation-selise-activity-7076509545795129345-c5LF?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: "/images/award4.jpg",
      link: "https://www.linkedin.com/posts/aslamhossain-dev_work-motivation-selise-activity-7076509545795129345-c5LF?utm_source=share&utm_medium=member_desktop",
    },
  ];
  return (
    <div className="relative z-10 container w-auto mx-20 my-20 max-lg:mt-10 max-sm:mb-0 max-sm:mx-5 mb-30">
      <div>
        <h2
          className={cn(
            "text-3xl mb-6 uppercase max-sm:text-2xl",
            isDark ? "text-[hsla(172,95%,18%,1)]" : "text-[hsla(160,52%,71%,1)]"
          )}
        >
          Achievements
        </h2>
      </div>
      <div className="grid grid-cols-4 mb-20">
        {listOfAchievement.map((achievement) => (
          <div
            key={achievement.img}
            className="cliping"
            onClick={() => window.open(achievement.link)}
          >
            <Image
              src={achievement.img}
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="grayscale transition-[filter] duration-[0.3s] ease-[ease] hover:grayscale-[0%] hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
