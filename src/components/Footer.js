
import '../css/Footer.css';

function Footer(){
    return(
    
      <div className="container-fluid text-bg-light p-3  ">
      <footer className="container text-center">
      
        <div class="row">
        <div class="col">
         
        <h3 className=" fw-bold text-primary">Quick Links</h3>
        
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
             

        </ul>
      

        </div>
        <div class="col">
         <div className='mt-5'>
            <p><span className='text-primary fw-bold'>Email</span>: FemmeVogue123@gmail.com</p>
            <p> <span className='text-primary fw-bold'>Phone</span>: 682034</p>
            <p> <span className='text-primary fw-bold'>Adddress</span>: xyswjj</p>
         </div>

        </div>

       </div>
     
      </footer>
    </div>
        



    );

}

export default Footer;