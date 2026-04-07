Framer Motion is an animation library for React that makes it incredibly simple to add production-ready animations.

## The `motion` Component

Every standard DOM element has a `motion` counterpart. For instance, instead of `<div />`, you use `<motion.div />`.

```jsx
import { motion } from 'framer-motion';

export const MyBox = () => (
  <motion.div animate={{ scale: 1.2 }} />
);
```
