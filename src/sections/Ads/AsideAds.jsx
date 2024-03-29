import React, { useEffect, useState } from "react";

const AsideAds = ({ data }) => {
  // console.log("1", data);
  const [importantAds, setImportantAds] = useState([]);

  useEffect(() => {
    const impAds = data?.filter((ads) => ads.important === true);
    // console.log("im", impAds);
    if (impAds) {
      setImportantAds((prev) => [...prev, ...impAds]);
    }
  }, [data]);

  // const adsdata = [
  //   {
  //     img: "https://imgs.search.brave.com/7nITqtxmZaczhMn28joycIBPWigFxaXsD7jdM89KIGY/rs:fit:613:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/b1ZRelZBNkpOYjZW/T0Q3R2thRHRRSGFG/dSZwaWQ9QXBp",
  //     type: "display",
  //     important: "false",
  //   },
  //   {
  //     img: "https://imgs.search.brave.com/NmrLjsmQCNeCgHTtVJL1UL0kG500zQGFx3GQia4lKkk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/T0JsVmlLd2tzbEhT/ak9GX0ZnT1N3SGFF/SyZwaWQ9QXBp",
  //     type: "display",
  //     important: "false",
  //   },
  //   {
  //     img: "https://imgs.search.brave.com/l7G-VxADrqpgNy_CKuKVFB1UPqoYfiTi6b3_fJ1S9N4/rs:fit:693:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/T3hqX2VhLUtFZVlt/amJlR0tCc01BSGFG/RSZwaWQ9QXBp",
  //     type: "display",
  //     important: "false",
  //   },
  //   {
  //     img: "https://imgs.search.brave.com/QeemmI3OcNYVguCp7KndRSj1b-kwCd_jrcI6q6c4Wh0/rs:fit:785:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/YW5vUVlCcU1GMC1o/ZzN4SmcxaFRBSGFF/ZSZwaWQ9QXBp",
  //     type: "display",
  //     important: "false",
  //   },
  //   {
  //     img: "https://imgs.search.brave.com/HSJ1-Ybg0k-OPv1c2Q80lYsP2fn0IW5FeaPKi-oPWAk/rs:fit:472:668:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNDc0/eC81Ny9lMy9kNy81/N2UzZDc4ZjA4MGRm/YTdhZWE1MGJhY2Qz/NmUyMzY0Yi0tZ29v/ZC1hZHZlcnRpc2Vt/ZW50cy1hZHZlcnRp/c2luZy1wb3N0ZXIu/anBn",
  //     type: "display",
  //     important: "true",
  //   },
  // ];
  return (
    <aside className="sm:flex-[0.5] sm:ml-6 bg-[#84819177] rounded-md">
      <div className="relative h-full">
        <div className="sticky top-8">
          {data?.length === 0 &&
            importantAds.map((ads) => {
              // console.log("ads imp", ads);
              return (
                <div key={ads._id} className="px-2 top-8 py-3">
                  <div className="relative">
                    <div className="absolute font-font-2 text-xs py-1 leading-3 z-10 px-1 top-2 right-2">
                      Ads
                    </div>
                    <a href={ads?.link}>
                      <img
                        src={ads?.image}
                        // src="https://imgs.search.brave.com/HSJ1-Ybg0k-OPv1c2Q80lYsP2fn0IW5FeaPKi-oPWAk/rs:fit:472:668:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNDc0/eC81Ny9lMy9kNy81/N2UzZDc4ZjA4MGRm/YTdhZWE1MGJhY2Qz/NmUyMzY0Yi0tZ29v/ZC1hZHZlcnRpc2Vt/ZW50cy1hZHZlcnRp/c2luZy1wb3N0ZXIu/anBn"
                        alt="ads"
                        className="m-auto w-full h-full object-cover"
                      />
                      <p className="px-3 py-2 text-start">{ads?.title}</p>
                    </a>
                  </div>
                </div>
              );
            })}
          {data &&
            data
              .filter((ads) => ads.important == true)
              .map((ads) => {
                return (
                  <div key={ads?._id} className="px-2 top-8 py-3">
                    <div className="relative">
                      <div className="absolute font-font-2 text-xs py-1 leading-3 z-10 px-1 top-2 right-2">
                        Ads
                      </div>
                      <a href={ads?.link}>
                        <img
                          src={ads?.image}
                          // src="https://imgs.search.brave.com/HSJ1-Ybg0k-OPv1c2Q80lYsP2fn0IW5FeaPKi-oPWAk/rs:fit:472:668:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNDc0/eC81Ny9lMy9kNy81/N2UzZDc4ZjA4MGRm/YTdhZWE1MGJhY2Qz/NmUyMzY0Yi0tZ29v/ZC1hZHZlcnRpc2Vt/ZW50cy1hZHZlcnRp/c2luZy1wb3N0ZXIu/anBn"
                          alt={ads?.title}
                          className="m-auto w-full h-full object-cover"
                        />
                        <p className="px-3 py-2 text-start z-10 text-slate-100 ">
                          {ads?.desc}
                        </p>
                      </a>
                    </div>
                  </div>
                );
              })}
          {data &&
            data
              .filter((ads) => ads.important == false)
              .map((ads) => {
                // console.log("false", ads);
                return (
                  <div key={ads._id} className="px-2 top-8 py-3">
                    <div className="relative">
                      <div className="absolute font-font-2 text-xs py-1 leading-3 z-10 px-1 top-2 right-2">
                        Ads
                      </div>
                      <a href={ads?.link}>
                        <img
                          src={ads?.image}
                          // src="https://imgs.search.brave.com/HSJ1-Ybg0k-OPv1c2Q80lYsP2fn0IW5FeaPKi-oPWAk/rs:fit:472:668:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNDc0/eC81Ny9lMy9kNy81/N2UzZDc4ZjA4MGRm/YTdhZWE1MGJhY2Qz/NmUyMzY0Yi0tZ29v/ZC1hZHZlcnRpc2Vt/ZW50cy1hZHZlcnRp/c2luZy1wb3N0ZXIu/anBn"
                          alt="ads"
                          className="m-auto w-full h-full object-cover"
                        />
                        <p className="px-3 py-2 text-start">{ads?.title}</p>
                      </a>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </aside>
  );
};

export default AsideAds;
