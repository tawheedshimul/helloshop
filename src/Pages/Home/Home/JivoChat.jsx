import React, { useEffect } from "react";

const JivoChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/jZxwZhsVUd";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render any visible elements
};

export default JivoChat;
