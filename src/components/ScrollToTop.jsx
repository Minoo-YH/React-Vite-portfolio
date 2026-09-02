import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = decodeURIComponent(hash.replace("#", ""));

      const scrollToElement = () => {
        const element = document.getElementById(elementId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      const timeoutId = window.setTimeout(scrollToElement, 50);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return undefined;
  }, [pathname, hash]);

  return null;

}
