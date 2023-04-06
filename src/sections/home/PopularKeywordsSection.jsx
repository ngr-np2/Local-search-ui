import React from 'react'
import { Link } from 'react-router-dom'

const PopularKeywordsSection = () => {
    return (

        <section className="bg-stone-200">
            <div className='px-2 pt-8 pb-4'>
                <p className='my-7 text-5xl capitalize font-font-2 text-zinc-900'>Top KeyWords</p>
            </div>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <ul className="font-medium text-gray-500">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-medium text-gray-500">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-medium text-gray-500">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-medium text-gray-500">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-medium text-gray-500">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                        </ul>
                    </div><div>
                        <ul className="font-medium text-gray-500">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">keywords</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PopularKeywordsSection