import React from 'react'
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import useGetListedFree from '../../../Hooks/useGetListedFree';
const Agrement = () => {
    const { agree, setAgree } = useGetListedFree()

    return (
        <div className="flex gap-4 gap-y-2 items-start m-auto w-full duration-200 ease-in  max-lg:flex-wrap">
            {
                !agree ? <CheckBoxOutlineBlankIcon className="cursor-pointer" onClick={() => setAgree(!agree)} /> :
                    <CheckBoxOutlined onClick={() => setAgree(!agree)} className={`${agree && "text-blue-600"} cursor-pointer`} />
            }
            <p className="p-0 m-0 text-base text-start font-font-8 cursor-pointer" onClick={() => setAgree(!agree)} >
                I agree to the Terms & Conditions and Privacy Policy
            </p>
        </div>
    )
}

export default Agrement