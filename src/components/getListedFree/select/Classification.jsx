import useGetListedFree from "../../../Hooks/useGetListedFree"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ClassificationComp = () => {
    const { classification, otheClassification, handleOtherClassification, handleClassificationChange } = useGetListedFree()
    return (
        <>
            <div className="flex gap-10 justify-center m-auto w-full text-sm text-gray-400 duration-200 ease-in max-lg:flex-wrap">
                <div title="Business Classification" className="relative w-full duration-200 ease-in">
                    <label
                        htmlFor="classifications"
                        className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                    >
                        Business Classification
                    </label>
                    <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
                    <select
                        name="classifications"
                        id="classifications"
                        defaultValue={'CLASSIFICATION'}
                        onChange={handleClassificationChange}
                        className=" cursor-pointer pr-7 ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                    >
                        <option value="CLASSIFICATION" disabled>
                            select classification ✳️
                        </option>
                        <option value="food and beverage">Food and Beverage</option>
                        <option value="0">Other</option>
                    </select>
                </div>
            </div>
            {classification === "0" && (
                <div title="other classification" className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                    <div className="relative z-0 w-full group">
                        <input
                            type="text"
                            name="classificationOther"
                            value={otheClassification}
                            onChange={handleOtherClassification}
                            className="ovee block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="classificationOther"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter other classification ✳️
                        </label>
                    </div>
                </div>
            )}
        </>
    )
}
export default ClassificationComp