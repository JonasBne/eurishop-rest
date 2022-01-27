import toast from "react-hot-toast";

function toasts() {
  const succes = () => toast.success("Succes");
  const fail = () => toast.error("Something went wrong");
  return {
    succesToast: succes,
    failToast: fail,
  };
}

export default toasts;
