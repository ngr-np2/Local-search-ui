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

        time: {
            from: "09:00",
            to: "50:00"
        },
        info: {
            num: "9812345678",
            site: "https://vrittechnologies.com/",
            mail: "info@vrittechnologies.com",
            loc: "https://goo.gl/maps/NBVQKYFpene4nfQt9"
        }
    }
    const date = new Date()
    const day = date.getDay()
    const hour = date.getHours()
    const min = date.getTime()
    console.log(min)



    return (
        <div className="justify-center items-center bg-white rounded-xl border-2 border-gray-100">
            <div className="flex gap-4 items-start p-4 max-sm:flex-col sm:p-6 lg:p-8">
                <Link to="#" className="block shrink-0">
                    <img
                        alt="Speaker"
                        src="/ITAHARI.jpeg"
                        className="object-cover max-sm:w-screen object-bottom max-sm:h-[190px] w-28 h-28 rounded-md"
                    />
                </Link>
                <div className='flex flex-wrap w-full'>
                    <div className='flex-2'>
                        <div className="flex gap-1 mb-1 font-medium text-start sm:text-lg">
                            <Link to="#" className="mr-4 hover:underline">
                                <h3 className='text-2xl font-bold text-gray-600 font-font-8'>{data.name}</h3>
                            </Link>
                            <Star className='text-green-600 hover:text-green-500' />
                            <div className='items-center text-gray-500 font-font-11'>{data.rating}</div>
                        </div>
                        <p className="text-lg text-gray-800 text-start">
                            {data.location}
                        </p>
                        <div className='flex gap-1 items-center mt-5 text-sm text-gray-700'>
                            Categories:
                            <p className="mx-1 text-base text-gray-800 capitalize">
                                {data.catg[0]},
                            </p>
                            {
                                data.catg.length > 1 && <div title={data.catg} className='mx-1 cursor-pointer px-[5px] py-[2px] text-white bg-green-600 rounded-md'>&#43;{data.catg.length - 1}</div>
                            }
                        </div>
                    </div>
                    <div title='opening and closing time' className='flex right-0 flex-1 justify-end items-end text-gray-800 text-end'>
                        <p className='w-[190px] pt-4 cursor-pointer'>
                            🕔 From: <b>{data.time.from} </b> &nbsp; To: <b>{data.time.to}</b>
                        </p>
                    </div>
                </div>
            </div>


            {/* <div className="flex justify-end shadow-sm cursor-pointer">
                <strong
                    className="hover:shadow-xl inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <ShareIcon fontSize='small' />
                    <span className="text-[10px] font-medium sm:text-xs">Share</span>
                </strong>
            </div> */}
        </div>
    )
}

export default ListComp