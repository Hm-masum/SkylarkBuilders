import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Slider = () => {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className="my-4 lg:my-8">
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full h-[50vh] lg:h-[80vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://i.ibb.co/fQqxk7n/pexels-vecislavas-popa-1571460.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center rounded-lg"
        >
          <div data-aos="fade-right" className="space-y-3">
            <h2 className="text-3xl lg:text-6xl text-white font-semibold  md:w-[75%] text-center mx-auto">
              Discover Most Suitable Property!
            </h2>
            <br />
            <p className="text-white md:w-[55%] text-center mx-auto">
              Find a variety of properties that suit you very easilty Forget all
              difficulties in finding a residence for you Search
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full h-[50vh] lg:h-[80vh] bg-no-repeat bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://i.ibb.co/WyKdkYQ/pexels-vecislavas-popa-1571472.jpg')] bg-center bg-cover flex items-center justify-center rounded-lg"
        >
           <div data-aos="fade-right" className="space-y-3">
            <h2 className="text-3xl lg:text-6xl text-white font-semibold  md:w-[75%] text-center mx-auto">
              Discover Most Suitable Property!
            </h2>
            <br />
            <p className="text-white md:w-[55%] text-center mx-auto">
              Find a variety of properties that suit you very easilty Forget all
              difficulties in finding a residence for you Search
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full h-[50vh] lg:h-[80vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://i.ibb.co/tKqLw6z/pexels-vecislavas-popa-1668860.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center rounded-lg"
        >
           <div data-aos="fade-right" className="space-y-3">
            <h2 className="text-3xl lg:text-6xl text-white font-semibold  md:w-[75%] text-center mx-auto">
              Discover Most Suitable Property!
            </h2>
            <br />
            <p className="text-white md:w-[55%] text-center mx-auto">
              Find a variety of properties that suit you very easilty Forget all
              difficulties in finding a residence for you Search
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
