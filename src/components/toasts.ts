import toast from "react-hot-toast";

function toasts() {
  const succes = (message: string) => toast.success(message);
  const fail = (error: Error) => toast.error(error.toString());
  return {
    succesToast: succes,
    failToast: fail,
  };
}

export default toasts;
