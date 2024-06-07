import React, { useState } from 'react';
import './image.css';

const Album = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="album ">
            <div className="responsive-container-block bg">
                <div className="responsive-container-block img-cont ">
                    <div className="imgs" onClick={() => openModal('/images/p3d-1.png')}>
                        <img className="img" src="/images/p3d-1.png" alt="Image 1" />
                    </div>
                    <div className="imgs" onClick={() => openModal('/images/p3d-2.png')}>
                        <img className="img" src="/images/p3d-2.png" alt="Image 2" />
                    </div>
                </div>
                <div className="responsive-container-block img-cont ">
                    <div className="imgs" onClick={() => openModal('/images/p3d-4.png')}>
                        <img className="img" src="/images/p3d-4.png" alt="Image 4" />
                    </div>
                    <div className="imgs" onClick={() => openModal('/images/p3d-3.png')}>
                        <img className="img" src="/images/p3d-3.png" alt="Image 5" />
                    </div>
                </div>
           
            </div>

            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={modalImage} alt="Expanded" />
          </div>
        </div>
            )}
            </div>
    );
};
export default Album;