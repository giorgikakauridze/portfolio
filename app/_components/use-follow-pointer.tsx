import { RefObject, useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint);
  const y = useSpring(yPoint);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, xPoint, yPoint]);

  return { x, y };
}
