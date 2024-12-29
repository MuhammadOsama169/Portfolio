import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SocialMediaIcons = () => {
  const styles = `hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] `;
  const iconSize = `w-[40px] h-[40px] text-[#F46C38] `;
  const { t } = useTranslation();
  const staticData = t("lists");

  return (
    <main>
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
      <motion.div
        className="flex gap-4 justify-center md:justify-start mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <a
          href="mailto:m.osama169@gmail.com"
          className="hover:opacity-[0.98] transition duration-500 hover:scale-[1.1] flex justify-center w-full"
        >
          <button
            className="bg-[#F46C38]  dark:text-black text-white rounded-md py-3 px-7 font-semibold
                 shadow-[10px_20px_20px_rgba(255,0,0,30%)] "
          >
            {staticData.actions.get_in_touch}
          </button>
        </a>
      </motion.div>
    </main>
  );
};

export default SocialMediaIcons;
