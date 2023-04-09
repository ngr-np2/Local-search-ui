import React from 'react'
import ListComp from '../../components/Lists/ListComp'

const ListSection = () => {
    return (
        <section className='bg-slate-100'>
            <div className='flex px-4 pt-16 max-w-screen-xl m-auto justify-center max-md:flex-col ' >
                <div className='flex flex-col gap-6 sm:flex-1'>
                    <ListComp />
                    <ListComp />
                    <ListComp />
                </div>

                <aside className="sm:flex-[0.5] sm:ml-6 bg-gray-400 rounded-md">
                    <div className='px-2 py-3'>
                        <div>
                            <div>Advertising</div>
                            <img src="/ITAHARI.jpeg" alt="ads" />
                            <p className='text-start py-2 px-3'>
                                Lorem ipsum  numquam labore facere exercitationem soluta architecto quas delectus officia adipisci sunt, amet atque nobis ab?
                            </p>
                        </div>
                    </div>
                    <div className='px-2 py-3'>
                        <div>
                            <div>Advertising</div>
                            <img src="/ITAHARI.jpeg" alt="ads" />
                            <p className='text-start py-2 px-3'>
                                Lorem ipsum  numquam labore facere exercitationem soluta architecto quas delectus officia adipisci sunt, amet atque nobis ab?
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default ListSection