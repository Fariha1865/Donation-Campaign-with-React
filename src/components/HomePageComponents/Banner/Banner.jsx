
const Banner = () => {
    return (
        <div className="">
            <h1 className="text-3xl font-bold">I Grow By Helping People In Need</h1>
            <div className="flex items-center mt-10">
                <input type="text" placeholder="Search" className=" outline-gray-300 pl-5 h-10 w-40 md:w-96 rounded-l-md border border-gray-400"/>
                <input type="submit" className="h-10 w-24 text-white rounded-r-md bg-[#FF444A]" />
            </div>

        </div>
    );
};

export default Banner;