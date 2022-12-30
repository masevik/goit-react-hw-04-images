import { toast } from 'react-toastify';

export const errorMessage = () =>
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
