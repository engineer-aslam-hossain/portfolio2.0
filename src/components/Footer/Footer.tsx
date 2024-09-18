import cn from "@/lib/cn";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaUpRightFromSquare,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = ({ isDark }: any) => {
  return (
    <div className="container w-11/12 mx-auto flex flex-col items-center relative">
      <a
        href="mailto:aslamhossain.dev@gmail.com"
        className={cn(
          "uppercase  md:text-4xl xl:text-8xl max-md:text-3xl text-wrap flex break-all whitespace-pre-wrap text-center mb-20 font-Quicksand text-[hsla(160,52%,71%,1)] xl:w-[984px]  mx-auto underline underline-offset-auto",
          isDark
            ? "text-[hsla(172,95%,18%,1)] hover:text-[hsla(0,43%,44.7%,1)]"
            : "text-[hsla(160,52%,71%,1)] hover:text-[hsla(36,97%,70%,1)]"
        )}
      >
        aslamhossain.dev@gmail.com
      </a>
      <div className="grid grid-cols-4 gap-2 place-items-center mb-10 items-center justify-center">
        <FaLinkedinIn
          size={30}
          onClick={() =>
            window.open("https://www.linkedin.com/in/aslamhossain-dev/")
          }
          className={cn(
            "hover:cursor-pointer",
            isDark
              ? "hover:text-[hsla(172,95%,18%,1)] text-[hsla(0,43%,44.7%,1)]"
              : "hover:text-[hsla(160,52%,71%,1)] text-[hsla(36,97%,70%,1)]"
          )}
        />
        <FaGithub
          size={30}
          onClick={() =>
            window.open("https://github.com/engineer-aslam-hossain")
          }
          className={cn(
            "hover:cursor-pointer",
            isDark
              ? "hover:text-[hsla(172,95%,18%,1)] text-[hsla(0,43%,44.7%,1)]"
              : "hover:text-[hsla(160,52%,71%,1)] text-[hsla(36,97%,70%,1)]"
          )}
        />
        <FaXTwitter
          size={30}
          onClick={() => window.open("https://x.com/dev_aslam")}
          className={cn(
            "hover:cursor-pointer",
            isDark
              ? "hover:text-[hsla(172,95%,18%,1)] text-[hsla(0,43%,44.7%,1)]"
              : "hover:text-[hsla(160,52%,71%,1)] text-[hsla(36,97%,70%,1)]"
          )}
        />
        <FaFacebookF
          size={27}
          onClick={() =>
            window.open("https://www.facebook.com/aslamhossain.dev/")
          }
          className={cn(
            "hover:cursor-pointer",
            isDark
              ? "hover:text-[hsla(172,95%,18%,1)] text-[hsla(0,43%,44.7%,1)]"
              : "hover:text-[hsla(160,52%,71%,1)] text-[hsla(36,97%,70%,1)]"
          )}
        />
      </div>
      <div
        className={cn(
          "bottom-0 right-0 rounded-full max-sm:bottom-[-2rem] grid grid-cols-2 place-items-center gap-2 mb-10  transition-[500ms]",
          "bg-[#498063] px-5 py-3 hover:cursor-pointer hover:bg-[#56c288]"
        )}
        onClick={() => window.open("https://aslamhossain.netlify.app/")}
      >
        <span>V1</span>
        <div className="place-items-center flex">
          <FaUpRightFromSquare />
        </div>
      </div>
      <p
        className={cn(
          "text-center",
          isDark
            ? "text-[hsla(172,95%,18%,1)]"
            : "text-[hsla(160,52%,71%,1)] font-Quicksand"
        )}
      >
        © {new Date().getFullYear()} All Rights Reserve to Aslam Hossain
      </p>
    </div>
  );
};

export default Footer;
