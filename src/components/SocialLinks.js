import { socialIcons } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialIcons.map((link, index) => {
        return <SocialLink key={index} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default SocialLinks;
