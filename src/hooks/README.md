# Custom Hooks

This folder contains custom React hooks.

## Guidelines

- Hook names should start with "use" (e.g., `useAuth`, `useFetch`)
- Keep hooks focused on a single responsibility
- Export hooks from this folder

## Example Structure

```typescript
// useExample.ts
import { useState, useEffect } from "react";

export const useExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Hook logic
  }, []);

  return { data };
};
```
