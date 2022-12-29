import { useState, useEffect } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { fetchImages } from './api/getImage';
import { Button } from './Button';
import { toast } from 'react-toastify';
import { Loader } from './Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getImages = async () => {
      try {
        const response = await fetchImages(query, page);
        setImages(prevState => [...prevState, ...response.images]);
        setTotalPages(response.totalPages);
      } catch {
        errorMessage();
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const errorMessage = () =>
    toast.error('Something went wrong. Please try again', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const onSubmitSearch = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setIsLoading(true);
    setQuery(value);
  };

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevState => prevState + 1);
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr"
      gridGap="16px"
      paddingBottom="24px"
    >
      <Searchbar onSubmit={onSubmitSearch} />
      {query !== '' && <ImageGallery images={images}></ImageGallery>}
      {images.length > 0 && page < totalPages && (
        <Button onClick={onLoadMore}>Load more</Button>
      )}
      {isLoading && <Loader />}
    </Box>
  );
};
