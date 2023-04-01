import useGetListedFree from "../../../Hooks/useGetListedFree"

const BusinessPostBoxNum = () => {
    const { postalCode, setPostalCode } = useGetListedFree()
    return (
        <div title="Post Box No" className="relative z-0 w-full group">
            <input
                required
                type="text"
                name="postbox"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="overflow-ellipsis placeholder-transparent focus:placeholder-gray-500 appearance-none  block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="56705"
            />
            <label
                htmlFor="postbox"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Post Box No.
            </label>
        </div>
    )
}
export default BusinessPostBoxNum