# Week 2 — JS/TS Fundamentals & Expense Tracker Foundations

Curriculum for Week 2 of the frontend internship, covering core JavaScript/TypeScript concepts and laying the groundwork for the Expense & Budget project.

## Tasks

### WK2-01 — Data types, variables, and operators
Cover primitives, type coercion, `var` vs `let` vs `const`. Write small exercises — predict output before running.

### WK2-02 — Arrays and objects — methods and reference vs value
Cover primitives, type coercion, `var` vs `let` vs `const`. Write small exercises — predict output before running.

### WK2-03 — Functions — scope, closures, and arrow functions
Function declarations vs expressions vs arrow. Block scope vs function scope. Write a closure counter from scratch.

### WK2-04 — OOP — classes, inheritance, encapsulation
Write throwaway classes (`Animal`, `BankAccount`). Practice constructor, methods, `extends`, and private fields (`#`). No project code yet.

### WK2-05 — Async patterns — callback, promise, async/await
Write the same fake API call three ways. Add error handling to each. Understand why each pattern exists — one line explanation per version.

### WK2-06 — TypeScript basics — types, interfaces, why it matters
Add types to Wednesday's exercises. Break one on purpose — read the error. Understand TS as a thinking tool, not just syntax.

### WK2-07 — Design the Expense and Budget data model on paper
Sketch both classes, their properties, and how they relate. Answer: why two classes? Design before any project code.

### WK2-08 — Build Expense + Budget classes in TypeScript
Implement the design from WK2-07. Validation, typed errors, `isOverBudget()`, `getRemainingBudget()`. No UI yet.

### WK2-09 — Build offline storage — localStorage save, sync when back online
`StorageService` class using async/await. Queue expenses offline, sync on `window` online event. Test it with DevTools network throttle.

### WK2-10 — Wire a minimal UI — form, filter, budget display
Vanilla DOM only. Add expense form, category filter, overspend indicator. All interactions go through the classes — no inline logic.

### WK2-11 — Short decision doc — what is used and why
Half a page. Why `Expense` and `Budget` are separate. Why async/await over callbacks. What breaks first at scale.

### WK2-12 — Think: 1 million expenses — what breaks and what replaces it
No code. Half a page. `localStorage` → what? In-memory arrays → what? Bring it to the next session ready to defend it.