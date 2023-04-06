import useGetListedFree from '../../../Hooks/useGetListedFree';

const BusinessSocialLink = () => {
    const { instagramLink, facebookLink, twitterLink, handleFacebookLinkChange, handleInstagramLinkChange, handleTwitterLinkChange } = useGetListedFree()
    return (
        <>
            <div className="flex gap-10 justify-center m-auto mt-10 w-full max-lg:flex-wrap">
                <div title="enter instagram username only" className="relative z-0 w-full group">
                    <div className="absolute text-[1.5rem] -left-1" fontSize="small">
                        &#64;
                    </div>
                    <input
                        required
                        type="text"
                        name="instagram"
                        value={instagramLink}
                        onChange={handleInstagramLinkChange}
                        className="overflow-ellipsis block ml-6 py-2.5 pl-[2px] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="instagram"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Instagram
                    </label>
                </div>
                <div title="Twitter username only" className="relative z-0 w-full group">
                    <div className="absolute text-[1.5rem] -left-1" fontSize="small">
                        &#64;
                    </div>
                    <input
                        required
                        type="text"
                        name="twitter"
                        value={twitterLink}
                        onChange={handleTwitterLinkChange}
                        className="overflow-ellipsis block ml-6 py-2.5 pl-[2px] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="twitter"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Twitter
                    </label>
                </div>
            </div>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                <div title="facebook id username only" className="relative z-0 w-full group">
                    <div className="absolute text-[1.5rem] -left-1" fontSize="small">
                        &#64;
                    </div>

                    <input
                        required
                        type="text"
                        name="facebook"
                        value={facebookLink}
                        onChange={handleFacebookLinkChange}
                        className="overflow-ellipsis block ml-6 py-2.5 pl-[2px] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="facebook"

                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Facebook
                    </label>
                </div>
            </div>
        </>
    )
}
export default BusinessSocialLink