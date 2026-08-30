// hi file custom hook che example aahe?
// Que: what are hooks ?

import { useOnlineStatus } from "./useOnlineStatus";


export function Header() {
  // Direct use kiya!
  const isOnline = useOnlineStatus(); 

  return (
    <h1>{isOnline ? '🟢 Online' : '🔴 Disconnected'}</h1>
  );
}

export function SaveButton() {
  // Wahi hook yahan bhi use kiya!
  const isOnline = useOnlineStatus(); 

  return (
    <button disabled={!isOnline}>
      {isOnline ? 'Save Progress' : 'Connecting...'}
    </button>
  );
}

export default SaveButton