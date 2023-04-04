import React, { useState } from 'react'

const PopularCatgCard = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        console.log(`Failed to load image: ${src}`);
    };
    const datas = [
        {
            name: "Restaurant",
            imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            total: 250
        },
        {
            name: "Banks",
            imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            total: 250
        },
        {
            name: "Park",
            imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            total: 250
        },
        {
            name: "Service Center Service Center Service Center Service Center ",
            imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            total: 250
        }
    ];
    return (
        <>
            {datas.map((data, idx) => (
                <div
                    key={idx}
                    className="relative max-w-xs bg-red-50 dark:bg-stone-900 rounded-lg shadow-md cursor-pointer group hover:shadow-lg"
                >
                    <div className="overflow-hidden h-56">
                        {!imageLoaded && <img src="/ITAHARI.jpeg"
                            className="mx-auto transition-all duration-500 ease-in-out group-hover:scale-105"
                            alt="Placeholder" />}

                        <img
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            src={data.imgUrl}
                            alt="random"
                            className={`mx-auto transition-all h-96 max-w-sm w-64 bg-cover object-cover duration-500 ease-in-out group-hover:scale-105`}
                        />
                    </div>
                    <div
                        className={`overflow-x-hidden -top-8 relative z-10 p-4 m-auto w-64 text-xl font-semibold   text-white overflow-ellipsis duration-500 ease-in-out bg-[#047a3c] group-hover:w-56 group-hover:text-gray-200 group-hover:bg-slate-900`}>
                        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                            {data.name}
                        </p>
                    </div>
                    <button
                        className="px-4 py-2 mb-8 text-xs bg-green-50 text-stone-900 rounded-full shadow-md duration-500 ease-in-out group-hover:hover:shadow-lg group-hover:bg-red-500 group-hover:hover:bg-red-600 group-hover:text-white">
                        show All ({data.total})
                    </button>
                </div>
            ))}
        </>
    )
}

export default PopularCatgCard