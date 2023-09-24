import PropTypes from 'prop-types';
import Category from './Category';
const Categories = ({ categories }) => {

 

    return (
        <div className='max-w-6xl mx-auto mb-20 mt-10 p-10'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
           {
                categories.map((category,index)=><Category key={index} Category={category}></Category>)
            }
           </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired
}
export default Categories;