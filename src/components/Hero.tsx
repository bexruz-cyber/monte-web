import { useEffect, useState } from "react"
import { cityRound, download, hamburger, heroRight, map, site_logo, topArrpow } from "../image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        if (windowWidth > 1024) {
            gsap.fromTo(".heroRightImg", {
                scale: 1.5, // Boshlang‘ich holatda katta
                filter: "blur(10px)", // Boshlang‘ichda blur qo‘shish
            }, {
                duration: 1,
                scale: 1, // Boshlang‘ich holatda katta
                filter: "blur(0px)", // Boshlang‘ichda blur qo‘shish
            });
        }

        gsap.fromTo(".text-up", {
            duration: 1,
            y: 50,
            opacity: 0,
            // ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
        }, {
            duration: 1,
            y: 0,
            opacity: 1,
            // ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
        });


        gsap.fromTo(".text-up-short", {
            duration: 1,
            y: 30,
            ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
        }, {
            duration: 1,
            y: 0,
            ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
        });


        gsap.fromTo(".text-down-header", {
            duration: 1,
            y: -20,
            ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
        }, {
            duration: 1,
            y: 0,
            ease: "back.out(1.7)", // Yumshoq chiqish animatsiyasi
        });
        gsap.fromTo(".text-right-animation", {
            duration: 1,
            x: -30,
            ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
        }, {
            duration: 1,
            x: 0,
            ease: "back.out(1.7)", // Yumshoq chiqish animatsiyasi
        });
        gsap.fromTo(".sclaeUp", {
            duration: 1,
            scale: 0,
            ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
            scrollTrigger: {
                trigger: ".heroRight",
                start: "top top", // Qachon boshlanishi
                end: "top top", // Qachon tugashi
            }
        }, {
            duration: 1,
            scale: 1,
            ease: "back.out(1.7)", // Yumshoq chiqish animatsiyasi
            scrollTrigger: {
                trigger: ".heroRight",
                start: "top top", // Qachon boshlanishi
                end: "top top", // Qachon tugashi
            }
        });
        const tl = gsap.timeline()
        tl.to(".heroBtn", {
            scale: 1,
            duration: 1,
            ease: "back.out(2)", // Yumshoq chiqish animatsiyasi
        }).to(".heroBtn", {
            maxWidth: "210px",
            duration: 1,
        })

        if (windowWidth < 1024) {
            gsap.fromTo(".heroRightImg", {
                scale: 1.5, // Boshlang‘ich holatda katta
                filter: "blur(10px)", // Boshlang‘ichda blur qo‘shish
                scrollTrigger: {
                    trigger: ".heroRight",
                    start: "top top", // Qachon boshlanishi
                    end: "top top", // Qachon tugashi
                }
            }, {
                duration: 1,
                scale: 1, // Boshlang‘ich holatda katta
                filter: "blur(0px)", // Boshlang‘ichda blur qo‘shish
                scrollTrigger: {
                    trigger: ".heroRight",
                    start: "top top", // Qachon boshlanishi
                    end: "top top", // Qachon tugashi
                }
            });


            gsap.fromTo(".text-down_mobile", {
                scale: 0.5, // Boshlang‘ich holatda katta
                opacity: 0,
                scrollTrigger: {
                    trigger: ".heroRight",
                    start: "top top", // Qachon boshlanishi
                    end: "top top", // Qachon tugashi
                }
            }, {
                duration: .5,
                scale: 1, 
                opacity: 1,
                scrollTrigger: {
                    trigger: ".heroRight",
                    start: "top top", // Qachon boshlanishi
                    end: "top top", // Qachon tugashi
                }
            });

            gsap.fromTo(".text-up-short", {
                duration: 1,
                y: 30,
                x: -30,
                scrollTrigger: {
                    trigger: ".heroRight",
                    start: "top top", // Qachon boshlanishi
                    end: "top top", // Qachon tugashi
                }
            }, {
                duration: 1,
                y: 0,
                x: 0,
                scrollTrigger: {
                    trigger: ".heroRight",
                    start: "top top", // Qachon boshlanishi
                    end: "top top", // Qachon tugashi
                }
            });
        }



        return () => window.removeEventListener("resize", handleResize);
    }, [])

    // gsap.from(boxRef.current, {
    //     opacity: 0,
    //     x: -100,
    //     duration: 1.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: boxRef.current,
    //       start: "top 80%", // Qachon boshlanishi
    //       end: "top 50%", // Qachon tugashi
    //       scrub: 1, // Skroll bo‘yicha moslashish
    //     },
    //   });

    return (
        <section className="bg-white h-screen max-lg:h-auto">
            <div className="max-w-[1420px] mx-auto px-5 flex max-md:px-0 max-lg:flex-col items-center gap-10  h-full">
                {/* left */}
                <div className="pl-[30px] max-lg:pl-0 w-full max-md:px-5 max-w-[640px] h-full py-7 max-lg:h-screen flex flex-col">
                    <div className="flex items-center">
                        <img src={site_logo} alt="Site logo" className="max-w-[128px] w-full text-down-header" />

                        <button className="ml-auto mr-2 text-down-header">
                            <img src={map} alt="map" />
                        </button>
                        <button className="text-down-header">
                            <img src={hamburger} alt="hamburger" />
                        </button>
                    </div>
                    <div className="my-auto">
                        <p className="font-normal font_400 text-lg text-black text-center mb-3 text-down">Building Your Dreams</p>
                        <h1 className="text-up  font-normal  leading-[120%] font_400 text-[56px] max-md:text-5xl max-md:max-w-[433px] max-sm:text-4xl max-[375px]:text-3xl mx-auto text-center max-w-[581px]">
                            Real Estate in Dubai:
                            Ideal for Living and
                            Investing
                        </h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="bg-[#141414] rounded-[80px] text-nowrap heroBtn max-md:mx-auto p-1 overflow-hidden scale-0 max-w-12 max-h-12 flex items-center gap-2.5 font-normal text-lg text-white pr-5">
                            <span className="bg-[#D5E7EE] rounded-full p-[9px]">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7686 4.63148C13.6571 4.80449 14.4736 5.23817 15.1136 5.87702C15.7537 6.51586 16.1882 7.33081 16.3616 8.21756M12.7686 1C14.6145 1.20467 16.3357 2.02968 17.6498 3.33959C18.9639 4.64949 19.7926 6.36643 20 8.20848M19.0904 15.4533V18.1769C19.0914 18.4297 19.0395 18.68 18.938 18.9117C18.8366 19.1433 18.6877 19.3513 18.501 19.5222C18.3144 19.6932 18.094 19.8233 17.854 19.9043C17.614 19.9853 17.3597 20.0154 17.1074 19.9926C14.3084 19.6891 11.6198 18.7345 9.25753 17.2055C7.05976 15.8116 5.19643 13.9518 3.79988 11.7583C2.26262 9.38981 1.30596 6.69324 1.00738 3.88702C0.984652 3.63597 1.01455 3.38294 1.09516 3.14405C1.17578 2.90515 1.30534 2.68563 1.47562 2.49946C1.64589 2.31328 1.85314 2.16453 2.08417 2.06268C2.3152 1.96083 2.56494 1.90811 2.8175 1.90787H5.54633C5.98777 1.90353 6.41572 2.05956 6.75043 2.34685C7.08514 2.63415 7.30376 3.03313 7.36554 3.46941C7.48072 4.34102 7.69432 5.19683 8.00227 6.02052C8.12465 6.34547 8.15114 6.69862 8.07859 7.03813C8.00604 7.37764 7.83751 7.68928 7.59295 7.93612L6.43774 9.08912C7.73262 11.362 9.61815 13.2439 11.8954 14.5363L13.0506 13.3833C13.2979 13.1392 13.6101 12.971 13.9503 12.8986C14.2905 12.8262 14.6443 12.8527 14.9699 12.9748C15.7951 13.2822 16.6526 13.4954 17.5259 13.6103C17.9677 13.6725 18.3713 13.8947 18.6597 14.2345C18.9482 14.5743 19.1015 15.008 19.0904 15.4533Z" stroke="#141414" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            Contact Us Now
                        </button>
                        <div className="flex items-center gap-4 max-md:hidden ">
                            <p className="font-normal font_400 text-sm text-black max-w-[89px] text-right-animation">Explore All Our Properties</p>
                            <div className="relative sclaeUp">
                                <span className="absolute top-0 right-0 p-[7px] bg-[#D5E7EE] rounded-full">
                                    <img src={topArrpow} alt="top arrow" />

                                </span>
                                <img src={cityRound} alt="city" className="max-w-[70px] w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="w-full max-w-[710px] h-full flex flex-col max-lg:h-screen p-[30px] relative rounded-4xl overflow-hidden heroRight">
                    <div className="flex items-center relative z-20 mb-auto">
                        <p className="mr-[57px] max-w-[179px] font-medium font_500 max-md:hidden text-white text-lg leading-5 text-down">More than 1500 real estate properties</p>
                        <p className="mr-auto max-w-[179px] font-medium font_500 max-md:hidden text-white text-lg leading-5 text-down">From $145,000 with a yield of 10% per annum</p>
                        <div className="flex items-center max-md:ml-auto gap-2 text-down text-down_mobile">
                            <button className="w-[46px] h-[46px] flex text-white hover:text-black items-center justify-center border border-white rounded-[8px] hover:bg-white transition-all duration-300">
                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3036 2.69641C20.766 2.1586 20.1278 1.73197 19.4253 1.44089C18.7228 1.14982 17.9699 1 17.2095 1C16.4491 1 15.6961 1.14982 14.9936 1.44089C14.2912 1.73197 13.6529 2.1586 13.1153 2.69641L11.9997 3.81203L10.8841 2.69641C9.79827 1.61058 8.32556 1.00056 6.78997 1.00056C5.25437 1.00056 3.78167 1.61058 2.69584 2.69641C1.61001 3.78224 1 5.25494 1 6.79053C1 8.32613 1.61001 9.79883 2.69584 10.8847L3.81147 12.0003L11.9997 20.1885L20.188 12.0003L21.3036 10.8847C21.8414 10.3471 22.268 9.70885 22.5591 9.00636C22.8502 8.30388 23 7.55093 23 6.79053C23 6.03013 22.8502 5.27718 22.5591 4.5747C22.268 3.87222 21.8414 3.23396 21.3036 2.69641Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </button>
                            <button className="w-[46px] h-[46px] flex text-white hover:text-black items-center justify-center border border-white rounded-[8px] hover:bg-white transition-all duration-300">
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 20.4697H21" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.94922 20.47L1.99922 8.44C1.99922 7.83 2.28922 7.25 2.76922 6.87L9.76922 1.42C10.4892 0.86 11.4992 0.86 12.2292 1.42L19.2292 6.86C19.7192 7.24 19.9992 7.82 19.9992 8.44V20.47" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="round" />
                                    <path d="M9 14.7197V16.2197M9.5 5.96973H12.5M14.5 9.46973H7.5C6.67 9.46973 6 10.1397 6 10.9697V20.4697H16V10.9697C16 10.1397 15.33 9.46973 14.5 9.46973Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <img src={heroRight} alt="Dubai" className="heroRightImg scale-150 absolute w-full h-full top-0 left-0 object-cover object-center" />
                    <div className="flex items-center justify-between relative z-20">
                        <p className="mr-[57px] max-w-[179px] text-up-short font-medium font_500 md:hidden  text-white text-lg leading-5">More than 1500 real estate properties</p>
                        <button className=" bg-white sclaeUp rounded-[20px] max-md:min-w-[145px] px-5 py-4 max-w-[167px] max-md:textsm max-md:py-2.5 max-md:px-4 max-md:rounded-[10px] ml-auto flex items-center gap-5 text-left font-normal font_400 text-base leading-5 ">
                            catalog download
                            <img src={download} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero