import Swal from 'sweetalert2'

export const messageSuccess = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Message Sent successfully"
      });
}

export const messageError = (message) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        footer: 'Something wrong!'
      });
      
}