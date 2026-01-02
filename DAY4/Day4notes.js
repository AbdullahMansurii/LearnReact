//todo useCallback hook: it lets u cache a function definition between re-renders.
//todo useEffect hook: it lets u perform side effects in function components
// todo useRef hook: kisi bhi chiz ka mujhe reference lena hota hai tab useRef hook ka use karenge
//todo Conditionl Rendering: it lets u conditionally render content
//* {copied?'Copied':'Copy'}

/*
 * React Notes — Password Generator Project

! 🔹useState
Used to store UI-related data
When state updates → component re-renders
todo Used in this project for:
password → generated password
length → range input value
numberAllowed, charAllowed → checkbox toggles
copied → copy feedback text
todo Rule:
If something affects the UI → it should be state

!🔹 useEffect
Runs code after render
Used for side effects
todo In this project:
regenerate password when inputs change
useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed])
todo Important points:
Must call functions (fn(), not fn)
Dependency array controls when effect runs

!🔹 useCallback
Caches a function between renders
Prevents unnecessary re-creation of functions
todo Used for:
passwordGenerator
copyPasswordToClipboard
todo Rule:
Use when a function depends on state and is reused (effects / props)

!🔹 useRef
Used to get reference to DOM elements
Does not cause re-render
todo Used here to:
select password text
copy password to clipboard
const passwordRef = useRef(null)
passwordRef.current.select()
todo Rule:

DOM access → useRef, not useState

🔹 Clipboard API

Browser feature (not React-specific)

Used to copy text programmatically

navigator.clipboard.writeText(password)

🔹 Conditional Rendering

Render UI based on state

{copied ? "Copied!" : "Copy"}


Used to show copy feedback

Rule:

UI = function of state

🔹 Random Character Logic (JavaScript)

Correct way to generate random index:

Math.floor(Math.random() * str.length)


Why:

Valid indices → 0 to length - 1

+1 causes skipped characters and empty values

🔹 Controlled Inputs

React should control form elements

checked={numberAllowed}


❌ Avoid:

defaultChecked


Rule:

React state should be the single source of truth

🧠 Key Takeaways

State drives UI

Effects handle side logic

Refs handle DOM access

Conditional rendering controls UI flow

Avoid copying blindly — understand why

🔁 Quick Revision Checklist

UI change? → useState

React to state change? → useEffect

DOM access? → useRef

Reused function with state? → useCallback

Toggle text / elements? → conditional rendering
 */