import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorage } from "../../utilities/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'

const successToast = (success) => {

    toast.success(success, {
        className: 'custom-toast',
        autoClose: 4000,
    })
}
const errorToast = (error) => {

    toast.error(error, {
        className: 'custom-toast',
        autoClose: 4000,
    })
}



const Details = () => {

    const allCategories = useLoaderData();
    const { categoryId } = useParams();

    const selectedCategory = allCategories.find(category => category.id === parseInt(categoryId))
    const { picture, id, category, title, description, text_button_bg, price } = selectedCategory;

    const handleAddDonations = () => {
        const status = addToLocalStorage(id);
        if(status)
        {
            return successToast(`  You have successfully donated for ${category}`);
        }else{
            return errorToast(`You have already donated for ${category}`);

        } 
    }


    return (
        <div className="max-w-7xl mx-auto mb-32">
        <ToastContainer className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="flex flex-col items-center px-10 md:px-16 relative">
                <div className="relative w-full">
                    <img src={picture} alt="" className="w-full h-[465px] z-0 rounded-md" />
                    <div className="absolute w-full h-20 top-96 bg-black opacity-50"></div>
                    <button onClick={handleAddDonations} className="btn border-none text-white normal-case absolute left-5 bottom-5 " style={{ backgroundColor: text_button_bg }}>
                        <span>Donate</span> {price}
                    </button>
                </div>
            </div>

            <h1 className="pl-10 md:pl-16 mt-10 text-3xl font-bold">{title}</h1>
            <h1 className="pl-10 md:pl-16 mt-10">{description}</h1>


        </div>


    );
};

export default Details;