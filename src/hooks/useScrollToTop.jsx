import React, { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>useScrolltoTop</div>;
};

export default useScrollToTop;
