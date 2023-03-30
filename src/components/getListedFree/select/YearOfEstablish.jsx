import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useGetListedFree from '../../../Hooks/useGetListedFree';

const YearOfEstablish = () => {
    const { setEstablishIn, currentNepaliYear, startingGregorianYearAdjusted } = useGetListedFree()
    return (
        <div title="Year of Establishment" className="relative w-full duration-200 ease-in group">
            <label
                htmlFor="establishIn"
                className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
                Year of Establishment
            </label>
            <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
            <select
                name="establishIn"
                id="establishIn"
                defaultValue={'ESTABLISHIN'}
                onChange={(e) => setEstablishIn(e.target.value)}
                className="cursor-pointer ease-in pr-7 duration-200 bg-[#1a1f2d] w-full outline-none p-3 appearance-none h-12 border-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
                <option value="ESTABLISHIN">
                    select Year of Esishment in BS ✳️
                </option>
                {Array.from({ length: currentNepaliYear - startingGregorianYearAdjusted + 1 }, (_, i) => currentNepaliYear - i)
                    .filter((year) => year >= 1969)
                    .map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
            </select>
        </div>
    )
}
export default YearOfEstablish