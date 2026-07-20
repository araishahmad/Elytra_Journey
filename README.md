# Week 4 — Services Layer, Hooks, React Query & Zustand

Building on the week 3 dashboard: moving API calls into a services layer, replacing repeated fetch logic with custom hooks and React Query, connecting to a real API, and adding global state with Zustand.

## Learning

**Services layer** — why API calls shouldn't live inside components. Open the week 3 dashboard, find every direct `fetch`/`axios` call inside a component, and count them. That count is how many files you'd have to touch if the API URL changed tomorrow — the problem a services layer solves. One file owns all API calls; everything else just uses it.

**Custom hooks** — pulling repeated logic out of components. Build `useFetch(url)` to handle loading/error/data in one place. Build `useDebounce(value, delay)` for inputs like search that shouldn't fire on every keystroke. Note what problem each hook solves.

**React Query** — why `useEffect` + `fetch` isn't enough for real apps (no caching, no retry, no background refetch, no loading state management). Build a `useQuery` example fetching a list of users and confirm caching works — navigate away and back, no second request. Build a `useMutation` example to post one item. Note what you'd have to build yourself to match this with plain `useEffect`.

**Firebase** — Firebase Authentication and Firestore.

**Zustand** — simpler than Context API for complex state. Build a store with a logged-in user, a light/dark theme, and a notification list (add/remove). Use it in 3 different components with no prop passing. Note when you'd reach for Zustand over Context, with a real example from the week 3 dashboard.

## Build

1. **Create a services layer** — move all API calls out of components into one place.
2. **Replace repeated fetch logic with `useFetch`** across all components. Components should only call the hook and render the result — display only, not fetching logic. Compare line counts before/after.
3. **Add `useDebounce` to the search input** — stop firing a request on every keystroke.
4. **Replace all `useEffect` fetching with React Query's `useQuery`** — sensible keys (`['users']`, `['expenses', userId]`), loading/error state from React Query instead of local `useState`. Verify caching: navigate away and back, no extra request.
5. **Connect the dashboard to a real public API** (JSONPlaceholder, OpenWeather, etc.) instead of hardcoded data. Services layer calls the real endpoint, React Query caches and manages it. Real loading states, real error messages — no blank screen or crash if the API is down.
6. **Add a Zustand store for global UI state** — current user, theme, notifications. Theme toggle actually changes the UI. Notification count shown as a navbar badge. No prop passing.

## Review & Wrap-up

- **Code review your own week 3 and 4 code.** Find at least 5 specific issues — repeated logic that should be a hook, a component doing too much, a missing TypeScript type, an unhandled error state, a hardcoded value that should be a constant. Write down each issue, the fix, and why.
- **Write the week 4 improvement doc** — what changed, why, and what you'd do differently.

## Reference

Claude Courses: *AI Fluency: Framework & Foundations*