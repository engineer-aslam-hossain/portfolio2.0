import Image from "next/image";
import { FaCircleHalfStroke } from "react-icons/fa6";

export const Header = ({ isDark, setIsDark }: any) => {
  return (
    <div className="container flex justify-between align-middle md:mx-20 sm:mx-0 w-auto">
      <Image src="/images/logo.png" height={30} width={30} alt="logo" />
      <button className="z-10">
        <FaCircleHalfStroke
          color={isDark ? "black" : "white"}
          className="hover:cursor-pointer"
          onClick={() => setIsDark(!isDark)}
          size={20}
        />
      </button>
    </div>
  );
};
