import useGetListedFree from "../../../Hooks/useGetListedFree"

const BusinessNameAndEmail = () => {
    const { businessName, handleBusinesFullAddress, businessFullAddress, handleBusinessName, businessEmail, handleBusinessEmail } = useGetListedFree()
    return (
        <>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                <div title="business name" className="relative z-0 w-full group">
                    <input
                        required
                        type="text"
                        name="businessName"
                        value={businessName}
                        onChange={handleBusinessName}
                        className="overflow-ellipsis block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="businessName"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Business Name ✳️
                    </label>
                </div>
                <div title="business email" className="relative z-0 w-full group">
                    <input
                        required
                        type="email"
                        name="businessEmail"
                        value={businessEmail}
                        onChange={handleBusinessEmail}
                        className="overflow-ellipsis block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="businessEmail"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Business Email ✳️
                    </label>
                </div>
            </div>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                <div title="enter full address for more clarification" className="relative z-0 w-full group">
                    <input
                        required
                        type="text"
                        name="businessFullAddress"
                        value={businessFullAddress}
                        onChange={handleBusinesFullAddress}
                        className="overflow-ellipsis block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="businessFullAddress"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Business Address ✳️
                    </label>
                </div>
            </div>
        </>
    )
}
export default BusinessNameAndEmail