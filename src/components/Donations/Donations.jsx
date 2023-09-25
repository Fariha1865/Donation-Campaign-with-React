import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../../utilities/localStorage";
import Donation from "./Donation";
import { useEffect, useState } from "react";


const Donations = () => {

    const storedDonatedData = getFromLocalStorage();
    const allCategoryDatas = useLoaderData();

    

    let storedDonationDatas = allCategoryDatas?.filter(donated => storedDonatedData?.includes(donated.id));
    const [storedDonations, setStoredDonations] = useState(storedDonationDatas.slice(0, 4));
    const [isHidden, setIsHidden] = useState(true);
    const [noData, setNoData] = useState(true);

    function handleSeeAll() {
        setStoredDonations(storedDonationDatas);
        setIsHidden(true);

    }
    useEffect(() => {
        if (storedDonatedData.length > 0) {
              setNoData(false)
        }
        if(storedDonatedData.length === 0)
        {
            setNoData(true);
        }
        if (storedDonatedData.length > 4) {
            setIsHidden(false);
        }
        
       
    }, [storedDonatedData.length])
    return (
        <div className="max-w-7xl mx-auto p-5 lg:p-10">
            <h1 className={`text-4xl text-center mt-20 ${noData ? '' : 'hidden'}`}>No Donations Available</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2   gap-10">
                {
                    storedDonations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                }
            </div>
            <div className={`flex justify-center ${isHidden ? 'hidden' : ''}`}>
                <button onClick={handleSeeAll} className="btn bg-[#009444] text-white hover:bg-green-900 mt-20">See All</button>

            </div>
        </div>
    );
};

export default Donations;