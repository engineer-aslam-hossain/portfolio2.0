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
          className="grayscale transition-[filter] duration-[0.3s] ease-[ease] hover:grayscale-[0%] "
        />
      </div>
      <div className="">
        <div
          className={cn(
            "p-6 mb-6 grid grid-cols-[1fr_4fr] hover:cursor-pointer hover:transition-all hover:duration-[0.15s] hover:ease-[ease-in-out] rounded-[.375rem] group max-sm:gap-4 max-sm:grid-cols-1",
            isDark
              ? "hover:bg-[hsla(172,95%,18%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
              : "hover:bg-[hsla(160,52%,71%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
          )}
          onClick={() => window.open("https://www.abo.fi/")}
        >
          <div
            className={cn(
              "mt-1",
              isDark
                ? "text-[hsla(172,95%,18%,.8)]"
                : "text-[hsla(160,52%,71%,.6)]"
            )}
          >
            2024 - Current
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
                Studying Master's in IT(CE), Åbo Akademi University
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
              <li className="text-sm">
                Currently honing my skills in project management and mastering
                cloud tech.
              </li>
              <li className="text-sm">
                Learning the art of securing software systems, protecting
                against vulnerabilities.
              </li>
              <li className="text-sm">
                Building a strong foundation in software quality assurance and
                testing.
              </li>
              <li className="text-sm">
                Tech addict, always on the hunt, constantly leveling up my
                skills.
              </li>
            </ul>
            <div className="flex flex-wrap items-center">
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Cloud Computing
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Project Management
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full ml-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Parallel Programming
              </span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "p-6 mb-6 grid grid-cols-[1fr_4fr] hover:cursor-pointer hover:transition-all hover:duration-[0.15s] hover:ease-[ease-in-out] rounded-[.375rem] group max-sm:grid-cols-1",
            isDark
              ? "hover:bg-[hsla(172,95%,18%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
              : "hover:bg-[hsla(160,52%,71%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
          )}
          onClick={() => window.open("https://selisegroup.com/")}
        >
          <div
            className={cn(
              "mt-1",
              isDark
                ? "text-[hsla(172,95%,18%,.6)]"
                : "text-[hsla(160,52%,71%,.6)]"
            )}
          >
            2021 - 2024
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h2
                className={cn(
                  "text-lg mb-2 font-bold",
                  isDark
                    ? "text-[hsla(172,95%,18%,1)] group-hover:text-[hsla(0,43%,44.7%,1)]"
                    : "text-[hsla(160,52%,71%,1)] group-hover:text-[hsla(36,97%,70%,1)]"
                )}
              >
                Software Engineer, SELISE
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
              <li className="text-sm">
                Led diverse teams, built cutting-edge apps with Next.js and
                Flutter.
              </li>
              <li className="text-sm">
                Fostered teamwork, navigated complex projects to success.
              </li>
              <li className="text-sm">
                Conquered challenges with creative solutions, adapted to change.
              </li>
              <li className="text-sm">
                Thrived in a demanding role, took initiative, delivered results.
              </li>
            </ul>
            <div className="flex flex-wrap">
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Next.js
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Express.js
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Flutter
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Storyblok
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                MongoDB
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Nest.js
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Redis
              </span>{" "}
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                SSO
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Material UI
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "p-6 mb-6 grid grid-cols-[1fr_4fr] hover:cursor-pointer hover:transition-all hover:duration-[0.15s] hover:ease-[ease-in-out] rounded-[.375rem] group max-sm:grid-cols-1",
            isDark
              ? "hover:bg-[hsla(172,95%,18%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
              : "hover:bg-[hsla(160,52%,71%,.1)] shadow-[inset 0 1px 0 0 rgba(148,163,184,.1)]"
          )}
          onClick={() => window.open("https://crantechllc.com/")}
        >
          <div
            className={cn(
              "mt-1",
              isDark
                ? "text-[hsla(172,95%,18%,.6)]"
                : "text-[hsla(160,52%,71%,.6)]"
            )}
          >
            2020 - 2021
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h2
                className={cn(
                  "text-lg mb-2 font-bold",
                  isDark
                    ? "text-[hsla(172,95%,18%,1)] group-hover:text-[hsla(0,43%,44.7%,1)]"
                    : "text-[hsla(160,52%,71%,1)] group-hover:text-[hsla(36,97%,70%,1)]"
                )}
              >
                Software Engineer, CranTech
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
              <li className="text-sm">
                Crafted apps with React and Next.js, seamlessly integrated
                backends.
              </li>
              <li className="text-sm">
                Teamed up to deliver pixel-perfect UIs.
              </li>
              <li className="text-sm">
                Engineered a cross-platform audio meeting app.
              </li>
              <li className="text-sm">
                Wielded a diverse toolkit, conquered coding challenges with
                finesse.
              </li>
            </ul>
            <div className="flex flex-wrap">
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Javascript
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                React
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                React Native
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Redux
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                SCSS
              </span>
              <span
                className={cn(
                  "px-4 py-2 rounded-full m-2 text-sm",
                  isDark
                    ? "bg-[hsla(172,95%,18%,.1)] text-[hsla(172,95%,18%,.6)]"
                    : "bg-[rgba(45,212,191,.1)] text-[hsla(160,52%,71%,1)]"
                )}
              >
                Node.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
