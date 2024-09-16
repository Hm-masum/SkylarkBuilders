import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estatesDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  const estate = estatesDetails.find(estate => estate.id === idInt);

  const {
    estate_title,
    segment_name,
    price,
    description,
    status,
    area,
    image_url,
    facilities,
    location,
  } = estate;
  
  return (
    <div className="lg:flex justify-center items-center gap-8 my-4 lg:my-10">
      <div className="animate__animated animate__fadeInLeft flex justify-center items-center bg-gray-100 rounded-2xl lg:w-[50%]">
        <img className="rounded-2xl lg:h-[500px]" src={image_url} alt="" />
      </div>
      <div className="space-y-4 lg:w-[50%] animate__animated animate__fadeInRight">
        <h1 className="text-2xl lg:text-4xl font-semibold">{estate_title}</h1>
        <p className="text-xl">{segment_name}</p>
        <p className="border-t-2 border-gray-300"></p>
        <p className="text-xl">Status : {status}</p>
        <p className="border-t-2 border-gray-300"></p>
        <p>
          <span className="font-semibold">Review : </span>
          {description}
        </p>
        <div className="flex gap-2 items-center">
          {" "}
          <span className="font-semibold">Facilities :</span>
          {facilities.map((tag) => (
            <p className="p-2 rounded-2xl bg-green-50 text-green-400" key={tag}>
              #{tag}
            </p>
          ))}
        </div>
        <p className="border-t-2 border-gray-300"></p>
        <div className="space-y-2">
          <p className="flex items-center">
            <span className="w-[30%]">price: </span>
            <span className="font-semibold">{price}</span>
          </p>
          <p className="flex items-center">
            <span className="w-[30%]">area: </span>
            <span className="font-semibold">{area}</span>
          </p>
          <p className="flex items-center">
            <span className="w-[30%]">location: </span>
            <span className="font-semibold">{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
