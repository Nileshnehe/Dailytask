// hi file custom hook che example aahe?
// Que: what are hooks ?

import { useState, useEffect } from 'react';

// Custom Hook hamesha 'use' se shuru hota hai
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup function
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Ye hook sirf ek true/false value return karta hai
  return isOnline; 
}

