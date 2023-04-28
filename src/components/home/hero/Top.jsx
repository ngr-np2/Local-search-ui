import GLFBtn from "../../buttons/GLFBtn"
import Logo from "../../Logo"

const Top = () => {
    return (
        <div className="flex px-1 py-8 max-w-7xl w-11/12  ml-auto mr-auto max-sm:flex-col">
            <div className="flex-1 text-white text-left"><Logo /></div>
            <div className="flex-1 flex justify-end"><GLFBtn /></div>
        </div>
    )
}
export default Top