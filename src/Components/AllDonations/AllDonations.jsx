import { useEffect, useState } from "react";
import AllDonation from "../AllDonation/AllDonation";



const AllDonations = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data));
    }, [])

    return (
        <div>
            
            <div className="grid grid-cols-4 gap-6 pt-24 pb-40">
                {
                    donations.map(donation => <AllDonation key={donation.id} donation={donation}></AllDonation>)
                    
                }
            </div>
        </div>
    );
};

export default AllDonations;