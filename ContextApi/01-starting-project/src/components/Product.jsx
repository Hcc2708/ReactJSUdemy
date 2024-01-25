import {useContext} from 'react'
import ContextApi from '../store/ContextApi';

export default function Product({
  id,
  image,
  title,
  price,
  description,
  
}) {
const cart = useContext(ContextApi)
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => cart.onAddItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
