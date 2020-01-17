import React from "react";
import photo1 from "../../img/AdobeStock_181052766_Preview.jpg"
import photo2 from "../../img/AdobeStock_181612908_Preview.jpg"
import photo3 from "../../img/AdobeStock_181612917_Preview.jpg"

const UnLoggedPage = () => {
    return (
        <div className="row photoInfo">
            <div className="col-1-of-2">
                <div className='text'>
                <h3>Lorem ipsum dolor consectetur sit amet.</h3>
                <p className="paragraph">
                    Ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti, enim odit doloribus culpa accusantium? Sapiente dolorem aliquam odio. Maiores perspiciatis cumque mollitia ratione nostrum accusamus ducimus quam blanditiis placeat.
                </p> 
                <p className="paragraph">
                    Ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti, enim odit doloribus culpa accusantium? Sapiente dolorem aliquam odio. Maiores perspiciatis cumque mollitia ratione nostrum accusamus ducimus quam blanditiis placeat.
                </p>
                </div>
            </div>
            <div className="col-1-of-2">
                <div className="composition">
                    <img src={photo1} alt="1" className="composition__photo composition__photo--p1"/>
                    <img src={photo2} alt="2" className="composition__photo composition__photo--p2"/>
                    <img src={photo3} alt="3" className="composition__photo composition__photo--p3"/>
                </div>
            </div>
        </div>
    )
}



export default UnLoggedPage

