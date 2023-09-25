import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../../utilities/localStorage";
import Donation from "./Donation";

const Donations = () => {

    const storedDonatedData = getFromLocalStorage();
    const allCategoryDatas = useLoaderData();

    const storedDonationDatas = allCategoryDatas?.filter(donated=>storedDonatedData?.includes(donated.id));

    return (
        <div className="max-w-7xl mx-auto p-5 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2   gap-10">
            {
                storedDonationDatas.map(donation=><Donation key={donation.id} donation={donation}></Donation>)
            }
            </div>
        </div>
    );
};

export default Donations;