import useGetListedFree from "../../../Hooks/useGetListedFree"
import { useState, useEffect } from 'react'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { Combobox } from "@headlessui/react";
// import { classifications } from '../../../assets/classificationData.json'
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


const BusinessClassification = () => {
    const [loading, setLoading] = useState(false);
    const { catg, setcatg } = useGetListedFree();
    const [classificationData, setClassificationData] = useState();
    //console.log(catg)
    const fetchCatg = async()=>{
        try {
            const res = await fetch('https')
        } catch (err) {
            
        }
    }

    const handleClassificationChange = (selectedOptions) => {
        setcatg(selectedOptions);
    };
    // //console.log(classificationData)
    const handleInputFocus = () => {
        if (!classificationData) {
            setLoading(true);
            fetch('/classificationData.json')
                .then(response => response.json())
                .then(data => {
                    // //console.log(data)
                    const datas = data.classifications?.map(item => ({ label: item.label, value: item.value }));
                    setClassificationData(datas);
                    setLoading(false);
                    // //console.log(classificationsarray)
                })
                .catch(error => {
                    console.error('Error fetching classification data:', error);
                    setLoading(false);
                });
        }
    };



    // //console.log(classification?.map(option => option.value));
    return (
        <>
            <div className="flex gap-10 justify-center m-auto w-full text-sm text-gray-400 duration-200 ease-in max-lg:flex-wrap">
                <div title="Business Classification" className="flex relative flex-col-reverse w-full duration-200 ease-in group">



                    <CreatableSelect
                        value={catg}
                        classNamePrefix="peer"
                        className=" cursor-pointer  ease-in duration-200 text-start 
                        bg-[#1a1f2d] bg-red-300!important border-[1px] peer  border-gray-300!important Z-11 text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600
                        "
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                border: state && '1px'
                            }),
                        }}
                        components={animatedComponents}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary50: "#0068ff", //  option active bg color
                                primary25: "#0097ff", //  option hover bg color
                                danger: "white", // choosed option remove icon color
                                dangerLight: "red", // choosed option remove icon bg color
                                neutral0: "#1a1f2d", // bg color
                                neutral20: "#4b5563", // border color
                                neutral30: "#697484", // hover border
                                neutral40: "#878d96", // icon hover color
                                neutral50: "#878d96", // placeholder color
                                neutral60: "#4eb0ff", // icon active color
                                neutral70: "red", // icon color
                                neutral10: "#292e3c", // selected bg color
                                neutral80: "#e8e6e3", // selected text color
                            },
                        })}
                        isLoading={loading}
                        onChange={handleClassificationChange}
                        onFocus={handleInputFocus}
                        isMulti options={classificationData} />


                    {/* <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
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
                    </select> */}
                    <label
                        htmlFor="classifications"
                        className="block mb-2 text-sm font-medium text-left text-gray-500 peer-focus:text-blue-600"
                    >
                        Business Classification
                    </label>
                </div>
            </div>
            {/* {classification === "0" && (
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
            )} */}
        </>
    )
}
export default BusinessClassification




