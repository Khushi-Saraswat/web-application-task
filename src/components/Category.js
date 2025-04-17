
import '../css/Category.css';


function Category(){

   return(

        
    <div className="container main ">
    <div className="row justify-content-center ">
      <div className="col-sm-12 col-md-4 mb-4">
        <div className="card">
          <img src="/accesories.avif" className=" products" alt="Dresses" />
          <div className="card-body text-center">
            <h5 className="card-title">accesories</h5>
          </div>
        </div>
      </div>
  
      <div className="col-sm-12 col-md-4 mb-4">
        <div className="card">
          <img src="/dress.avif" className=" products" alt="Tops" />
          <div className="card-body text-center">
            <h5 className="card-title">Dress</h5>
          </div>
        </div>
      </div>
  
      <div className="col-sm-12 col-md-4 mb-4">
        <div className="card">
          <img src="/shoes2.avif" className=" products" alt="Shoes" />
          <div className="card-body text-center">
            <h5 className="card-title">Footwear</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  
       
   );


}

export default Category;