
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {price, img,name,seller,ratings} = props.product;
    
    
    const handleAddToCart = props.handleAddToCart;
   return (
        <div className='product-cart'>
            <img className='product-image' src={img} alt="" />
            <div className='product-content'>
               <h3>{name}</h3>
                <h4 className='price'>Price: {price}</h4>
               <p>Manufacturer : {seller}</p>
               <p>Rating : {ratings}</p>
            </div>
            <button className='add-to-cart' onClick={()=>handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;