import { Link } from 'react-router-dom'
import Star from '@mui/icons-material/Star';
import { parse, isBefore, addMinutes, differenceInMinutes } from 'date-fns';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';


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
            from: "09:00 am",
            to: "05:00 pm"
        },
        days: [1, 2, 3, 6, 4],
        info: {
            num: "9812345678",
            site: "https://vrittechnologies.com/",
            mail: "info@vrittechnologies.com",
            loc: "https://goo.gl/maps/NBVQKYFpene4nfQt9"
        }
    }


    const openingTime = parse(data.time.from, 'hh:mm a', new Date());
    const closingTime = parse(data.time.to, 'hh:mm a', new Date());
    const now = new Date();
    const currentDay = now.getDay();
    let status = 'closed';
    let timeRemaining = null;
    let minutesToOpen;
    let minToClose;

    if (data.days.includes(currentDay)) {
        if (isBefore(now, openingTime)) {
            minutesToOpen = differenceInMinutes(openingTime, now);
            status = minutesToOpen <= 15 ? `opening_soon` : 'closed';
            timeRemaining = minutesToOpen;
        } else if (isBefore(now, closingTime)) {
            minToClose = differenceInMinutes(closingTime, now);
            status = minToClose <= 15 ? 'closing_soon' : 'open';
            timeRemaining = minToClose;
        } else {
            status = 'closed';
            timeRemaining = differenceInMinutes(addMinutes(openingTime, 1440), now); // add 24 hours to openingTime
        }
    }
    const hoursRemaining = Math.floor(timeRemaining / 60);
    const minutesRemaining = timeRemaining % 60;
    console.log("clo", minToClose)
    console.log("opn", minutesToOpen)
    console.log('rem', hoursRemaining, ":", minutesRemaining)
    console.log(status)
    const timeClass = 'px-2 py-[2px] text-white rounded-md tracking-widest'
    return (
        <div className="pt-8 bg-white rounded-xl border-2 border-gray-100">
            <div className="flex relative gap-4 items-start px-4 pt-4 pb-0 max-sm:flex-col sm:px-6 lg:px-8">
                <Link to="#" className="block shrink-0">
                    <img
                        alt="Speaker"
                        src="/ITAHARI.jpeg"
                        className="object-cover max-sm:w-screen  object-bottom max-sm:h-[190px] w-28 h-28 rounded-md"
                    />
                </Link>
                <div className='flex flex-wrap w-full'>
                    <div className='flex-[2]'>
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
                        <div className='flex flex-wrap justify-end items-center'>

                            <div className='flex flex-1 gap-1 items-center mt-5 text-sm text-gray-700'>
                                Categories:
                                <p className="mx-1 text-base text-gray-800 capitalize">
                                    {data.catg[0]},
                                </p>
                                {
                                    data.catg.length > 1 && <div title={data.catg} className='mx-1 cursor-pointer px-[5px] py-[2px] text-white bg-green-600 rounded-md'>&#43;{data.catg.length - 1}</div>
                                }
                            </div>
                            <div title='opening and closing time' className='flex right-0 flex-1 justify-end items-end text-center text-gray-800'>
                                <div
                                    className='pt-4 w-full cursor-pointer'>
                                    <div className='flex flex-wrap'>
                                        <div className='mx-3 w-40 text-start'> 🕔 From:
                                            <b className={`${status === "open" ? "text-green-500" : "text-gray-600"}`}>
                                                &nbsp; {data.time.from}
                                            </b>
                                        </div>
                                        <div className='mx-3 w-40 text-start'>🕔 To:
                                            <b className={`${status === "closed" ? "text-red-500" : "text-gray-600"}`}>
                                                &nbsp; {data.time.to}
                                            </b>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute right-3 -top-5 text-gray-900'>
                    {status === 'open' && <p className={`bg-green-500 ${timeClass}`}>open</p>}
                    {status === 'closed' && (
                        <p className={`bg-red-500 ${timeClass}`}>currently closed</p>
                    )}
                    {status === 'opening_soon' && (
                        <p className={`bg-green-700 ${timeClass}`}>Openign Soon</p>
                    )}
                    {status === 'closing_soon' && (
                        <p className={`bg-red-700 ${timeClass}`}>Closeing Soon</p>
                    )}
                </div>
            </div>


            <div className="flex flex-wrap gap-3 justify-start px-6 pt-3 pb-5 shadow-sm cursor-pointer">
                <strong
                    className="hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <FacebookRounded fontSize='small' className='rounded-full' sx={{ color: '#4267B2', background: "white" }} />
                    <span className="text-[10px] font-medium sm:text-xs">Share</span>
                </strong><strong
                    className="hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <Instagram fontSize='small' sx={{ color: "#FD1D1D" }} />
                    <span className="text-[10px] font-medium sm:text-xs">Share</span>
                </strong><strong
                    className="hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <Twitter fontSize='small' sx={{ color: '#1DA1F2' }} />
                    <span className="text-[10px] font-medium sm:text-xs">Share</span>
                </strong>
            </div>
        </div>
    )
}

export default ListComp