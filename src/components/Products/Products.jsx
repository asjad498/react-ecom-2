import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-1.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img8 from "../../assets/product/p-8.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Boat HeadPhone",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat HeadPhone",
    price: "120",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Boat HeadPhone",
    price: "1207",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Boat HeadPhone",
    price: "4820",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Boat HeadPhone",
    price: "1220",
    aosDelay: "1400",
  },
]

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title="Our Products" subtitle="Explore our Products"/>
        {/* Body Section */}
        <ProductCard data={ProductsData} />
      </div>
    </div>
  )
}

export default Products
