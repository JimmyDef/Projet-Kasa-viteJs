import { MutableRefObject, useEffect } from "react";

type ContentRefTypes = MutableRefObject<HTMLDivElement | null>;
type IsOpenTypes = boolean;

export const useCollapse = (
  contentRef: ContentRefTypes,
  isOpen: IsOpenTypes
) => {
  useEffect(() => {
    const content = contentRef?.current;
    if (!content) return;

    if (!isOpen) {
      content.style.maxHeight = `${content.scrollHeight}px`;
      const rect = content.getBoundingClientRect();

      const isVisibleInViewport =
        rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isVisibleInViewport) {
        content.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    } else {
      content.style.maxHeight = "0";
    }
  }, [isOpen]);
};
