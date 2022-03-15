import ProductItem from './Product/ProductItem';

const ProductList1 = ()=>{
    const products =[
        {id:1, brand:'Apple', inStock:true, model:' Iphone 10', price:100, img:"https://th.bing.com/th/id/OIP.iLLcbgBaSDRz2k2ZFxsECQHaFj?pid=ImgDet&rs=1"},
        {id:2, brand:'Apple', inStock:false, model:' Iphone 11', price:1000, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343703000"},
        {id:3, brand:'Apple', inStock:true, model:' Iphone 12', price:10000,img: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901538-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTMwMTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDYzL2hlNy85NDA3NzQ4ODY2MDc4LmpwZ3w2YWQ3ZDg2MjYzYTg4NzJiNDNkMjQ0ZWUzZmJjZjcwMzhlYzExNmNlMzQ2YjhjOThlNTg5ZjVhN2M1NDQ2YjZj"}
    ];
     const cart = [];

     const onAddCartClick = (product)=> {
         //console.log('Added to cart',product);
            cart.push(product);
            console.log(cart);   
        }

    return <div>
        {products.map(item => <ProductItem key={item.id} product = {item} onAdd = {onAddCartClick} />)}
    </div>
}

export default ProductList1;

//<h6>InsStock: {product.inStock ? 'Yes' : 'No'}</h6>