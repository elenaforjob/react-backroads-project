import Title from "./Title";
import { tours } from "data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour, index) => {
          const { image, date, title, info, location, duration, price } = tour;
          return (
            <Tour
              key={index}
              image={image}
              date={date}
              title={title}
              info={info}
              location={location}
              duration={duration}
              price={price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
