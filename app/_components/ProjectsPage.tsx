"use client";
import React from "react";
import Projects from "./Projects";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const ProjectsPage = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <motion.div
        transition={{ type: "tween", ease: "easeOut", duration: 0.01 }}
        ref={ref}
        className="fixed z-50 pointer-events-none  opacity-0 w-[100px] h-[100px] border-solid border-1	 border-[rgb(126,117,189)] 	  rounded-[50%] "
        style={{ x, y }}
      />
      <Projects />
    </>
  );
};

export default ProjectsPage;
