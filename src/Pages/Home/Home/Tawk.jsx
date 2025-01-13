import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/6782735e49e2fd8dfe060e74/1ihap5ajg';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // Optional: Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;  // This component doesn't render anything to the UI
};

export default TawkToChat;
