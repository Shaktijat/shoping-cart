import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/ShopCart/productSlice';
import { addToCart } from '../../features/ShopCart/CartSlice';
function Product() {
const {products, status}=useSelector((state) => state.products);

 const dispatch = useDispatch()
  useEffect(() => {
 if(status === 'idle'){
    dispatch(fetchProducts());
 }  
  }, [status]);

  if(status === 'loading'){
    return <div className='laoding'>Products Loading...</div>
  }
  if(status === 'failed'){
    return <div>Error fetching products.</div>
  }
  return (
    <>
     <Navbar />     
     <div className="product-list">
  {products.map(product => (
    <div key={product.id} className="product-class">
      <img src={product.image} alt={product.title} />
      <h2>{product.title.length > 20 ? `${product.title.slice(0,15)}...`: product.title}</h2>
      <p>${product.price}</p>
      <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  ))}
</div>
    </>
  )
}

export default Product
