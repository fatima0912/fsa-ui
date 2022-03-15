import IfElse from "../utils/IfElse";

const CartButton = ({ product, onAddClick}) => product.inStock && 
    <button disabled = {!product.inStock} className="btn btn-danger btn-sm" onClick={onAddClick}>
        Add to Cart
        <i className="fa fa-shopping-cart"></i>
        </button>



const ProductItem = ({ product, onAdd }) => {
     
     const onAddClick = () => {
         onAdd(product);
     }
      
     return <div class = "col-md-3">
            <div style={{margin : '10px'}} className="card">
                <div className="card-img-top" src = { product.img } />
                <div className="card-body">
                    <h4 className="card-title">{product.brand}</h4>
                    <b> ${ product.price}</b>
                    
                    <h6>
                    <label> In stock?</label>
                    <input disabled type = "checkbox" checked = {product.inStock} />
                    </h6>
                    </div>
                    <div className="card-footer">
                         <IfElse cond = {product.inStoc} >
                        <button className = "btn btn-danger btn-sm" onClick={onAddClick}> 
                            Add to cart
                        <i className="fa fa-shopping-cart" ></i>
                    </button>
                        
                        <button className = "btn btn-danger btn-sm" onClick={onAddClick}> 
                        Notify
                    <i className="fa fa-bell" ></i>
                </button>
                </IfElse>
                </div>
            </div>
        </div>
}

export default {ProductItem, CartButton};