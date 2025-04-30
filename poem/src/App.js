// import logo from './logo.svg';
// import './App.css';
// import Counter from './components/Counter';
// import { Poem } from './components/Poem';
// import { Toy } from './components/Toy';
// function App() {
//   return (
//     <div className="App ">
//     {/* <Counter/> */}
//     {/* <Poem/> */}
//     <Toy/>
//     </div>
//   );
// }

// export default App;

// // import MoodSwitch from "./components/MoodSwitch";


// // function App() {
// //   return (
// //     <div className="App ">
// //    <MoodSwitch/>
// //     </div>
// //   );
// // }

// // export default App;

// App.js
import React from "react";
import ThemeProvider from "./ThemeContext"; // ✅ Import your provider
import ThemeToggle from "./ThemeToggle";   // ✅ Import the toggle button

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Hello, Theme World! 🌍</h1>
        <ThemeToggle />
        {/* Add more components here if you want */}
      </div>
    </ThemeProvider>
  );
}

export default App;


