import cn from "@/lib/cn";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

//
const Projects = ({ isDark }: any) => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition: any = 0;
  let mouseYPosition: any = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 0,
      width: 0,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 400,
      width: 200,
      fontSize: "18px",
      x: mouseXPosition - 100,
      y: mouseYPosition - 300,
      rotate: "5deg",
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 400,
      width: 300,
      fontSize: "32px",
      x: mouseXPosition - 100,
      y: mouseYPosition - 300,
      rotate: "5deg",
    },
  };

  function secondProjectEnter(event: any) {
    setCursorText("Github");
    setCursorVariant("project");
  }

  function secondProjectLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function firstProjectEnter(event: any) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function firstProjectLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <div
      className="py-10 relative z-10 container w-auto mx-20 my-40 max-lg:mt-10 max-sm:mb-0 max-sm:mx-10"
      ref={ref}
    >
      <h3
        className={cn(
          "text-3xl mb-6",
          isDark ? "text-[hsla(172,95%,18%,1)]" : "text-[hsla(160,52%,71%,1)]"
        )}
      >
        PROJECTS
      </h3>
      <motion.div
        variants={variants}
        className="circle absolute z-[100] flex content-center justify-center h-0 w-0 bg-[#1e91d6] pointer-events-none text-white text-center text-base left-0 top-0 overflow-hidden rounded-[8px]"
        animate={cursorVariant}
        // transition={spring}
      >
        <div className="cursorText flex-[auto] text-[inherit] pointer-events-none m-auto">
          <Image
            src={
              cursorVariant == "contact"
                ? "/images/sunrise.png"
                : "/images/600x0w.png"
            }
            alt=""
            fill
          />
        </div>
      </motion.div>
      <div className="flex flex-col items-start">
        <h1
          className={cn(
            "font-medium xl:text-6xl md:text-5xl sm:text-4xl max-sm:text-3xl leading-[1.2] transition-[150ms] duration-[ease] hover:cursor-pointer transform: translate3d(0px, 0px, -30px) rotateX(90deg) hover:bg-[linear-gradient(270deg,_#e3a5ee,_#ede6bc)]%20hover:bg-clip-text font-Acorn  border-y-yellow-300 mb-6 font-bold",
            isDark
              ? "text-[hsla(0,43%,44.7%,1)] hover:text-[hsla(172,95%,18%,1)]"
              : "text-[hsla(36,97%,70%,1)] hover:text-[hsla(160,52%,71%,1)]"
          )}
          onMouseEnter={firstProjectEnter}
          onMouseLeave={firstProjectLeave}
          onClick={() => window.open("https://www.sunrise.ch/en/moments")}
        >
          SUNRISE MOMENTS
        </h1>

        <h1
          className={cn(
            "font-medium xl:text-6xl md:text-5xl sm:text-4xl max-sm:text-3xl leading-[1.2] transition-[150ms] duration-[ease] hover:cursor-pointer transform: translate3d(0px, 0px, -30px) rotateX(90deg) hover:bg-[linear-gradient(270deg,_#e3a5ee,_#ede6bc)]%20hover:bg-clip-text font-Acorn  border-y-yellow-300 mb-6 font-bold",
            isDark
              ? "text-[hsla(0,43%,44.7%,1)] hover:text-[hsla(172,95%,18%,1)]"
              : "text-[hsla(36,97%,70%,1)] hover:text-[hsla(160,52%,71%,1)]"
          )}
          onMouseEnter={secondProjectEnter}
          onMouseLeave={secondProjectLeave}
          onClick={() =>
            window.open(
              "https://apps.apple.com/us/app/vicafe-loyalty/id6474923930"
            )
          }
        >
          ViCAFE LOYALTY
        </h1>
      </div>
    </div>
  );
};

export default Projects;
