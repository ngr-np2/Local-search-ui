import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";
import AdvertiseMap from "../../components/home/Advertise/AdvertiseMap";

const AdvertiseWithUs = () => {
  const datas = [
    {
      name: "Local Search",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "E-sewa",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Space X",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Vrit Tech",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const [ref, inView] = useIntersectionObserver();

  return (
    <section>
      <div className="pt-8 pb-4 mx-5 text-center">
        <p className="my-7 leading-[60px] text-5xl capitalize font-font-2 text-zinc-900">
          Advertise with Us
        </p>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap gap-9 justify-center items-center px-8 py-4 rounded-sm"
      >
        {inView && <AdvertiseMap />}
      </div>
    </section>
  );
};
export default AdvertiseWithUs;
