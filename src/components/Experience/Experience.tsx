import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

import cn from "@/lib/cn";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Experience = ({ isDark }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const experienceList = [
    {
      year: "2024 - Current",
      url: "https://www.abo.fi/",
      position: "Studying Master's in IT(CE), Åbo Akademi University",
      responsibilities: [
        "Currently honing my skills in project management and mastering cloud tech.",
        "Learning the art of securing software systems, protecting against vulnerabilities.",
        "Building a strong foundation in software quality assurance and testing.",
        "Tech addict, always on the hunt, constantly leveling up my skills.",
      ],
      tools: ["Cloud Computing", "Project Management", "Parallel Programming"],
    },
    {
      year: "2021 - 2024",
      url: "https://selisegroup.com/",
      position: "Software Engineer, SELISE",
      responsibilities: [
        "Led diverse teams, built cutting-edge apps with Next.js and Flutter.",
        "Fostered teamwork, navigated complex projects to success.",
        "Conquered challenges with creative solutions, adapted to change.",
        "Thrived in a demanding role, took initiative, delivered results.",
      ],
      tools: [
        "Next.js",
        "Express.js",
        "Flutter",
        "Storyblok",
        "MongoDB",
        "Redis",
        "SSO",
        "Material UI",
        "Tailwind CSS",
      ],
    },
    {
      year: "2020 - 2021",
      url: "https://crantechllc.com/",
      position: "Software Engineer, Crantech LLC",
      responsibilities: [
        "Crafted apps with React and Next.js, seamlessly integrated backends.",
        "Teamed up to deliver pixel-perfect UIs.",
        "Engineered a cross-platform audio meeting app.",
        "Wielded a diverse toolkit, conquered coding challenges with finesse.",
      ],
      tools: [
        "Javascript",
        "React",
        "React Native",
        "Redux",
        "SCSS",
        "Node.js",
      ],
    },
  ];

  //
  useGSAP(
    () => {
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: ref.current, // Element to pin
          start: "top-=50px top", // Start when the top of the section hits the top of the viewport
          end: "bottom-=540px", // End after scrolling 540px beyond the section
          pin: true, // Pin the element in place
          pinSpacing: false, // Keep spacing when the element is pinned
          markers: false, // Visual markers for debugging (remove in production)
        });
      });
    },
    { scope: ref }
  );

  return (
    <div className="py-10 relative z-10 container w-auto md:mx-20 my-44 max-lg:my-10 grid lg:grid-cols-[2fr_4fr] gap-5 max-sm:my-0">
      <div ref={ref} className="relative max-lg:hidden">
        <Image
          src="/images/profile.jpg"
          alt=""
          width={100}
          height={100}
          layout="responsive"
          className="grayscale transition-[filter] duration-[0.3s] ease-[ease] hover:grayscale-[0%]"
        />
      </div>
      <div className="font-Quicksand font-medium">
        {experienceList.map((experience) => (
          <div
            key={experience.year}
            className={cn(
              "p-6 mb-6 grid grid-cols-[1fr_4fr] hover:cursor-pointer hover:transition-all hover:duration-[0.15s] hover:ease-[ease-in-out] rounded-[.375rem] group max-sm:gap-4 max-sm:grid-cols-1",
              isDark
                ? "hover:bg-[hsla(172,95%,18%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
                : "hover:bg-[hsla(160,52%,71%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
            )}
            onClick={() => window.open(experience.url)}
          >
            <div
              className={cn(
                "mt-1",
                isDark
                  ? "text-[hsla(172,95%,18%,.8)]"
                  : "text-[hsla(160,52%,71%,.6)]"
              )}
            >
              {experience.year}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2
                  className={cn(
                    "text-lg mb-2 font-bold max-sm:text-sm",
                    isDark
                      ? "text-[hsla(172,95%,18%,1)] group-hover:text-[hsla(0,43%,44.7%,1)]"
                      : "text-[hsla(160,52%,71%,1)] group-hover:text-[hsla(36,97%,70%,1)]"
                  )}
                >
                  {experience.position}
                </h2>
                <BsArrowUpRight
                  className={cn(
                    "group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform duration-150 ease-in-out",
                    isDark
                      ? "text-[hsla(172,95%,18%,1)] group-hover:text-[hsla(0,43%,44.7%,1)]"
                      : "text-[hsla(160,52%,71%,1)] group-hover:text-[hsla(36,97%,70%,1)]"
                  )}
                />
              </div>
              <ul
                className={cn(
                  "list-disc space-y-2  mb-4",
                  isDark
                    ? "text-[hsla(172,95%,18%,.6)]"
                    : "text-[hsla(160,52%,71%,.6)]"
                )}
              >
                {experience?.responsibilities?.map((responsibility) => (
                  <li className="text-sm" key={responsibility}>
                    {responsibility}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center">
                {experience?.tools?.map((tool) => (
                  <span
                    key={tool}
                    className={cn(
                      "px-4 py-2 rounded-full m-1.5 text-sm",
                      isDark
                        ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                        : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                    )}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
