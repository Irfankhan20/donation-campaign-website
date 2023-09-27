
import { Link } from "react-router-dom";

const AllDonation = ({donation}) => {
    const { id, image, category, category_background_color, card_background_color, text_color, title } = donation
    // console.log(card.id)
    let bgColor,titleColor,btnBg,btnColor;
    switch(category){
        case"Health":
        bgColor="bg-sky-100";
        titleColor="text-sky-600";
        btnBg="bg-sky-200";
        btnColor="text-sky-500";
        break;
        case"Education":
        bgColor="bg-red-100";
        titleColor="text-red-600";
        btnBg="bg-red-200";
        btnColor="text-red-500";
        break;
        case"Clothing":
        bgColor="bg-green-100";
        titleColor="text-green-600";
        btnBg="bg-green-200";
        btnColor="text-green-500";
        break;
        case"Food":
        bgColor="bg-orange-100";
        titleColor="text-orange-600";
        btnBg="bg-orange-200";
        btnColor="text-orange-500";
        break;
        default:
            bgColor="bg-white"
            titleColor="text-black"

    }
   
    return (
        
           
       
        <Link to={`/details/${id}`}>

<div className={`rounded-lg shadow-xl ${bgColor}`}>
        <figure><img className="w-96 h-52" src={image} alt="Shoes" /></figure>
        <div className="p-4">
            <button className={`text-sm font-semibold ${btnBg} ${btnColor} px-2 rounded-md py-1` }>{category}</button>
            <p className={`text-xl font-semibold pt-2 ${titleColor}`}>{title}</p>
        </div>
    </div>
         </Link>
        
       
    );
};

export default AllDonation;

















// import { Link } from "react-router-dom";


// const AllDonation = ({ donation }) => {
//     const { id, image, category, category_background_color, card_background_color, text_color, title } = donation;

 

//     return (
//         <Link to={`/details/${id}`}>
//         <div className=" bg-base-100 shadow-xl rounded-lg">
//             <figure><img className="w-full h-[200px]" src={image} alt="Donation" /></figure>
//             <div className="pl-4">
//                 <button>{category}</button>
//                 <p className={`text-[${text_color}] font-medium pb-4 pt-3`}>{title}</p>

//             </div>
//         </div>
//         </Link>
//     );
// };

// export default AllDonation;