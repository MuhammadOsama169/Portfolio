import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";

const SocialMediaIcons = () => {
  const styles = `hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] `;
  const iconSize = `w-[40px] h-[40px] text-[#F46C38] `;
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        className={styles}
        href="https://gitlab.com/m.osama2"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGitlab} className={iconSize} />
      </a>
      <a
        className={styles}
        href="https://github.com/MuhammadOsama169"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className={iconSize} />
      </a>
      <a
        className={styles}
        href="https://www.linkedin.com/in/muhammad-osama-688123162/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className={iconSize} />
      </a>
      <a
        className={styles}
        href="https://www.instagram.com/silverous_spy/ "
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className={iconSize} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
