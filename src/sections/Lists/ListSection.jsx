import React from 'react'
import ListComp from '../../components/Lists/ListComp'

const ListSection = () => {
    return (
        <section className='bg-slate-100'>
            <div className='flex px-4 max-sm:flex-col max-sm:w-full' >
                <div className='flex flex-col gap-6 w-full max-w-screen-xl sm:flex-1'>
                    <ListComp />
                    <ListComp />
                    <ListComp />
                </div>

                <aside className="sm:flex-[0.5] sm:ml-12 bg-gray-400">
                    sidebar
                </aside>
            </div>
        </section>
    )
}

export default ListSection