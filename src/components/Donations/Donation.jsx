import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Donation = ({ donation }) => {

    const { id,price, picture, category, title, card_bg, category_bg, text_button_bg } = donation;

    return (
        <div>
            <div className={`flex shadow-2xl mt-5 h-62 rounded-md`} style={{ backgroundColor: card_bg }}>
                <img src={picture} alt="category_img" className='w-1/2' />
                <div className="card-body">
                    <h2 style={{ backgroundColor: category_bg, color: text_button_bg }} className='w-28 text-center font-semibold rounded-md'>{category}</h2>
                    <p className='font-bold text-lg mt-2 h-20'>{title}</p>
                    <p style={{ color: text_button_bg }} className="font-bold">{price}</p>
                    <Link to={`/Details/${id}`}><button style={{ backgroundColor: text_button_bg }} className="text-white btn w-32 md:w-40 mt-5">View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

Donation.propTypes={
     donation: PropTypes.object.isRequired
}
export default Donation;