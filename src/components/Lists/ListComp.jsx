import React from 'react'
import { Link } from 'react-router-dom'
import ShareIcon from '@mui/icons-material/Share';
import Star from '@mui/icons-material/Star';
const ListComp = () => {
    const data = {

        name: "Vrit tech"
        ,
        location: "pargati nagar road, sheenagar marga, ward/tol 8, kathmandu, Bagamati province"
        ,

        catg: ["software company", "Training Institute", "Recruiting Agencies"]
        ,

        keyWord: ["software development", "UI/UX designing", "SEO", "Web", "development"]
        ,

        rating: "4.5"
        ,

        time: [
            { OpTime: "09:00" },
            { clTime: "50:00" }
        ],
        info: [
            { num: "9812345678" },
            { site: "https://vrittechnologies.com/" },
            { mail: "info@vrittechnologies.com" },
            { loc: "https://goo.gl/maps/NBVQKYFpene4nfQt9" }
        ]
    }
    console.log(data)

    return (
        <div className="justify-center items-center bg-white rounded-xl border-2 border-gray-100">
            <div className="flex max-sm:flex-col gap-4 max-w-[500px] items-start p-4 sm:p-6 lg:p-8">
                <Link to="#" className="block shrink-0">
                    <img
                        alt="Speaker"
                        src="/ITAHARI.jpeg"
                        className="object-cover w-28 h-28 rounded-md"
                    />
                </Link>
                <div>
                    <div className="flex gap-1 mb-1 w-full font-medium text-start sm:text-lg">
                        <Link to="#" className="mr-4 hover:underline">
                            <h3 className='font-bold text-gray-600 font-font-8'>{data.name}</h3>
                        </Link>
                        <Star className='text-green-600 hover:text-green-500' />
                        <div className='items-center text-gray-500 font-font-11'>3.1</div>
                    </div>
                    <p className="w-full text-sm text-gray-700 text-start">
                        {data.location}
                    </p>
                    <div className='text-sm text-gray-700 text-start flex gap-1 items-end mt-5'>
                        Categories:
                        <p className="text-base text-gray-800 mx-1">
                            {data.catg[0]},
                        </p>
                        {
                            data.catg.length > 1 && <div className='mx-2 cursor-pointer px-[5px] text-white bg-green-600'>+{data.catg.length - 1}</div>
                        }
                    </div>
                </div>
            </div>


            <div className="flex justify-end shadow-sm cursor-pointer">
                <strong
                    className="hover:shadow-xl inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <ShareIcon fontSize='small' />
                    <span className="text-[10px] font-medium sm:text-xs">Share</span>
                </strong>
            </div>
        </div>
    )
}

export default ListComp