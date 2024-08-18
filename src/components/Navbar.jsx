import SSPlogo from "../assets/SSPlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={SSPlogo} alt="logo" height={100} width={100} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sameer-s-patil-10a268287/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Sameer-s-patil18" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/SSP_lol/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
