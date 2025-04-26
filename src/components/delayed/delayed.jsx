// components/Delayed.js
'use client';

import { useEffect, useState } from 'react';

export default function Delayed({ children }) {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const delay = () => new Promise((res) => setTimeout(res, 10000)); // 10 sec delay
    delay().then(() => setResolved(true)); // Once the delay is done, set the state
  }, []);

  if (!resolved) {
    return null; // Return nothing until resolved (acts as the fallback)
  }

  return children; // Once resolved, render the children
}
