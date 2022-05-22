import React from 'react';
import './App.css';

function App() {
    console.log("App rendering")
  return (
   <div>
       <AppTitle />
       <Rating />
       <Accordion />
       <Rating />
   </div>
  );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is APP component</>
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>Меню</h3>
        </div>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Rating() {
    console.log("Rating rendering")
    return(
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star() {
    console.log("Star rendering")
    return (
    <div>star</div>
    )
}

function Accordion() {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>
}

export default App;
