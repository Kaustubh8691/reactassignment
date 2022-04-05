function ProductList(props) {
  const {object}=props;
  var arrow=">";
    return (
      <div className="Product">
        <div className='checkbox'>
          <input type={'checkbox'}></input>
      </div>
        <img src={object.profileImg} alt= "profileimage"/>
        <div className="producttext">
          <div className="productname">{object.name}</div>
          <div  className="description">{object.product_description}</div>
        </div>
        <div className="arrow">{arrow}</div>
        
      </div>
    );
  }
  export default ProductList; 