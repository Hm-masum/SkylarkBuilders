import { useLoaderData } from "react-router-dom";
import Accordion from "../components/Accordion";
import Slider from "../components/Slider";
import Estate from "../components/Estate";
import Contact from "../components/Contact";
import Success from "../components/Success";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div>
        <h2 className="font-semibold text-5xl text-center py-6">Our Estates</h2>
        <p></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {estates.map((estate) => (
            <Estate key={estate.id} estate={estate}></Estate>
          ))}
        </div>
      </div>
      <Success></Success>
      <Contact></Contact>
      <Accordion></Accordion>
    </div>
  );
};

export default Home;
