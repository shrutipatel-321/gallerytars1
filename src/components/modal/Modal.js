import React from 'react'
import './Modal.css'
import {SlClose} from 'react-icons/sl';
import { AiFillLike, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
const Modal = (props) => {
  const image = props.clickedImage;
  console.log(image);
  return (
    <div>
        <div className="modal-container">
          <SlClose id='close-modal' onClick={(e)=>{props.setModal(false)}}/>
            <div className="content">    
              <div className="clickedimage">
                <img src={image.urls.small} alt="" />  
              </div>        
              <div className="details">
                <p className='user'><span><img src={image.user.profile_image.small} alt="" />{image.user.name}</span><span>@{image.user.username}</span><span><AiFillLike/>{image.likes}</span></p>
                {image.user.bio&&<p className='bio'>"{image.user.bio}"</p>}
                <p className='social'>
                  <span>
                    {image.user.instagram_username&&<><AiFillInstagram className='imported-icon'/>{image.user.instagram_username}</>}
                  </span>
                  <span>
                    {image.user.twitter_username&&<><AiFillTwitterSquare className='imported-icon'/>{image.user.twitter_username}</>}
                  </span>
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal