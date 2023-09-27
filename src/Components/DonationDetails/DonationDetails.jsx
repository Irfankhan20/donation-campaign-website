

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../utility/localstorage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const oneDonation = donations.find((oneDonation) => oneDonation.id === idInt);

  const buttonStyle = {
    backgroundColor: oneDonation.text_color,
  };

  const handleButtonClick = () => {
    saveDonation(idInt);
    // Show a toast notification when the button is clicked
    toast.success("Thank you for your donation!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000, // Automatically close the toast after 2 seconds
    });
  };

  return (
    <div className="mt-20 relative">
      {/* Image */}
      <div className="w-full">
        <img className="w-full h-[750px]" src={oneDonation.image} alt="" />
      </div>

      {/* Overlay Container */}
      <div className="absolute -bottom-[630px] left-20 w-full h-full opacity-100 transition-opacity">
        <button
          className="py-2 px-4 rounded text-white"
          style={buttonStyle}
          onClick={handleButtonClick}
        >
          Donate ${oneDonation.price}
        </button>
      </div>

      {/* Donation Details */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold pt-14 pb-6">{oneDonation.title}</h2>
        <p className="pb-32 font-normal">{oneDonation.description}</p>
      </div>

      {/* Add the ToastContainer component */}
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;






