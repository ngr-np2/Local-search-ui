import React from 'react'

const PopularCatgCard = () => {
    const datas = [
        {
            name: "Restaurant",
            imgUrl: "https://source.unsplash.com/random/800x600",
            total: 250
        },
        {
            name: "Banks",
            imgUrl: "https://source.unsplash.com/random/800x600",
            total: 250
        },
        {
            name: "Park",
            imgUrl: "https://source.unsplash.com/random/800x600",
            total: 250
        },
        {
            name: "Service Center",
            imgUrl: "https://source.unsplash.com/random/800x600",
            total: 250
        }
    ];
    return (
        <>
            {datas.map((data, idx) => (
                <div
                    key={idx}
                    className="relative max-w-xs bg-red-50 rounded-lg shadow-md cursor-pointer group hover:shadow-lg"
                >
                    <div className="overflow-hidden">
                        <img
                            src={data.imgUrl ? data.imgUrl : "/ITAHARI.jpeg"}
                            alt="random"
                            className="mx-auto transition-all duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div
                        className={`overflow-x-hidden -top-8 relative z-10 p-4 m-auto w-full text-xl font-semibold   text-white overflow-ellipsis duration-500 ease-in-out bg-[#047a3c] group-hover:w-9/12 group-hover:text-gray-200 group-hover:bg-slate-900`}>
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