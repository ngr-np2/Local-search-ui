import React from 'react'
import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import useGetListedFree from '../../../Hooks/useGetListedFree';
const Agrement = () => {
    const { agree, setAgree } = useGetListedFree()

    return (
        <div className="flex gap-4 items-center m-auto w-full duration-200 ease-in  max-lg:flex-wrap">
            {
                !agree ? <CheckBoxOutlineBlankIcon className="cursor-pointer" onClick={() => setAgree(!agree)} /> :
                    <CheckBox className="cursor-pointer" onClick={() => setAgree(!agree)} />
            }
            <p className="p-0 m-0 text-base font-font-8 cursor-pointer" onClick={() => setAgree(!agree)} >
                I agree to the Terms & Conditions and Privacy Policy
            </p>
        </div>
    )
}

export default Agrement