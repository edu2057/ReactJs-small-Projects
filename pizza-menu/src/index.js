import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // this idea is very bad but gives result so
  // function Pizza() {
  //   return <h2>Pizza</h2>;
  // }
  //const x = "jonas";    //always use the eslint
  return (
    <div className="container">
      {/* <h1> Hello React!!!!!</h1> */}
      <Header />;
      <Menu />;
      <Footer />;
    </div>
  );

  function Header() {
    // const style={color:"yellow", fontSize:"48px",textTransform:"uppercase"}
    const style = {};
    return (
      <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>;
      </header>
    );
  }

  function Menu() {
    const pizzas= pizzaData;
   //const pizzas=[];
   const numPizzas =pizzas.length;
    return (
      <main className="menu">
        {" "}
        <h2>Our Menu</h2>

        
        {numPizzas >0 ? (
            <> <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        </>
        ):
        <p>We're still working on our menu. please come back later:)</p>}
        
        
        {/* <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="pizza Funghi"
          ingredients="Tomato, mushroom  and  cheese"
          photoName="pizzas/funghi.jpg"
          price={13}
        />
        <Pizza
          name="pizza Funghi"
          ingredients="Tomato, mushroom  and  cheese"
          photoName="pizzas/funghi.jpg"
          price={12}
        />
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={18}
        /> */}
      </main>
    );
  }

  function Pizza({pizzaObj}) {
    console.log(pizzaObj);

    //if (pizzaObj.soldOut) return null;

    return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
        <div>
         
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
{/* 
          {pizzaObj.soldOut ?(<span>SOLD OUT</span>): (<span>{pizzaObj.price}</span>)} */}
          <span>{pizzaObj.soldOut? 'SOLD OUT': pizzaObj.price + 3}</span>
        </div>
      </li>
    );
  }
  function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

// if(!isOpen)
//   return (
//     <p>
//       WE're happy to welcome you between {openHour}:00. and {closeHour}:00. or
//       order online.
//     </p>
//   );

    return (
      <footer className="footer">
        {/* {new Date().toLocaleTimeString()} — we're currently{" "}
        {isOpen ? "open" : "closed"} */}
        {isOpen ? 
        <Order closeHour={closeHour} 
        openHour=
        {openHour}
        /> : (
          <p>
            WE're happy to welcome you between {openHour}:00. and {closeHour}:00.
       or order online.
          </p>
        )}
      </footer>
    );
  }

  // return React.createElement("Footer", null, "We're currently open");

  // <p>JS</p>;
}

function Order({closeHour,openHour}) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//React version 18 v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
