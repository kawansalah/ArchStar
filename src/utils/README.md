# Utilities

This folder contains utility functions and helper methods.

## Guidelines

- Keep functions pure when possible
- Add proper TypeScript types
- Write clear, documented code
- Group related utilities in separate files

## Example Structure

```typescript
// formatters.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};
```
