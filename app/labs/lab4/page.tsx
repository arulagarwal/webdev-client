"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayMyName = () => alert("Arul Agarwal");
  const sayOther = () => alert("Sample from parent");
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={sayHello}
        theNameFunction={sayMyName}
        theOtherFunction={sayOther}
      />
      <CounterBroken />
      <Counter />
    </div>
  );
}
