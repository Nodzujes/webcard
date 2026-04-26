import HomePage from "./pages/HomePage.tsx";
import { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    return (
    <>
        <HomePage isDark={isDark} setIsDark={setIsDark} />
    </>
  )
}

export default App
