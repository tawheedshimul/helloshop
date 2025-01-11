import { useEffect } from "react";

const TawkToChat = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/6782a90449e2fd8dfe06208b/1ihb68f79';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
     
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return null; // This component doesn't need to render anything itself.
  };
  



  
  export default TawkToChat;