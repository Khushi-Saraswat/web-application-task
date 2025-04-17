

import '../css/Newsletter.css';



function Newsletter(){
    return(

       <div className="container-fluid news">
        <div className=" mb-4">
        <h2 className="display-5 fw-bold">
          Join Our Newsletter!
        </h2>
       </div>
       <div className=" mb-4">
        <input type="email" placeholder="enter your email" className='email'/>
       </div>

       <div className=" mb-4">
       <a href="" className="btn btn-light btn-lg mt-3">
           Subscribe
        </a>
       </div>
       
       </div>




    );
}

export default Newsletter;