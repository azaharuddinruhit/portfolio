React Hooks have revolutionized the way we write React applications. They allow us to use state and other React features without writing a class.

## The Core Hooks

1. `useState`: Manage state within functional components.
2. `useEffect`: Perform side effects (like data fetching or DOM manipulation).
3. `useContext`: Consume context easily.

### Example: Custom Hook

Here is a simple custom hook for tracking window size:

```javascript
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}
```

Hooks make code more reusable and readable!
