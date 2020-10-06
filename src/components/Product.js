import React, { useState } from 'react';
import './Product.css';



function Product() {
    const [products] = useState([
        {
            id : 12377231,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img1.jpg'
        },
        {
            id : 12377232,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img2.jpg'
        },
        {
            id : 12377233,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img3.jpg'
        },
        {
            id : 12377234,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img4.jpg'
        },
        {
            id : 12377235,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img5.jpg'
        },
        {
            id : 12377236,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img6.jpg'
        }, 
        {
            id : 12377237,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img7.jpg'
        },
        {
            id : 12377238,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img8.jpg'
        },
        {
            id : 12377239,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img9.jpg'
        },
        {
            id : 12377239,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img10.jpg'
        },
        {
            id : 12377239,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img11.jpg'
        },
        {
            id : 12377239,
            title : "Mens T-Shirts",
            price : 15.96,
            rating : 5,
            image : './Images/img12.jpg'
        },
    ]);

    function openImagebtn(){

          document.getElementById('img-section').style.display = 'block';

        }
    
        function closeImagebtn(){
            
            document.getElementById('end-btn').style.display = 'none';

        }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                return ({products : reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div id="product">
            {
            products.map(product =>(
                <div className="card" id="img-card" key={product._id} >
                    <img src={product.image} alt="image" onClick = {() => openImagebtn()}/>
                        <div className="content">
                            <h3>
                                {product.title}
                            </h3>   
                            <span>${product.price}</span>
                        </div>
                        <div className='mainImages' id='img-section'>
                            <div className='img-container'>
                                <span id ="end-btn" onClick = {() => closeImagebtn()}> &times;</span>
                                <div className = 'img-content-left '>
                                    
                                </div>
                                <div className='img-content-right'>
                                    <form action="/" method='GET' className='img-form' id='form'>
                                        <h3>ADD YOUR NEW IMAGES</h3>
                                            <div className='image-validation'>
                                                <p>Category</p>
                                                <input type = 'text' className='img-inputImg' id='name' name='name' placeholder='Enter the product category' />
                                            </div>
                                            <div className='image-validation'>
                                                <p>Product Name</p>
                                                <input type = 'text' className='img-inputImg' id='name' name='name' placeholder='Enter the product name' />
                                            </div>
                                            <div className='image-validation'>
                                                <p>product Price</p>
                                                <input type = 'text' className='img-inputImg' id='name' name='name' placeholder='Enter the product Price' />
                                            </div>
                                            <input type="file" name='image-upload' id='input' accept='image/' onChange ={() => imageHandler() }  />
                                            <div className = 'label'>
                                                <label htmlFor="input" className='image-upload'>
                                                    <h4>choose the Image</h4>
                                                </label>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    );

}

export default Product;
