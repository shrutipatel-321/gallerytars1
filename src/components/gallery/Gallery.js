import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import './Gallery.css'
import Modal from '../modal/Modal';
const Gallery = (props) => {
    const [modal, setModal] = useState(false)
    const result = props.result;
    console.log(result);
    let images = [
    ]
    if (result) {
        images = props.result.data.results;
    }
    const [clickedImage, setClickedImage] = useState();
    const handleClick = (image) => {
        setModal(true);
        // window.document.style.overflow='hidden'
        setClickedImage(image);
    }

        return (
            <div className='gallery'>
                {modal && <Modal clickedImage={clickedImage} setModal={setModal}/>}
                <div class="container">
                    {images?.map((image, key) =>
                        <>
                            <div class={"c" + `${key % 3}`} onClick={() => { handleClick(image) }}>
                                <img src={image.urls.small} />
                                <div className="details">
                                    <p className='user'><BiUser className='imported-icon'/> {image.user.username}</p>
                                    <p className='likes'><AiFillLike className='imported-icon'/>{image.likes}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>


            </div>
        )
    }

    export default Gallery;