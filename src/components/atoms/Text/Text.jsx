import React from 'react'

export const Text = ({
  children,
  type,
  className: additionalStyle,
}) => {
  switch (type) {
    case "h1":
      return (
        <h1
          className={`font-black uppercase select-none text-[8vw] lg:text-[6vh] xl:text-[8vh] font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40 ${additionalStyle}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`font-brother font-black text-mxl md:text-xl 2xl:text-xxl tracking-tight md:tracking-tightest uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`font-brother font-extrabold text-lg md:text-xlg 2xl:text-xxlg leading-none selection:bg-purple text-tomato ${additionalStyle}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`font-brother font-extrabold text-mmd md:text-md 2xl:text-xmd selection:bg-purple uppercase ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`font-body font-bold text-base md:text-mmd 2xl:text-md selection:bg-purple uppercase ${additionalStyle}`}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`font-brother font-black text-normal text-tomato selection:bg-purple uppercase ${additionalStyle}`}
        >
          {children}
        </h6>
      );
    case "paragraphXL":
      return (
        <p
          className={`font-brother font-medium text-mlg xl:text-md 2xl:text-mxl -tracking-wide selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphLarge":
      return (
        <p
          className={`font-body text-mbase md:text-base 2xl:text-xbase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraph":
      return (
        <p
          className={`font-body font-medium text-normal 2xl:text-base selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphLight":
      return (
        <p
          className={`font-body font-extralight text-base tracking-wider leading-relaxed selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "custom":
    default:
      return <p className={additionalStyle}>{children}</p>;
  }
};
