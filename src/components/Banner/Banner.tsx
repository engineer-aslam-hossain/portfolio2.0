import cn from "@/lib/cn";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import classes from "./Banner.module.css";

const Banner = ({ isDark }: any) => {
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
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    profession: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 300,
      y: mouseYPosition - 240,
    },
    name: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 120,
      width: 120,
      fontSize: "32px",
      x: mouseXPosition - 320,
      y: mouseYPosition - 260,
    },
  };

  function professionEnter() {
    setCursorText("Github");
    setCursorVariant("profession");
  }

  function professionLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function nameEnter() {
    setCursorText("👋");
    setCursorVariant("name");
  }

  function nameLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <>
      <div
        className="py-10 relative z-10 container w-auto xl:mx-40 md:mx-20 my-20 max-sm:my-10"
        ref={ref}
      >
        <motion.div
          variants={variants}
          className="circle absolute z-[100] flex content-center justify-center h-0 w-0 bg-[#1e91d6] pointer-events-none text-white text-center text-base rounded-[200px] left-0 top-0 overflow-hidden"
          animate={cursorVariant}
          // transition={spring}
        >
          <div className="cursorText flex-[auto] text-[inherit] pointer-events-none m-auto flex items-center justify-center">
            {cursorVariant == "profession" ? (
              <AiFillGithub size={50} />
            ) : (
              <Image src="/images/photo.jpg" alt="Aslam Hossain" fill />
            )}
          </div>
        </motion.div>

        <Image
          src="/images/congratulations.gif"
          height={100}
          width={100}
          alt=""
          className={cn(
            "confetti absolute z-0 rotate-[280deg] translate-x-[510px] translate-y-[-25px]",
            cursorText !== "" ? "flex" : "hidden"
          )}
        />

        <h1>
          <span
            className={cn(
              "font-bold xl:text-6xl md:text-5xl max-sm:text-3xl sm:text-4xl font-Lobster",
              isDark
                ? "text-[hsla(172,95%,18%,1)]"
                : "text-[hsla(160,52%,71%,1)]"
            )}
          >
            I’M{" "}
          </span>
          <span
            onMouseEnter={nameEnter}
            onMouseLeave={nameLeave}
            onClick={() =>
              window.open("https://www.linkedin.com/in/aslamhossain-dev/")
            }
            className={cn(
              "font-bold xl:text-6xl md:text-5xl max-sm:text-3xl sm:text-4xl leading-[1.2] transition-[150ms] duration-[ease] hover:cursor-pointer transform: translate3d(0px, 0px, -30px) rotateX(90deg) hover:bg-[linear-gradient(270deg,_#e3a5ee,_#ede6bc)]%20hover:bg-clip-text font-Lobster",
              isDark
                ? "text-[hsla(0,43%,44.7%,1)] hover:text-[hsla(172,95%,18%,1)]"
                : "text-[hsla(36,97%,70%,1)] hover:text-[hsla(160,52%,71%,1)]"
            )}
          >
            ASLAM HOSSAIN,
          </span>
        </h1>

        <h3
          className={cn(
            "xl:text-4xl md:text-3xl sm:text-2xl mt-6 font-Quicksand z-10 text-justify font-medium",
            isDark ? "text-[hsla(172,95%,18%,1)]" : "text-[hsla(160,52%,71%,1)]"
          )}
        >
          A seasoned{" "}
          <span
            className={cn(
              "hover:text-[hsla(160,52%,71%,1)] hover:cursor-pointer font-bold",
              isDark
                ? "text-[hsla(0,43%,44.7%,1)] hover:text-[hsla(172,95%,18%,1)]"
                : "text-[hsla(36,97%,70%,1)] hover:text-[hsla(160,52%,71%,1)]"
            )}
            onMouseEnter={professionEnter}
            onMouseLeave={professionLeave}
            onClick={() =>
              window.open("https://github.com/engineer-aslam-hossain")
            }
          >
            software engineer{" "}
          </span>
          based in{" "}
          <span
            className={cn(
              "font-bold",
              isDark
                ? "text-[hsla(0,43%,44.7%,1)]"
                : "text-[hsla(36,97%,70%,1)]"
            )}
          >
            Finland
          </span>{" "}
          with a passion for global exploration. Proficient in{" "}
          <span
            className={cn(
              "font-bold",
              isDark
                ? "text-[hsla(0,43%,44.7%,1)]"
                : "text-[hsla(36,97%,70%,1)]"
            )}
          >
            JavaScript and Flutter,
          </span>{" "}
          I excel at crafting high-performance web and mobile applications. My
          love for the dynamic tech landscape drives me to deliver innovative
          solutions.
        </h3>
      </div>
      <div className={classes.blob_outer_container}>
        <div className={classes.blob_inner_container}>
          <div className={classes.blob}></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
