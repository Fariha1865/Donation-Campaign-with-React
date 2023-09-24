import PropTypes from 'prop-types';
const Category = ({ Category }) => {

    const {picture,category,description,card_bg,category_bg,text_button_bg} = Category;
  
    return (
        <div>
            <div className={`card shadow-2xl mt-5`} style={{ backgroundColor: card_bg }}>
                <img src={picture} alt="Shoes" />
                <div className="card-body">
                    <h2 style={{ backgroundColor: category_bg,color: text_button_bg}} className='w-28 text-center font-semibold rounded-md'>{category}</h2>
                    <p style={{color: text_button_bg}} className='h-16 font-bold text-lg'>{description}</p>
            
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    Category: PropTypes.object.isRequired
}
export default Category;