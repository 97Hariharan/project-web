import React from 'react';
import './TitleBar.css';

var modal = document.getElementById('email-modal');




function titleBar () {

  function openButton(){

      document.getElementById('email-modal').style.display = 'block';

    }

    function closeButton(){

        document.getElementById('close-btn').style.display = 'none';

    }
  function windowEvent(e) {
     if( e.target === modal){
      document.getElementById('email-modal').style.display ='none';
    }
  };



return(
    <div>
      <div className='titleSection'>
        <div className='heading-left'> PRODUCTS </div>
          <button className='main-btn' onClick = {() => openButton()}> ADD PRODUCTS</button>
        </div>
        
        <div className="modal" id='email-modal' onClick = {(e) => windowEvent(e)}>
        <div className="modal-content">
          <span id ="close-btn" onClick = {() => closeButton()}> &times;</span>
          <div className = 'modal-content-left '>
            <img src="images/pop-img.jpg" alt=""/>
          </div>
          <div className='model-content-right'>
            <form action="/" method='GET' className='modal-form' id='form'>
              <h3>Select The Product you like</h3>
              <div className='form-validation'>
                <p>Enter the product category</p>
                <input type = 'text' className='modal-input' id='name' name='name' placeholder='Enter the product category' />
              </div>
              <div className='form-validation'>
                <p>Enter the product name</p>
                <input type = 'text' className='modal-input' id='name' name='name' placeholder='Enter the product name' />
              </div>
              <div className='form-validation'>
                <p>price</p>
                <input type = 'text' className='modal-input' id='name' name='name' placeholder='Enter the price' />
              </div>
              <div className='form-validation'>
                <input type = 'submit' className='modal-input-btn' valu='submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
  </div> 

        
    );
}




export default titleBar;
