//Display products

function ProductDisplay(props){
    const products = props.products
  
    return(
      <div className="allProductDisplay">
      {products.map((products, index) => (
        <div id = {products.id} className="productDisplay" key={index}>
          <img src = {products.photo} alt = "Product" className ="productPhoto"/>
        <h4>{products.item}</h4>
        <p>R{products.price}.00</p>   
      </div>
      ))}
    </div>
    );
  }
 export default ProductDisplay  