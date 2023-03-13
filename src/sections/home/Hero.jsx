import Mid from "../../components/home/hero/Mid"
import Top from "../../components/home/hero/Top"

const Hero = () => {
    return (
        <header className=" bg-gray-300">
            <div className=" z-10 relative mb-4 pb-4 bg-no-repeat  bg-[url('/ITAHARI.jpeg')] bg-center bg-cover">
                <div className="-z-10 h-full backdrop-blur-[1px] absolute w-full bg-[#42444717]" />
                <Top />
                <Mid />
            </div>
        </header>
    )
}
export default Hero