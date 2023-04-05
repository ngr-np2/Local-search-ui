import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';

const PopularBuninessComp = () => {
    return (
        <div className="justify-center items-center bg-white rounded-xl border-2 border-gray-100">
            <div className="flex max-sm:flex-col gap-4 max-w-[500px] items-start p-4 sm:p-6 lg:p-8">
                <Link to="#" className="block shrink-0">
                    <img
                        alt="Speaker"
                        src="/ITAHARI.jpeg"
                        className="object-cover w-24 rounded-lg h-19"
                    />
                </Link>

                <div>
                    <h3 className="mb-3 w-full font-medium text-start sm:text-lg">
                        <Link to="#" className="hover:underline">
                            Question about Livewire Rendering and Alpine JS
                        </Link>
                    </h3>

                    <p className="w-full text-sm text-gray-700 text-start line-clamp-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                        accusantium
                    </p>
                </div>
            </div>


            <div className="flex justify-end">
                <strong
                    className="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <ShareIcon />
                    <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
                </strong>
            </div>
        </div>
    )
}

export default PopularBuninessComp