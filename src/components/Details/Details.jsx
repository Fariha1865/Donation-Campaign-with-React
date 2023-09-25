import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const allCategories = useLoaderData();
    const { categoryId } = useParams();

    const selectedCategory = allCategories.find(category => category.id === parseInt(categoryId))
    const { picture, id, title, description, text_button_bg, price } = selectedCategory;
    return (
        <div className="max-w-7xl mx-auto mb-32">

            <div className="flex flex-col items-center px-10 md:px-16 relative">
                <div className="relative w-full">
                    <img src={picture} alt="" className="w-full h-[465px] z-0 rounded-md" />
                    <div className="absolute w-full h-20 top-96 bg-black opacity-50"></div>
                    <button className="btn border-none text-white normal-case absolute left-5 bottom-5 " style={{ backgroundColor: text_button_bg }}>
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