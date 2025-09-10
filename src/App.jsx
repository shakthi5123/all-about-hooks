// Learning all about React Hooks
// What are Hooks?
// Hooks = special functions in React that let you use state, lifecycle, context, refs in functional components.
// Rules:
// 	1.	Only call hooks at the top level (not inside loops/conditions).
// 	2.	Only call hooks inside React functions (components or custom hooks).

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0); //useState is a Hook that lets you add state to functional components.

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )
// }

// export default App


// useEffect ( Side Effects )
// Concept:
// 	•	Runs code after render (like lifecycle methods).
// 	•	Use for: API calls, timers, event listeners.

// the syntax of useEffect is :
// useEffect(() => {
//  //side effect code runs here   
// }, [])

// import { useState, useEffect } from "react";

// function App() {
//   const [seconds, setSeconds] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => setSeconds(s => s + 1), 1000)
//     return () => clearInterval(interval) //cleanup function to avoid memory leaks
//   }, [])
//   return <h2>Time: {seconds}s</h2>;
// }

// export default App

// useRef (References)
// Concept:
// 	•	Keeps a mutable value that doesn’t cause re-renders.
// 	•	Can also be used to access DOM elements.

// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null); //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

//   return (
//     <div>
//       <input ref={inputRef} placeholder="Type here...." />
//       <button onClick={() => inputRef.current.focus()}>Focus Input</button>
//     </div>
//   )

// }

// export default App; 


//useContext (Global State)
// Concept:
// 	•	Access global data without prop drilling.
// 	•	Use for themes, user auth, settings.

// import { createContext, useContext } from "react";

// const ThemeContext = createContext('light'); //default value is 'light'

// function App(){
//   const theme = useContext(ThemeContext); //useContext hook to consume the context value
//   return <h2>Theme: {theme}</h2>;
// }

// export default App(){
//   return (
//     <ThemeContext.Provider value="dark">
//       <App />
//     </ThemeContext.Provider>  
//   )
// }


//useReducer (Advanced State)
// Concept:
// 	•	Alternative to useState for complex logic.
// 	•	Works like Redux (state + reducer + actions).

// import {  useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "inc": return { count: state.count + 1 };
//     case "dec": return { count: state.count - 1 };
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   return(
//     <div>
//       <h2>{state.count}</h2>
//       <button onClick={() => dispatch({ type: "inc" })}>+</button>
//       <button onClick={() => dispatch({ type: "dec" })}>-</button>
//     </div>
//   )
// }

// export default App;

// useMemo (Performance Optimization)
// Concept:
// 	•	Memoizes expensive calculations.
// 	•	Recomputes only when dependencies change.

// import { useState, useMemo } from "react";

// function App({ num }){
//     const result = useMemo(() => {
//         console.log("Calculating...");
//         return num * 1000
//     }, [num]) //dependency array

//     return <h2>Result: {result}</h2>
// }

// export default App;



// useCallback (Function Memoization)
// Concept:
// 	•	Memoizes functions to prevent re-creation on every render.
// 	•	Useful when passing callbacks to optimized child components.

import { useState, useCallback } from "react";
const Button = React.memo(({onClick}) => {
    console.log("Button rendered");
    return <button onClick={onClick}>Click Me</button>;

})


function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);

  return (
    <div>
      <h2>{count}</h2>
      <Button onClick={increment} />
    </div>
  );
}

export default App;