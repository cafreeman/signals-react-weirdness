### To reproduce

```
pnpm i
pnpm dev
open http://127.0.0.1:5173/stopwatch
```

Observe that the clock doesn't update

Go to `Stopwatch.tsx` and replace line 15 with line 16 (comment/uncomment), then observe that the clock now updates.
