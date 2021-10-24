import { toast, Zoom } from 'react-toastify';

const ToastRender = ({ message, type }) => {
    toast[type](message, {
        position: "top-center",
        theme: "dark",
        transition: Zoom,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

export default ToastRender