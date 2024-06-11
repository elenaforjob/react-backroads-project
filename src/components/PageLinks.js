import PageLink from "./PageLink";
import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link, index) => {
        return <PageLink key={index} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
