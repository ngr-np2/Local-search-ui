import React from 'react'
import HomeOutlined from "@mui/icons-material/HomeOutlined ";
import { Link } from 'react-router-dom';

const AreYouLost = () => {
    return (
        <div className='flex  justify-center items-center h-screen'>
            <div className="text-gray-800 max-w-lg w-11/12 rounded-xl bg-[#fff7]  shadow-lg p-8 ">
                <p className='font-font-2 max:text-3xl text-3xl '>
                    Are you Lost?
                </p>
                <div className='mt-10 '>
                    <Link to='/' className='flex hover:underline flex-wrap gap-2 gap-x-4 items-center justify-center'>
                        <HomeOutlined
                            sx={{ fontSize: 40 }}
                            className="text-gray-700  bg-transparent shadow-lg rounded-lg   p-1" />
                        <p className='bg-[#ffffff2f] shadow-lg py-3 px-4 rounded-md'>Lest's get Back to Home</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AreYouLost