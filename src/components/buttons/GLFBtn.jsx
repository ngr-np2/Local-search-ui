import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const GLFBtn = () => {
  return (
    <Link to="/getlistedfree" className="flex ">
      <div className="bg-[#078e07] flex  gap-2 cursor-pointer  m-2 py-[0.7rem] px-[0.8rem] text-white rounded-t-lg rounded-r-lg rounded-bl-2xl items-center shadow-lg max-sm:text-[0.7rem] max-sm:px-2_py-1 max-sm:gap-1 font-font-2">
        <AddCircleOutlineIcon className="text-xl max-sm:text-[0.9rem] select-none" />{" "}
        Get Listed Free
      </div>
    </Link>
  );
};
export default GLFBtn;
