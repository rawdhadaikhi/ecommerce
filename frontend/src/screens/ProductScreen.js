import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating'
import { detailsProduct } from '../JS/actions/productActions';


const ProductScreen = (props) => {
    const [qty, setQty] = useState(1);
    const dispatch =useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) =>state.productDetails);
    const {loading , product, error} = productDetails;
    
    useEffect(() => {
       dispatch(detailsProduct(productId))
    }, [dispatch, productId])
    
   const addToCartHandler =() => {
       props.history.push(`/cart/${productId}?qty=${qty}`);
   }

    return (
        <div>
        {
           loading ? ( <LoadingBox></LoadingBox> ) :
           error ? ( <MessageBox variant ="danger">{error}</MessageBox> ) :  
           (
            <div>
            <Link to="/"> Back to Home</Link>
           <div className="row top"> 
                <div className="col-2">
                  <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating 
                        rating={product.rating} 
                        numReviews={product.numReviews}
                        ></Rating>
                    </li>
                    <li>Prix : {product.price} DT</li>
                    <li>Description:
                        <p>{product.description}</p>
                    </li>
                </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                       <ul>
                           <li>
                               <div className="row">
                                <div>Prix:</div>
                                <div className="price">{product.price} DT</div>
                               </div>
                           </li>
                           <li>
                               <div className="row">
                                <div>Status:</div>
                                <div>
                                    {product.countInStock > 0 
                                    ? (<span className="success">In stock</span>)
                                    : (<span className="danger">unavailable</span>)
                                 }
                                </div>
                               </div>
                           </li>
                           {
                               product.countInStock > 0 &&(
                                <>
                                  <li>
                                      <div className="row">
                                          <div>Qty :</div>
                                          <div>
                                              <select value={qty} onChange={e => setQty(e.target.value)}>
                                                  {
                                                      [...Array(product.countInStock).keys()].map(x =>(
                                                          <option key = {x+1} value={x+1}>{x + 1}</option>
                                                      ))
                                                  }
                                              </select>
                                          </div>
                                      </div>
                                  </li>   
                                  <li>
                                       <button
                                        className="primary block"
                                        onClick={addToCartHandler}
                                        >add to Cart</button>
                                  </li>  
                                </>  
                               )
                           }
                       </ul>
                    </div>
                </div>
           </div>
        </div>
           )}
      </div>
       
    )
}

export default ProductScreen
