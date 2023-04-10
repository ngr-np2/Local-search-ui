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
                    className="relative text-center max-w-xs rounded-lg shadow-md cursor-pointer bg-stone-100 group hover:shadow-lg"
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
                            className={`object-cover mx-auto w-64 max-w-sm h-96 bg-cover transition-all duration-500 ease-in-out group-hover:scale-105`}
                        />
                    </div>
                    <div
                        title={data.name}
                        className={` -top-8 relative z-10 p-4 m-auto w-64 text-xl font-semibold   text-white overflow-ellipsis duration-500 ease-in-out bg-[#047a3c] group-hover:w-56 group-hover:text-gray-200 group-hover:bg-gray-900`}>
                        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                            {data.name}
                        </p>
                    </div>
                    <button title={`View Alll ${data.total} Business in this ${data.name} Category`}
                        className="px-6 py-3 mb-6 text-xs bg-gray-50 rounded-full shadow-md duration-500 ease-in-out text-stone-900 group-hover:hover:shadow-lg group-hover:bg-red-500 group-hover:hover:bg-red-600 group-hover:text-white">
                        show All &#40;{data.total}&#41;
                    </button>
                </div>
            ))}
        </>
    )
}

export default PopularCatgCard