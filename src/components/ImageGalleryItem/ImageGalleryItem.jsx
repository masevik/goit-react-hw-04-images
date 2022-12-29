import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal';
import {
  ImageGalleryStyledItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <ImageGalleryStyledItem>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
      />
      {isModalOpen && (
        <Modal onToggleModal={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </ImageGalleryStyledItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
