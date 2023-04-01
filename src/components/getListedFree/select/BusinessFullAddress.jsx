import useGetListedFree from "../../../Hooks/useGetListedFree"
import { provinces } from "../../../assets/data.json";
import DropDownArrowSvg from "../../buttons/DropDownArrowSvg";


const BusinessFullAddress = () => {
    const { handleProvinceChange, province, citysOptions, handleCityChange, handleWardChange, city, ward, wardsOptions, tolORmarga, setTolORmarga, tolORmargasOptions } = useGetListedFree()
    return (
        <>
            <div className="flex gap-10 justify-center m-auto w-full text-sm text-gray-400 max-lg:flex-wrap">
                <div title="province" className="relative w-full">
                    <label
                        htmlFor="province"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                    >
                        Province
                    </label>
                    <DropDownArrowSvg />
                    <select
                        name="province"
                        id="province"
                        value={province}
                        onChange={handleProvinceChange}
                        className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] border-[1px]
                        border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                    >
                        <option value="">select city ✳️</option>
                        {provinces.map((province) => (
                            <option key={province.name} value={province.name}>
                                {province.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div title="city name" className="relative w-full">
                    <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                    >
                        City Name
                    </label>
                    {province &&
                        <DropDownArrowSvg />
                    }

                    <select
                        name="city"
                        id="city"
                        value={city}
                        onChange={handleCityChange}
                        className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] border-[1px]
                        border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                    >
                        <option value="">select city ✳️</option>
                        {citysOptions}
                    </select>
                </div>
            </div>
            <div className="flex gap-10 justify-center m-auto w-full text-sm text-gray-400 duration-200 ease-in max-lg:flex-wrap">

                <div title="Ward Number" className="relative w-full duration-200 ease-in">
                    <label
                        htmlFor="ward"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                    >
                        Ward Number
                    </label>
                    {city &&
                        <DropDownArrowSvg />
                    }
                    <select
                        name="ward"
                        id="ward"
                        value={ward}
                        onChange={handleWardChange}
                        className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] rounded-sm border-[1px]
                        border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                    >
                        <option value="">select ward ✳️</option>
                        {wardsOptions}
                    </select>
                </div>


                <div title="tol / marga" className="relative w-full duration-200 ease-in">
                    <label
                        htmlFor="tol"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                    >
                        Tol / Marga
                    </label>
                    {ward &&
                        <DropDownArrowSvg />
                    }

                    <select
                        name="tol"
                        id="tol"
                        value={tolORmarga}
                        onChange={(e) => setTolORmarga(e.target.value)}
                        className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none
                     p-3 h-12 border-b-[1px] rounded-sm border-[1px] border-gray-300
                     appearance-none dark:text-white dark:border-gray-600
                     dark:focus:border-blue-500 focus:outline-none focus:ring-0
                     focus:border-blue-600"
                    >
                        <option value="">select tol or marga ✳️</option>
                        {tolORmargasOptions}
                    </select>
                </div>
            </div>
        </>
    )
}
export default BusinessFullAddress