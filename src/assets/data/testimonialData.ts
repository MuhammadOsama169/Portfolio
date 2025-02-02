import { testimonialTypes } from "../types/TestimonialType";
import marinPhoto from "../../assets/marina-photo.png";
import juxhinaPhoto from "../../assets/juxhina-photo.png";
import daniaPhoto from "../../assets/dania.jpg";
import MattPhoto from "../../assets/Matt.jpeg";

export const testimonials: testimonialTypes[] = [
  {
    imgSrc: daniaPhoto,
    bio: "dania",
    companyInfo: "dania_comp",
    href: "https://www.linkedin.com/in/dania-dakhel-75b2b7152/",
  },
  {
    imgSrc: MattPhoto,
    bio: "max",
    companyInfo: "max_comp",
    href: "https://www.linkedin.com/in/mattreno/",
  },

  {
    imgSrc: juxhinaPhoto,
    bio: "juxhina",
    companyInfo: "juxhina_comp",
    href: "https://www.linkedin.com/in/juxhinamalaj/",
  },
  {
    imgSrc: marinPhoto,
    bio: "marina",
    companyInfo: "marina_comp",
    href: "https://www.linkedin.com/in/marinasolvanni/",
  },
];
