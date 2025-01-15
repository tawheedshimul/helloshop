import React, { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function TawkToMessage() {
  const tawkMessengerRef = useRef();


  return (
    <div>
      <TawkMessengerReact
        propertyId="6782735e49e2fd8dfe060e74"
        widgetId="1ihap5ajg"
        ref={tawkMessengerRef}
      />
    </div>
  );
}

export default TawkToMessage;
