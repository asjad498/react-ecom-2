import PropTypes from "prop-types";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card Section */}
        {data.map((data, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={index}
            className="group"
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Hover Button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  text={"Add To Cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">{data.price} Rs.</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define PropTypes
ProductCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired, // Image URL must be a string and required
      title: PropTypes.string.isRequired, // Title must be a string and required
      price: PropTypes.number.isRequired, // Price must be a number and required
    })
  ).isRequired, // `data` must be an array and is required
};

export default ProductCard;
