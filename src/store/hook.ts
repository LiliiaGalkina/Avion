import { useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useResponsiveEvent = (breakpoint: number) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < breakpoint);
    };

    // Run on initial render
    checkScreenSize();

    // Listen for window resize events
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [breakpoint]);

  return isMobileScreen;
};

