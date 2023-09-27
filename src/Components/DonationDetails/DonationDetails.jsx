
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const oneDonation = donations.find((oneDonation) => oneDonation.id === idInt);
  console.log(oneDonation);

  const buttonStyle = {
    backgroundColor: oneDonation.text_color,
  };

  return (
    <div className="mt-20 relative">
      {/* Image */}
      <div className="w-full">
        <img className="w-full" src={oneDonation.image} alt="" />
      </div>

      {/* Overlay Container */}
      <div className="absolute -bottom-[876px] left-20 w-full h-full opacity-100 transition-opacity">
        <button className="py-2 px-4 rounded text-white" style={buttonStyle}>
          Donate ${oneDonation.price}
        </button>
      </div>

      {/* Donation Details */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold pt-14 pb-6">{oneDonation.title}</h2>
        <p className="pb-32 font-normal">{oneDonation.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;














