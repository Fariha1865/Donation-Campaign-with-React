import PropTypes from 'prop-types';
const Banner = ({handleSearch}) => {

    function handleSearching(){
        handleSearch(document.getElementById('searchCategory').value.toLowerCase());
        document.getElementById('searchCategory').value = '';
    }
    return (
        <div className="">
            <h1 className="text-3xl font-bold">I Grow By Helping People In Need</h1>
            <div className="flex items-center mt-10">
                <input id="searchCategory" type="text" placeholder="Search" className=" outline-gray-300 pl-5 h-10 w-40 md:w-96 rounded-l-md border border-gray-400"/>
                <input onClick={handleSearching} type="submit" className="h-10 w-24 text-white rounded-r-md bg-[#FF444A]" value="Submit"/>
            </div>

        </div>
    );
};
Banner.propTypes={
    handleSearch: PropTypes.func.isRequired
}
export default Banner;