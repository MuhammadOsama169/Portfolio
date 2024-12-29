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
  },
  {
    imgSrc: MattPhoto,
    bio: "max",
    companyInfo: "max_comp",
  },

  {
    imgSrc: juxhinaPhoto,
    bio: "juxhina",
    companyInfo: "juxhina_comp",
  },
  {
    imgSrc: marinPhoto,
    bio: "marina",
    companyInfo: "marina_comp",
  },
];
