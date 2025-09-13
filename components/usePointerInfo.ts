import { useEffect, useState } from 'react';

export function usePointerInfo() {
  const [hoverCapable, setHoverCapable] = useState(true);
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    const mqHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mqCoarse = window.matchMedia('(pointer: coarse)');
    const update = () => {
      setHoverCapable(mqHover.matches);
      setCoarsePointer(mqCoarse.matches);
    };
    update();
    mqHover.addEventListener('change', update);
    mqCoarse.addEventListener('change', update);
    return () => {
      mqHover.removeEventListener('change', update);
      mqCoarse.removeEventListener('change', update);
    };
  }, []);

  return { hoverCapable, coarsePointer };
}

