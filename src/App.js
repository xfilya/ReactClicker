import styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonPanel from "./components/ButtonPanel";
import Label from "./components/Label";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Header/>
      <main>
        <Label value={count}></Label>
        <ButtonPanel
          onMinus = {() => setCount((count) => count - 1)}
          onReset = {() => setCount(0)}
          onPlus = {() => setCount((count) => count + 1)}
        />
      </main>
      <Footer/>
    </div>
  );
}


