"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const PaperParticle = ({
  x,
  y,
  rotate,
  color,
}: {
  x: number;
  y: number;
  rotate: number;
  color: string;
}) => (
  <motion.div
    className="absolute"
    style={{
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 20 + 10}px`,
      backgroundColor: color,
    }}
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{
      opacity: [1, 1, 0],
      scale: [1, 1.5, 0.8],
      x,
      y,
      rotate,
    }}
    transition={{
      duration: 3,
      ease: "easeOut",
    }}
  />
);

export default function Home() {
  const [status, setStatus] = useState<number>(1);
  const [isVerify, setIsVerify] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<number>(0);
  const [particles, setParticles] = useState<
    { x: number; y: number; rotate: number; color: string }[]
  >([]);
  const ref = useRef<HTMLInputElement | null>(null);
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();
  const control6 = useAnimation();
  const control7 = useAnimation();
  const control8 = useAnimation();
  const control9 = useAnimation();
  const control10 = useAnimation();
  const control11 = useAnimation();
  const control12 = useAnimation();

  const getRandomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`;

  const createConfetti = () => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 800 - 400,
      y: Math.random() * 800 - 400,
      rotate: Math.random() * 360,
      color: getRandomColor(),
    }));
    setParticles(newParticles);
  };

  const onConnectWallet = () => {
    setStatus(2);

    control1.start({
      bottom: -370,
      opacity: [1, 0.4, 1],
      transition: {
        bottom: { duration: 0.8, ease: "easeInOut" },
        opacity: { times: [0, 0.5, 1], duration: 0.8, ease: "linear" },
      },
    });

    control11.start({
      clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
      transition: { duration: 0.8 },
    });

    control12.start({
      clipPath: "polygon(1.2% 1.2%, 98.8% 1.2%, 85% 98.8%, 15% 98.8%)",
      transition: { duration: 0.8 },
    });

    control9.start({
      clipPath: "polygon(1.3% 1.3%, 98.7% 1.3%, 85% 98.7%, 15% 98.7%)",
      transition: { duration: 0.8 },
    });
  };

  const onFocusInput = () => {
    if (ref.current?.value === "AbCdEfG") {
      console.log(ref.current?.value);
      control3
        .start({
          background: "#cbb6fc",
          transition: {
            duration: 0.2,
          },
        })
        .then(() => {
          control3.start({ background: "#9063f8" });
        });
      return;
    }
    if (ref.current) {
      ref.current.value = "AbCdEfG";
    }
  };

  const handleVerify = () => {
    if (ref.current?.value === "") {
      control2
        .start({
          background: "red",
          opacity: [1, 0, 1, 0, 1],
          transition: {
            duration: 1,
            repeat: 0,
            ease: "easeInOut",
          },
        })
        .then(() => {
          control2.start({ background: "#1D1C21" });
        });
      return;
    }
    if (isVerify == 1) {
      setIsVerify(2);
      control7.start({ width: 60, background: "#2C2C2C" });
      setTimeout(() => {
        control8.start({ background: "#00ff00" });
        setIsVerify(3);
        setTimeout(() => {
          control1.start({
            bottom: -100,
            opacity: [1, 0.4, 1],
            transition: {
              bottom: { duration: 0.8, ease: "easeInOut" },
              opacity: { times: [0, 0.5, 1], duration: 0.8, ease: "linear" },
            },
          });

          control11.start({
            clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
            transition: { duration: 0.8 },
          });

          control12.start({
            clipPath: "polygon(1.2% 2%, 98.8% 2%, 95% 98.8%, 5% 98.8%)",
            transition: { duration: 0.8 },
          });

          control9.start({
            clipPath: "polygon(1.3% 2.1%, 98.7% 2.1%, 95% 98.7%, 5% 98.7%)",
            transition: { duration: 0.8 },
          });

          control10
            .start({ height: 225.92, transition: { duration: 0.5 } })
            .then(() => {
              control10
                .start({ height: 226, transition: { duration: 2.5 } })
                .then(() => {
                  control10.start({
                    height: 305.98,
                    transition: { duration: 1 },
                  });
                });
            });
          setIsSuccess(1);
          createConfetti();
          setTimeout(() => {
            setIsSuccess(2);
          }, 4000);
        }, 500);
      }, 2000);
      return;
    }
    if (isVerify === 0) {
      control4.start({
        height: 829.56,
      });
      control5.start({
        height: 406.15,
      });
      control6.start({
        height: 196,
      });
      setIsVerify(1);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-[#1d1c21] overflow-hidden"
      style={{ backgroundImage: `url('./images/Dots.png')` }}
    >
      <div
        className="relative w-full h-full justify-center items-center bg-cover z-50"
        style={{ backgroundImage: `url('./images/Background.png')` }}
      >
        <motion.div
          className={`flex flex-col items-center w-[1096.5px] ${
            status === 1 ? "h-[753.56px]" : "h-[809.56px]"
          } pt-[115.65px] mr-auto ml-auto gap-[60px] z-50`}
          animate={control4}
        >
          <div className="flex flex-col items-center w-[1096.5px] h-[247.76px] gap-[60px] z-10">
            <div className="w-[330.61px] h-[68.69px] gap-[117.38px]" />
            <div className="flex flex-col w-[1096.5px] h-[119.06px] gap-[40px] items-center">
              <p
                className={`font-aeonik w-[500px] text-[24px] leading-[27.6px] tracking-[0.05em] text-center ${
                  isSuccess === 0 ? "text-normal" : "text-active"
                }`}
              >
                {isSuccess === 0
                  ? "Connect your wallet to access."
                  : "Success!"}
              </p>
              {isSuccess === 0 ? (
                <button
                  className={`w-[219px] h-[51.06px] rounded-[8.51px] pt-[12.77px] pr-[35px] pb-[12.77px] pl-[35px] text-active ${
                    status === 2
                      ? "bg-normal cursor-not-allowed"
                      : "bg-[#9063F8] hover:ring-[6px] hover:ring-[#70420b] transition-all duration-200"
                  }`}
                  onClick={onConnectWallet}
                >
                  Connect Wallet
                </button>
              ) : (
                <p className="w-[741px] h-[28px] font-aeonik font-[500] text-[24px] leading-[27.6px] tracking-[0.05em] text-center text-normal">
                  Thanks!
                </p>
              )}
            </div>
          </div>
          <div className="relative">
            <motion.div
              className={`relative flex flex-col w-[450px] ${
                status === 1 ? "h-[330.15px]" : "h-[386.15px]"
              } rounded-[8px] border-[2px] border-[#28272C] p-[40px] gap-[40px] bg-[#111015] z-20`}
              animate={isVerify === 2 ? control10 : control5}
            >
              <div className="w-[370px] h-[46px] gap-[48px]">
                <p className="w-[370px] h-[48px] font-aeonik font-[400] text-[20px] leading-[23px] tracking-[0.02em] text-center text-normal">
                  {isSuccess === 0
                    ? "Have an invitation code? Follow the steps bellow."
                    : "All done! Simply launch the App to start using it"}
                </p>
              </div>
              {isSuccess === 0 ? (
                <div className="relative flex flex-col w-[330.09px] h-[164.15px] gap-[28.55px]">
                  <motion.div
                    className={`absolute w-[0] ${
                      status === 1 ? "h-[126.16px]" : "h-[176px]"
                    } border-[3.57px] border-step_bg top-[19.6px] left-[14.4px] z-0`}
                    animate={control6}
                  />
                  {status === 2 && (
                    <div
                      className={`absolute w-[0] h-[56.2px] border-[3.57px] border-step_bg top-[19.6px] left-[14.4px] z-10 border-[#27CD2D]`}
                    />
                  )}
                  <div className="flex w-[330.09px] h-[35.69px] gap-[21.41px] z-10">
                    <div
                      className={`flex justify-center w-[35.69px] h-[35.69px] rounded-[71.37px] border-[0.71px] border-[0] gap-[5.71px] ${
                        status === 2 ? "bg-step_bg_active" : "bg-step_bg"
                      }`}
                    >
                      <p
                        className={`flex items-center justify-center w-[17.13px] h-[35.69px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] text-center ${
                          status === 1 ? "text-active" : "text-normal"
                        }`}
                      >
                        {status === 1 ? (
                          "1"
                        ) : (
                          <IoCheckmarkOutline color="white" size={30} />
                        )}
                      </p>
                    </div>
                    <div className="w-[254.26px] h-[21px] gap-[4.46px] mt-auto mb-auto">
                      <p
                        className={`w-[125px] h-[21px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] ${
                          status === 1
                            ? "text-active"
                            : "text-normal line-through"
                        }`}
                      >
                        Connect Wallet
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col z-20 gap-[21.41px]">
                    <div className="flex w-[330.09px] h-[35.69px] gap-[21.41px] z-10">
                      <motion.div
                        className="flex justify-center w-[35.69px] h-[35.69px] rounded-[71.37px] border-[0.71px] border-[0] gap-[5.71px] bg-step_bg"
                        animate={control8}
                      >
                        <p
                          className={`flex items-center justify-center w-[17.13px] h-[35.69px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] text-center ${
                            status === 2 ? "text-active" : "text-normal"
                          }`}
                        >
                          {isVerify === 3 ? (
                            <IoCheckmarkOutline color="white" size={30} />
                          ) : (
                            "2"
                          )}
                        </p>
                      </motion.div>
                      <div className="w-[254.26px] h-[21px] gap-[4.46px] mt-auto mb-auto">
                        <p
                          className={`w-[254.26px] h-[21px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] ${
                            status === 2 ? "text-active" : "text-normal"
                          }`}
                        >
                          Enter your invitation code
                        </p>
                      </div>
                    </div>
                    {status === 2 && (
                      <div>
                        <div className="flex w-[369px] h-[48px] pr-[57px] pl-[57px] z-10">
                          <motion.input
                            ref={ref}
                            className="w-[177px] h-[48px] rounded-tl-[8px] rounded-bl-[8px] bg-input_bg pr-[16px] pl-[16px] border-none"
                            placeholder="Invitation code"
                            autoFocus
                            onClick={onFocusInput}
                            animate={control2}
                          />
                          <motion.button
                            className="w-[78px] h-[48px] rounded-tr-[8.51px] rounded-br-[8.51px] bg-[#9063F8] pt-[12.77px] pr-[18px] pb-[12.77px] pl-[18px] gap-[8.51px]"
                            onClick={handleVerify}
                            animate={
                              isVerify === 1
                                ? control7
                                : isVerify === 2
                                ? control8
                                : control3
                            }
                          >
                            {isVerify === 3 ? (
                              <IoCheckmarkOutline color="white" size={30} />
                            ) : isVerify === 2 ? (
                              <motion.div
                                className="w-[24px] h-[24px] border-2 border-t-transparent border-[#fffff] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            ) : (
                              "Verify"
                            )}
                          </motion.button>
                        </div>
                        {isVerify === 1 && (
                          <p className="w-[230px] h-[12px] text-[#FB4E4E] ml-[57px]">
                            Invite invalid or already claimed.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex w-[330.09px] h-[35.69px] gap-[21.41px] z-10">
                    <div className="flex justify-center w-[35.69px] h-[35.69px] rounded-[71.37px] border-[0.71px] border-[0] gap-[5.71px] bg-step_bg">
                      <p
                        className={`flex items-center justify-center w-[17.13px] h-[35.69px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] text-center ${
                          status === 3 ? "text-active" : "text-normal"
                        }`}
                      >
                        3
                      </p>
                    </div>
                    <div className="w-[254.26px] h-[21px] gap-[4.46px] mt-auto mb-auto">
                      <p
                        className={`w-[125px] h-[21px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] ${
                          status === 3 ? "text-active" : "text-normal"
                        }`}
                      >
                        You are in!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-[330.09px] h-[35.69px]" />
                  <div className="flex w-[330.09px] h-[35.69px] gap-[21.41px]">
                    <div
                      className={`flex justify-center w-[35.69px] h-[35.69px] rounded-[71.37px] border-[0.71px] border-[0] gap-[5.71px] ${
                        status === 2 ? "bg-step_bg_active" : "bg-step_bg"
                      }`}
                    >
                      <p
                        className={`flex items-center justify-center w-[17.13px] h-[35.69px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] text-center ${
                          status === 1 ? "text-active" : "text-normal"
                        }`}
                      >
                        <IoCheckmarkOutline color="white" size={30} />
                      </p>
                    </div>
                    <div className="w-[254.26px] h-[21px] gap-[4.46px] mt-auto mb-auto">
                      <p
                        className={`w-[125px] h-[21px] font-aeonik font-[500] text-[17.84px] leading-[20.52px] text-active`}
                      >
                        You are in!
                      </p>
                    </div>
                  </div>
                  {isSuccess === 2 && (
                    <button className="w-[370px] h-[51.06px] rounded-[8.51px] pt-[12.77px] pr-[35px] pb-[12.77px] pl-[35px] bg-[#9063f8] mt-[29px]">
                      Launch App
                    </button>
                  )}
                </div>
              )}
            </motion.div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              {particles.map((particle, index) => (
                <PaperParticle
                  key={index}
                  x={particle.x}
                  y={particle.y}
                  rotate={particle.rotate}
                  color={particle.color}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="fixed w-[1264.92px] h-[685.74px] bottom-[-500px] left-1/2 -translate-x-1/2 z-0"
        animate={control1}
      >
        <motion.div
          className="relative w-full h-full bg-gradient-to-r from-opacity_orange to-opacity_pink rounded-3xl clip-mask1"
          animate={control11}
        >
          <motion.div
            className="relative w-full h-full bg-gradient-to-r from-orange to-pink rounded-3xl clip-mask2"
            animate={control12}
          >
            <motion.div
              className="absolute inset-1 clip-content"
              animate={control9}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
