import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/vr.png";
import Image3 from "../../assets/hero/macbook.png";
import Button from "../Shared/Button";
import PropTypes from "prop-types";


const HeroSlide = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo 1",
    title: "Wireless 1",
    title2: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio deserunt assumenda temporibus neque voluptatum quidem ut incidunt unde  itaque repellendus obcaecati.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo 2",
    title: "Wireless 2",
    title2: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio deserunt assumenda temporibus neque voluptatum quidem ut incidunt unde  itaque repellendus obcaecati.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo 3",
    title: "Wireless 3",
    title2: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio deserunt assumenda temporibus neque voluptatum quidem ut incidunt unde  itaque repellendus obcaecati.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroSlide.map((data, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text Content Section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop Now"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="order-1 sm:order-2">
                    <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="700" className="relative z-10">
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired, // Ensure handleOrderPopup is a required function
};

export default Hero;
