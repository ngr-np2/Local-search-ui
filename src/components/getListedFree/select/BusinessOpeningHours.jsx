import useGetListedFree from "../../../Hooks/useGetListedFree"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DropDownArrowSvg from "../../buttons/DropDownArrowSvg";

const BusinessOpeningHours = () => {
    const { handleFromDayOffChange, handleToDayOffChange, openAllDayAndWeek, setOpenAllDayAndWeek, times, setOpenFrom, setOpenTill, setDayOffFrom, setDayOffTill, handleOpenTimeChange, handleCloseTimeChange } = useGetListedFree()
    return (
        <>
            <div className="flex gap-10 justify-center m-auto mt-10 w-full max-lg:flex-wrap">
                <div title="Opening Hours" className="relative w-full duration-200 ease-in group">
                    <label
                        htmlFor="openingHours"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >
                        Opening Hours
                    </label>
                    <div title="open 24 hours a day, seven day a week. CheckBox" className="flex gap-2 items-center m-auto ml-28 duration-200 ease-in cursor-pointer max-lg:flex-wrap">
                        {
                            !openAllDayAndWeek ?
                                <CheckBoxOutlineBlankIcon
                                    onClick={() => (setOpenAllDayAndWeek(!openAllDayAndWeek), setOpenTill(''), setOpenFrom(''), setDayOffFrom(''), setDayOffTill(''))} />
                                :
                                <CheckBox onClick={() => setOpenAllDayAndWeek(!openAllDayAndWeek)} />
                        }
                        <p className="p-0 m-0 text-base font-font-8" onClick={() => setOpenAllDayAndWeek(!openAllDayAndWeek)} >
                            24/7
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">

                <div title="Opening time" className={`relative w-full duration-200 ease-in group 
                ${openAllDayAndWeek && "cursor-not-allowed opacity-50"}
                `}>

                    <label
                        htmlFor="openingHours"
                        className={`block text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500  
                        ${openAllDayAndWeek ? "text-gray-500 cursor-not-allowed -z-1" : "text-white"}
                        `}

                    >
                        From
                    </label>
                    <DropDownArrowSvg />
                    <select
                        disabled={openAllDayAndWeek}
                        name="openingHours"
                        defaultValue={'OPENFROM'}
                        onChange={!openAllDayAndWeek ? handleOpenTimeChange : undefined}
                        className={`ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 
                        ${openAllDayAndWeek ? "text-gray-900 cursor-not-allowed -z-1" : "cursor-pointer"}
                        `}
                    >
                        <option value="OPENFROM">
                            Opening Time
                        </option>
                        {times.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
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
                    <DropDownArrowSvg />
                    <select
                        name="openTill"
                        disabled={openAllDayAndWeek}
                        defaultValue={"OPENTILL"}
                        onChange={!openAllDayAndWeek ? handleCloseTimeChange : undefined}
                        className={`ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  
                        ${openAllDayAndWeek ? "text-gray-900 cursor-not-allowed -z-1" : "cursor-pointer"}
                        `}
                    >
                        <option value="OPENTILL">
                            Closing Time
                        </option>
                        {times.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>


            <div className={`flex gap-10 mt-5 justify-center m-auto w-full max-lg:flex-wrap ${openAllDayAndWeek && "cursor-not-allowed opacity-50"}`}>
                <div title="business closing day" className="relative w-full duration-200 ease-in group">
                    <label
                        htmlFor="dayofffrom"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                    >
                        OFF DAYS
                    </label>
                </div>
            </div>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">

                <div title="from which day day Business will be closed" className={`relative w-full duration-200 ease-in group ${openAllDayAndWeek && "cursor-not-allowed opacity-50"}`}>

                    <label
                        htmlFor="dayofffrom"
                        className={`block text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 ${openAllDayAndWeek ? "text-gray-500 cursor-not-allowed -z-1" : "text-white"}`}

                    >
                        From
                    </label>
                    <DropDownArrowSvg />
                    <select
                        disabled={openAllDayAndWeek}
                        name="openingHours"
                        id="dayofffrom"
                        defaultValue={"DAYOFFFROM"}
                        onChange={!openAllDayAndWeek ? handleFromDayOffChange : undefined}
                        className={`ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${openAllDayAndWeek ? "text-gray-900 cursor-not-allowed -z-1" : "cursor-pointer"}`}
                    >
                        <option value="DAYOFFFROM" disabled>Select a day</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>

                </div>
                <div title="till which day the business will be close" className={`ease-in duration-200 relative w-full duration-200 ease-in group 
        ${openAllDayAndWeek && "cursor-not-allowed opacity-50 "}
        `}>

                    <label
                        htmlFor="dayofftill"
                        className={`block text-sm font-medium text-left peer-focus:text-blue-600 peer-focus:dark:text-blue-500  
                ${openAllDayAndWeek ? "text-gray-500 cursor-not-allowed -z-1" : "text-white"}
                `}

                    >
                        To
                    </label>
                    <DropDownArrowSvg />
                    <select
                        name="dayofftill"
                        id="dayofftill"
                        disabled={openAllDayAndWeek}
                        onChange={!openAllDayAndWeek ? handleToDayOffChange : undefined}
                        defaultValue={'DAYOFFTILL'}
                        className={`ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  
                ${openAllDayAndWeek ? "text-gray-900 cursor-not-allowed -z-1" : "cursor-pointer"}
                `}
                    >
                        <option value="DAYOFFTILL" disabled>Select a day</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>

                </div>
            </div>
        </>
    )
}
export default BusinessOpeningHours