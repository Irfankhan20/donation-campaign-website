

const DonationCart = ({ donationCategory }) => {
    
    const {  id, image, category, title, price  } = donationCategory;

    let bgColor,titleColor,btnBg,btnBg2,btnColor;
    switch(category){
        case"Health":
        bgColor="bg-sky-100";
        titleColor="text-sky-600";
        btnBg="bg-sky-200";
        btnBg2="bg-sky-700";
        btnColor="text-sky-500";
        break;
        case"Education":
        bgColor="bg-red-100";
        titleColor="text-red-600";
        btnBg="bg-red-200";
        btnBg2="bg-red-700";
        btnColor="text-red-500";
        break;
        case"Clothing":
        bgColor="bg-green-100";
        titleColor="text-green-600";
        btnBg="bg-green-200";
        btnBg2="bg-green-700";
        btnColor="text-green-500";
        break;
        case"Food":
        bgColor="bg-orange-100";
        titleColor="text-orange-600";
        btnBg="bg-orange-200";
        btnBg2="bg-orange-700";
        btnColor="text-orange-500";
        break;
        default:
            bgColor="bg-white"
            titleColor="text-black"

    }

    

    return (
        <div className={`card card-side shadow-xl ${bgColor}`}>
            <figure><img className="w-[250px] h-full" src={image} alt="Donation" /></figure>
            <div className="card-body">
            <div className="p-4">
            <button className={`text-sm font-semibold ${btnBg} ${btnColor} px-3 rounded-md py-1` }>{category}</button>
            <p className={`text-2xl font-semibold pt-2 pb-2 text-black`}>{title}</p>
            <p className={`${btnColor} font-semibold`}>${price}.00</p>
        </div>
                <div className="card-actions">
                    <button className={`${btnBg2} text-xl font-semibold rounded-md py-2 px-4 text-white`}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCart;