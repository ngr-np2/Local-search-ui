import { Link } from 'react-router-dom'
import Star from '@mui/icons-material/Star';
import { parse, isBefore, addMinutes, differenceInMinutes } from 'date-fns';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import { WiTime1, WiTime2, WiTime3, WiTime4, WiTime5, WiTime6, WiTime7, WiTime8, WiTime9, WiTime10, WiTime11, WiTime12 } from "react-icons/wi";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
const ListComp = () => {
    const data = {

        name: "Vrit tech"
        ,
        location: "pragati nagar road, sheenagar marga, ward/tol 8, kathmandu, Bagmati province"
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
    // console.log(currentDay)


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
    } else {
        status = 'closed_today'
    }
    // const hoursRemaining = Math.floor(timeRemaining / 60);
    // const minutesRemaining = timeRemaining % 60;


    const fromHour = parseInt(data.time.from.split(":")[0]);
    const toHour = parseInt(data.time.to.split(":")[0]);

    const iconMap = {
        1: WiTime1,
        2: WiTime2,
        3: WiTime3,
        4: WiTime4,
        5: WiTime5,
        6: WiTime6,
        7: WiTime7,
        8: WiTime8,
        9: WiTime9,
        10: WiTime10,
        11: WiTime11,
        12: WiTime12,
    };

    const FromIcon = iconMap[fromHour % 12 || 12];
    const ToIcon = iconMap[toHour % 12 || 12];

    // console.log("clo", minToClose)
    // console.log("opn", minutesToOpen)
    // console.log('rem', hoursRemaining, ":", minutesRemaining)
    // console.log(status)
    // console.log(fromHour)
    const timeClass = "px-[0.4rem] pb-[0.1rem] pt-1 text-white rounded-md tracking-widest text-xs font-font-11"
    const bottonStyle = `hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white`
    const bottonTextStyle = `text-[10px] max-sm:hidden font-medium sm:text-xs font-font-11`
    return (
        <div className="pt-8 pb-5 bg-white rounded-xl border-2 border-gray-100">
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
                        <div className="flex gap-1 mb-1 font-medium text-gray-700 text-start sm:text-lg">
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
                                        <div className='flex gap-1 items-center mx-3 w-40 text-start'>
                                            <FromIcon className={`${status === "open" && "text-green-500"}`} />
                                            From:
                                            <b className={`${status === "open" ? "text-green-500" : "text-gray-600"}`}>
                                                &nbsp;{data.time.from}
                                            </b>
                                        </div>
                                        <div className='flex gap-1 items-center mx-3 w-40 text-start'><ToIcon className={`${status === "closed" || status === "closed_today" ? "text-red-500" : "text-neutral-900"}`} /> To:
                                            <b className={`${status === "closed" || status === "closed_today" ? "text-red-500" : "text-gray-600"}`}>
                                                &nbsp;{data.time.to}
                                            </b>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute right-9 text-gray-900 top-15 max-sm:top-10'>
                    <div class="relative z-10 h-8">
                        {status === 'open' && <p className={`bg-green-500 ${timeClass}`}>Open Now</p>}
                        {status === 'closed' && (
                            <p style={{ paddingLeft: "11px", paddingRight: "11px" }} className={`bg-red-500 ${timeClass}`}>Closed</p>
                        )}
                        {status === 'opening_soon' && (
                            <p className={`bg-green-700 text-[9px] ${timeClass}`}>Openign Soon</p>
                        )}
                        {status === 'closing_soon' && (
                            <p className={`bg-red-700 text-[9px] ${timeClass}`}>Closeing Soon</p>
                        )}
                        {status === 'closed_today' && (
                            <p className={`bg-red-500 text-[9px] ${timeClass}`}>Closed today</p>
                        )}

                        <div style={{ transform: 'rotate(-45deg)' }} class="-z-10 absolute bottom-0 -top-7 left-2/3 w-[3px] h-9 bg-gray-500 transform -translate-x-1/2"></div>
                        <div style={{ transform: 'rotate(45deg)' }} class="-z-10 absolute bottom-0 -top-7 left-1/3 w-[3px] h-9 bg-gray-500 transform -translate-x-1/2"></div>
                        <span class="absolute top-0 left-3/4 w-1 h-1 bg-black rounded-full transform translate-x-1 translate-y-[0.10rem]"></span>
                        <span class="absolute top-0 left-1/4 w-1 h-1 bg-black rounded-full transform -translate-x-[0.29rem] translate-y-[0.10rem]"></span>
                        <span class="absolute -top-[1.1rem] left-1/2 w-3 h-3 bg-black rounded-full transform -translate-x-1/3 -translate-y-full"></span>
                    </div>
                </div>


            </div>


            <div className="flex flex-wrap gap-3 justify-start px-6 pt-3 pb-5 shadow-sm cursor-pointer">
                <strong
                    className={bottonStyle}
                >
                    <LocalPhoneIcon fontSize='small' />
                    <span className={bottonTextStyle}>Calll Us</span>
                </strong><strong
                    className={bottonStyle}
                >
                    <LanguageIcon fontSize='small' />
                    <span className={bottonTextStyle}>Website</span>
                </strong>
                <strong
                    className={bottonStyle}
                >
                    <EmailIcon fontSize='small' />
                    <span className={bottonTextStyle}>Email Us</span>
                </strong>
            </div>
            {/* <div className="flex flex-wrap gap-3 justify-start px-6 pt-3 pb-5 shadow-sm cursor-pointer">
                <strong
                    className="hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <FacebookRounded fontSize='small' className='rounded-full' sx={{ color: '#4267B2', background: "white" }} />
                    <span className="text-[10px] font-medium sm:text-xs">Share</span>
                </strong><strong
                    className="hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <Instagram fontSize='small' sx={{ color: "#da1b1b", background: 'white' }} className='rounded-md' />
                    <span className="text-[10px]  font-medium sm:text-xs">Share</span>
                </strong><strong
                    className="hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
                >
                    <Twitter fontSize='small' sx={{ color: '#1DA1F2', background: "white" }} className='rounded-lg' />
                    <span className="text-[10px] font-medium sm:text-xs">Share</span>
                </strong>
            </div> */}
        </div>
    )
}

export default ListComp