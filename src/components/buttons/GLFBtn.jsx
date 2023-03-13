import { RiAddCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const GLFBtn = () => {
    return (
        <Link to="/getlistedfree" className='flex justify-end'>
            <div className='bg-[#48b348] flex  gap-2 cursor-pointer  m-2 py-2 px-3 text-white rounded-lg items-center shadow-lg max-sm:text-[0.7rem] max-sm:px-2_py-1 max-sm:gap-1 font-font-2'>
                <RiAddCircleLine className='text-xl max-sm:text-[0.9rem] select-none' /> Get Listed Free
            </div>
        </Link>
    )
}
export default GLFBtn