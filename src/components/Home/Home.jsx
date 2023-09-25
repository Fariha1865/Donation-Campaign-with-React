
import { useLoaderData } from "react-router-dom";
import Banner from "../HomePageComponents/Banner/Banner";
import Categories from "../HomePageComponents/Categories/Categories";
import { useState } from "react";



const Home = () => {





    const categories = useLoaderData();
    const [searchedCategory, setSearchedCategory] = useState(categories);

    function handleSearch(Category) {

        if (Category) {
            const searched = categories.filter(category => category.category === Category)
            setSearchedCategory(searched)
        }else{
            setSearchedCategory(categories)
        }

    }
    return (
        <div className="max-w-6xl mx-auto">


            <div>
                <div className="absolute top-[40%] left-[20%] lg:left-[30%]">
                    <Banner handleSearch={handleSearch}></Banner>
                </div>
                <Categories categories={searchedCategory}></Categories>
            </div>

        </div>
    );
};

export default Home;