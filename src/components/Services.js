import Service from "./Service";
import Title from "./Title";
import { services } from "data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((link, index) => {
          const { icon, title, text } = link;
          return <Service key={index} icon={icon} title={title} text={text} />;
        })}
      </div>
    </section>
  );
};

export default Services;
