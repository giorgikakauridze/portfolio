"use client";
import "../globals.css";
import { ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import CardComponent from "./CardComponent";
import ViewSvg from "../_svgs/ViewSvg";
import GitSvg from "../_svgs/GitSvg";

import { useMyContext } from "../_context/context";
import Link from "next/link";
interface Project {
  id: number;
  name: string;
  description: string;
  siteLink: string;
  gitHubLink: string;
  image: string;
  callStack: ReactNode[];
}
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ project }: { project: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className=" flex gap-10">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <CardComponent image={project.image} sitelink={project.siteLink} />
        </motion.div>
      </div>{" "}
      <span className="flex flex-col gap-10">
        <motion.h2 style={{ y }} className="">
          {project.name}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {" "}
          <motion.div style={{ y }}>
            <div className="flex max-w-96 gap-10">
              {project.callStack.map((Comp, index) => (
                <span key={index}>{Comp}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.div style={{ y }} className="max-w-96">
            {" "}
            {project.description}
          </motion.div>
          <motion.div style={{ y }}>
            <div className="flex w-[150%] gap-10 pt-10">
              <motion.div
                whileHover={{ scale: 0.9 }}
                initial={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-5 hover:opacity-60 transition-all  items-center border-1  rounded-sm px-4 py-3"
                >
                  <ViewSvg />
                  <span className="font-[1000]">View Project</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.93 }}
                initial={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {project.gitHubLink.length > 3 ? (
                  <Link
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-5 hover:opacity-60 transition-all hover:scale-95 items-center border-1 rounded-sm px-4 py-3"
                  >
                    <GitSvg />
                    <span className="font-[1000]">View Source Code</span>
                  </Link>
                ) : null}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </span>
    </section>
  );
}

export default function App() {
  const { projects } = useMyContext();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {projects.map((project) => (
          <>
            <Image key={project.id} project={project} />
          </>
        ))}
      </motion.div>
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

// import React from "react";
// import CardComponent from "./CardComponent";

// const Projects = () => {
//   return (
//     <>
//       <div className="font-[1000] flex-col gap-96 flex items-center text-3xl justify-center ">
//         <CardComponent />
//         <CardComponent />
//         <CardComponent />
//       </div>
//     </>
//   );
// };

// export default Projects;
