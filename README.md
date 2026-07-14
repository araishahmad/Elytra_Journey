# Week 3 Tasks

- [ ] Understand why React exists — what problem it solves

- [ ] Learn JSX, props, and functional components
  - Build 5 small throwaway components: Button, Card, Badge, UserAvatar, PriceTag. Each takes props and renders something. No state — just props in, UI out.

- [ ] Learn useState and useEffect
  - useState: counter, toggle, form input (isolated)
  - useEffect: log on mount, run on value change, one with cleanup
  - Note next to each: when would I actually need this in a real app?

- [ ] Learn lists, conditional rendering, and keys
  - Render 10 hardcoded products
  - Show "No results" when list is empty
  - Add filter button (items above a price)
  - Understand why React needs a key on each list item

- [ ] Learn React Router v6 — pages, navigation, URL params, protected routes
  - Build Home, About, Product detail (/product/:id)
  - Navigate between pages, read :id from URL
  - Add Profile page that redirects to login if no user is stored

- [ ] TypeScript in React — props, state, and event handlers

- [ ] Design the component tree
  - Draw the dashboard: Navbar, Sidebar, StatsCard, Table, Chart
  - For each: own state or props?
  - Draw data flow arrows
  - Answer: if the user filter changes, which components re-render and why?

- [ ] Build the dashboard layout
  - Navbar, Sidebar, 3 stats cards, hardcoded data, Tailwind
  - Every component in its own file, props typed, no logic inside JSX
  - Responsive layout — sidebar collapses on mobile

- [ ] Connect dashboard to a real API
  - Replace hardcoded data with a real API call (JSONPlaceholder or similar)
  - Loading, error, and success states — never skip any

- [ ] Add filtering and search to the dashboard table
  - Search input + category dropdown above table
  - Filtering updates stats cards too
  - Understand: shared state goes at the closest common parent

- [ ] Write component design doc
  - Half a page: every component, what it does, props, owns/receives state
  - Answer: what breaks if all state is in one top-level component?
  - Answer: what breaks if every component has its own state?

- [ ] Re-rendering and re-fetching