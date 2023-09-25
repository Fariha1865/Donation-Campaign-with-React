import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Category = ({ Category }) => {

    const navigate = useNavigate();
    const {id,picture,category,title,card_bg,category_bg,text_button_bg} = Category;
  
    const handleShowDetails = () =>{
       navigate(`/Details/${id}`)
    }
    return (
        <div onClick={handleShowDetails} className='cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out'>
            <div className={`card shadow-2xl mt-5`} style={{ backgroundColor: card_bg }}>
                <img src={picture} alt="category_img" className='h-40'/>
                <div className="card-body">
                    <h2 style={{ backgroundColor: category_bg,color: text_button_bg}} className='w-28 text-center font-semibold rounded-md'>{category}</h2>
                    <p style={{color: text_button_bg}} className='h-16 font-bold text-lg'>{title}</p>
            
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    Category: PropTypes.object.isRequired
}
export default Category;