"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLayoutEffect } from "react";

const AosProvider = ({ children }: any) => {
  useLayoutEffect(() => {
    AOS.init({
      duration: 0,
      offset: 0,
    });
  }, []);
  return <>{children}</>;
};

export default AosProvider;
