import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      const blobWidth = element.offsetWidth / 2;
      const blobHeight = element.offsetHeight / 2;

      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      const x = clientX - element.offsetLeft - blobWidth + scrollX;
      const y = clientY - element.offsetTop - blobHeight + scrollY;
      setPoint({ x, y });
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  return point;
}
