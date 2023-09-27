import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utility/localstorage";
import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";


const Donation = () => {
    const donations = useLoaderData();
    // console.log(donations);

    const [donationsCategory, setDonationsCategory] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {

            const donation = donations.filter(donation => storedDonationIds.includes(donation.id));

            setDonationsCategory(donation);
            // setDisplayDonations(donation);
            }
    }, [donations])

    return (
        <div>
            
            <div className=" grid md:grid-cols-2 gap-5 mt-20 mb-10">
            {
                donationsCategory.slice(0, dataLength).map(donationCategory => <DonationCart
                    key={donationCategory.id}
                    donationCategory={donationCategory}
                ></DonationCart>)
            }
            </div>
            <div className={dataLength >= donationsCategory.length ? 'hidden' : 'text-center'}>
            <button
                   onClick={() => setDataLength(donationsCategory.length)}  
                    className="mt-14 mb-16 py-4 px-7 rounded-lg text-center btn text-white bg-[#009444]">See All</button>
            </div>
        </div>
    );
};

export default Donation;