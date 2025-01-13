import React, { useRef, useState, useEffect } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function TawkToMessage() {
  // Reference to Tawk Messenger
  const tawkMessengerRef = useRef();
  
  // State to manage widget visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to minimize the chat
  const handleMinimize = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.minimize();
    }
  };

  // Function to toggle the visibility of the chat
  const handleToggleChat = () => {
    if (tawkMessengerRef.current) {
      if (isVisible) {
        tawkMessengerRef.current.hide();
      } else {
        tawkMessengerRef.current.show();
      }
      setIsVisible(!isVisible);
    }
  };

  // Event when widget loads
  const onLoad = () => {
    console.log('Tawk.to widget loaded successfully!');
  };

  // Effect to handle any initial setup or side-effects
  useEffect(() => {
    console.log('Component mounted - ready to interact with Tawk.to widget');
    // You can add more initialization logic here

    // Cleanup on component unmount (if needed)
    return () => {
      console.log('Component unmounted - cleaning up');
    };
  }, []);

  // Event handler for when a user starts a chat
  const onChatStarted = () => {
    console.log('Chat started!');
  };

  return (
    <div className="App">
      <h1>Welcome to Our Website</h1>
      
      {/* Button to Minimize Chat */}
      <button onClick={handleMinimize}>Minimize the Chat</button>
      
      {/* Button to Toggle Chat Visibility */}
      <button onClick={handleToggleChat}>
        {isVisible ? 'Hide' : 'Show'} the Chat
      </button>

      {/* Tawk Messenger React Component */}
      <TawkMessengerReact
        propertyId="6782735e49e2fd8dfe060e74"
        widgetId="1ihap5ajg"
        ref={tawkMessengerRef}
        onLoad={onLoad}
        onChatStarted={onChatStarted}  // Adding a custom event listener (if supported)
      />
    </div>
  );
}

export default TawkToMessage;
