
import { useLoaderData } from "react-router-dom";
import Banner from "../HomePageComponents/Banner/Banner";
import Categories from "../HomePageComponents/Categories/Categories";



const Home = () => {

    const categories = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">


            <div>
                <div className="absolute top-[30%] left-[20%] lg:left-[30%]">
                    <Banner></Banner>
                </div>
                <Categories categories={categories}></Categories>
            </div>

        </div>
    );
};

export default Home;