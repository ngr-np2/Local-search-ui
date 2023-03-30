import useGetListedFree from "../../../Hooks/useGetListedFree"
import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const BusinessWebsite = () => {
    const { website, setWebsite, setWebsiteUrl, WebsiteUrl, handleWebSiteUrl } = useGetListedFree()
    return (
        <>
            <div title="Website" className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                <div className="relative z-0 w-full group">
                    <input
                        type="url"
                        name="ur"
                        disabled={website}
                        value={website ? '' : WebsiteUrl}
                        onChange={!website ? handleWebSiteUrl : undefined}
                        className={` block py-2.5 px-0 w-full overflow-ellipsis text-sm text-gray-200 bg-transparent border-0 border-b-2  appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${website ? 'cursor-not-allowed border-gray-700' : 'curser-text border-gray-600'}`}
                        placeholder=" "
                    />
                    <label
                        htmlFor="Website"
                        className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${website ? 'text-gray-600' : 'text-gray-400'}`}>
                        Website
                    </label>
                </div>
            </div>
            <div title="we do not have a website. CheckBox" className="flex gap-4 items-center m-auto w-full duration-200 ease-in cursor-pointer max-lg:flex-wrap">
                {
                    !website ? <CheckBoxOutlineBlankIcon onClick={() => (setWebsite(!website), setWebsiteUrl(''))} /> :
                        <CheckBox onClick={() => setWebsite(!website)} />
                } <p className="p-0 m-0 text-base font-font-8" onClick={() => setWebsite(!website)} >
                    We do not have a website
                </p>
            </div>
        </>
    )
}
export default BusinessWebsite