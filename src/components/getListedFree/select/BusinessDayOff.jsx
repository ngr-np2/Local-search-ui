import React from 'react'
import useGetListedFree from '../../../Hooks/useGetListedFree'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BusinessDayOff = () => {
    const { openAllDayAndWeek, handleFromDayOffChange, handleToDayOffChange } = useGetListedFree()
    return (
        <>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                <div title="Off Day" className="relative w-full duration-200 ease-in group">
                    <label
                        htmlFor="dayOffFrom"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >
                        OFF DAYS
                    </label>
                </div>
            </div>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">

                <div title="Day Off From" className={`relative w-full duration-200 ease-in group 
        ${openAllDayAndWeek && "cursor-not-allowed opacity-50"}
        `}>

                    <label
                        htmlFor="dayOffFrom"
                        className={`block text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500  
                ${openAllDayAndWeek ? "text-gray-500 cursor-not-allowed -z-1" : "text-white"}
                `}

                    >
                        From
                    </label>
                    <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
                    <select
                        disabled={openAllDayAndWeek}
                        name="openingHours"
                        id='dayOffFrom'
                        defaultValue={"DAYOFFFROM"}
                        onChange={!openAllDayAndWeek ? handleFromDayOffChange : undefined}
                        className={`ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 
                ${openAllDayAndWeek ? "text-gray-900 cursor-not-allowed -z-1" : "cursor-pointer"}
                `}

                    >
                        <option value="DAYOFFFROM" disabled>Select a day</option>
                        <option value="sun">Sunday</option>
                        <option value="mon">Monday</option>
                        <option value="tue">Tuesday</option>
                        <option value="wed">Wednesday</option>
                        <option value="thu">Thursday</option>
                        <option value="fri">Friday</option>
                        <option value="sat">Saturday</option>
                    </select>

                </div>
                <div title="closing time" className={`ease-in duration-200 relative w-full duration-200 ease-in group 
        ${openAllDayAndWeek && "cursor-not-allowed opacity-50 "}
        `}>

                    <label
                        htmlFor="openTill"
                        className={`block text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500  
                ${openAllDayAndWeek ? "text-gray-500 cursor-not-allowed -z-1" : "text-white"}
                `}

                    >
                        To
                    </label>
                    <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
                    <select
                        name="openTill"
                        disabled={openAllDayAndWeek}
                        onChange={!openAllDayAndWeek ? handleToDayOffChange : undefined}
                        defaultValue={'DAYOFFTILL'}
                        className={`ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  
                ${openAllDayAndWeek ? "text-gray-900 cursor-not-allowed -z-1" : "cursor-pointer"}
                `}
                    >
                        <option value="DAYOFFTILL" disabled>Select a day</option>
                        <option value="sun">Sunday</option>
                        <option value="mon">Monday</option>
                        <option value="tue">Tuesday</option>
                        <option value="wed">Wednesday</option>
                        <option value="thu">Thursday</option>
                        <option value="fri">Friday</option>
                        <option value="sat">Saturday</option>
                    </select>

                </div>
            </div></>
    )
}

export default BusinessDayOff