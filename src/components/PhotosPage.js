import React from 'react';
import PropTypes from 'prop-types';

const PhotosPage = ({ images, onHandleSelectImage, selectedImage }) =>{
return (
  <div className="col-md-6">
    <h2 className="heading">Images</h2>
  {/*   <div className="selected-image">
      <div key={selectedImage.id}>
        <h6 className="title">{selectedImage.title}</h6>
        <img src={selectedImage.urls.small} alt={selectedImage.alt_description} />
      </div>
    </div> */}
    <div className="selected-image">
      {images.map(image => (
        <div key={image.id} onClick={onHandleSelectImage.bind(this, image)}>
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </div>
  </div>
);
} 

PhotosPage.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default PhotosPage;