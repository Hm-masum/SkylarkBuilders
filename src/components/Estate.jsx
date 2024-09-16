import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

const Estate = ({ estate }) => {
  const {
    estate_title,
    segment_name,
    price,
    status,
    image_url,
    facilities,
    id,
  } = estate;

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div data-aos="zoom-in" className="p-4 rounded-xl border-2 border-gray-100 space-y-3">
      <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
        <img src={image_url} className="h-[225px] rounded-lg" alt="" />
      </div>
      <div className="space-y-3">
        <div className="flex gap-2">
          {facilities.map((tag) => (
            <p className="p-2 rounded-2xl bg-green-50 text-green-400" key={tag}>
              {tag}
            </p>
          ))}
        </div>
        <h2 className="text-xl lg:text-2xl font-semibold">{estate_title}</h2>
        <p className="font-semibold">{segment_name}</p>
        <p className="border-t border border-gray-300"></p>
        <div className="flex justify-between">
          <p>{status}</p>
          <p className="flex gap-2">
            {price}
          </p>
        </div>
        <div className="flex items-center justify-center">
            <Link to={`/estate/${id}`} className="btn w-full btn-accent">View Property</Link>
        </div>
      </div>
    </div>
  );
};

export default Estate;
