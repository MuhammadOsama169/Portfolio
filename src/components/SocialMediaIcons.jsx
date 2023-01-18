import Linkdin from '../assets/linkedin.png'
import Gmail from '../assets/gmail.png'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github-white.png'

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5]"
          href="https://www.linkedin.com/in/muhammad-osama-688123162/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={Linkdin} />
        </a>
        <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5]"
          href="mailto:m.osama169@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={Gmail} />
        </a>
        <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] "
          href="https://www.instagram.com/silverous_spy/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={Instagram} />
        </a>
        <a
          className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5]"
          href="https://github.com/MuhammadOsama169"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-9 h-8" alt="github-link" src={Github} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;