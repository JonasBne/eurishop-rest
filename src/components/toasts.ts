import toast from "react-hot-toast";

function toasts() {
  const succes = () => toast.success("Succes");
  const fail = () => toast.error("Fail");
  return {
    succesToast: succes,
    failToast: fail,
  };
}

export default toasts;
