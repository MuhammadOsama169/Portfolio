import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faGitlab,faLinkedin, faInstagram, faFacebook, faBehance } from '@fortawesome/fontawesome-free-brands'



const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
                <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5]"
          href="https://gitlab.com/m.osama2"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGitlab} className="w-[50px] h-[50px]  text-black dark:text-white " />
        </a>
        <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5]"
          href="https://github.com/MuhammadOsama169"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="w-[50px] h-[50px]  text-black dark:text-white " />
        </a>
        <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] "
          href="https://www.linkedin.com/in/muhammad-osama-688123162/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-[50px] h-[50px] text-black dark:text-white " />
        </a>
        <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] "
          href="https://www.instagram.com/silverous_spy/ "
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-[50px] h-[50px]  text-black dark:text-white" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;