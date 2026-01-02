# 📒 React Daily Notes — Password Generator Project

> Project: Password Generator  
> Focus: React Hooks, State Management, UI Logic

---

## 🔹 useState

- Used to store **UI-related data**
- When state updates → component **re-renders**
- Used in this project for:
  - `password` → generated password
  - `length` → range input value
  - `numberAllowed`, `charAllowed` → checkbox toggles
  - `copied` → copy feedback text

**Rule:**

> If something affects the UI → it should be state

---

## 🔹 useEffect

- Runs code **after render**
- Used for **side effects**
- In this project:
  - regenerate password when inputs change

```js
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed])
Important points:

Must call functions (fn(), not fn)

Dependency array controls when effect runs

Dependencies are for correctness, not optimization

🔹 useCallback

Caches a function between renders

Prevents unnecessary re-creation of functions

Used in this project for:

passwordGenerator

copyPasswordToClipboard

Rule:

Use useCallback when a function depends on state and is reused in effects or props

⚠️ Not always required — don’t overuse.

🔹 useRef

Used to get direct reference to DOM elements

Does not cause re-render

Used here to:

select password text

copy password to clipboard

const passwordRef = useRef(null)
passwordRef.current.select()
passwordRef.current.setSelectionRange(0, 999)


Rule:

DOM access → useRef, not useState

🔹 Clipboard API

Browser feature (not React-specific)

Used to copy text programmatically

navigator.clipboard.writeText(password)

🔹 Conditional Rendering

Render UI based on state

{copied ? "Copied!" : "Copy"}


Used to show copy feedback on button

Rule:

UI = function of state

🔹 Controlled Inputs

Form inputs should be controlled by React state

State is the single source of truth

checked={numberAllowed}
checked={charAllowed}


❌ Avoid:

defaultChecked

🔹 Random Character Logic (JavaScript)

Correct way to generate random index from a string:

Math.floor(Math.random() * str.length)


Why:

Valid string indices → 0 to length - 1

Using +1:

skips index 0

may access str.length → empty character

🧠 Big Picture Learning

React works on State → UI

No manual DOM manipulation

Side effects handled via useEffect

DOM access handled via useRef

UI updates automatically when state changes

🔁 Quick Revision Checklist

UI change? → useState

React to state/props change? → useEffect

Need DOM access? → useRef

Reused function with state? → useCallback

Toggle text / elements? → Conditional Rendering

✅ Project Takeaway

Copying code is fine if you understand why it works

Debugging teaches more than watching tutorials

Rebuilding the project later without a video confirms real learning
```
