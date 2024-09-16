import GoogleMapReact from "google-map-react";
import { googleAPIKey } from "../googleAPIKey";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact from "../components/Contact";

const AnyReactComponent = ({ text }) => (
  <div className="text-red-700">
    <FaMapMarkerAlt className="text-3xl" />
  </div>
);

const About = () => {
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152,
    },
    zoom: 11,
  };

  return (
    <div>
      <div className="rounded-lg" style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Market"
          />
        </GoogleMapReact>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default About;
