import styled from "styled-components";
import CheckCircleSvg from "../svg/CheckCircleSvg";
import ExclamationSvg from "../svg/ExclamationSvg";

const ToastMessage = styled.div`
  background-color: ${(props) =>
    props.bg === "success" ? "#5eda2f" : props.bg === "error" ? "red" : "blue"};
`;

const CustomToast = ({ message, type }) => {
  return (
    <ToastMessage className="fixed text-white flex justify-center items-center  rounded gap-3 z-[9999999999999999] text-base p-4 right-1 top-4  " bg={type}>
      {type === "success" ? (
        <CheckCircleSvg />
      ) : type === "error" && (
        <ExclamationSvg />
      )}
      {message}
    </ToastMessage>
  );
};

export default CustomToast;
