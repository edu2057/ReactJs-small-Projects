// import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "charger", quantity: 3, packed: true },
//   { id: 4, description: "Toothbrush", quantity: 4, packed: false },
// ];

// export default function App() {
//    const [items, setItems] = useState([]);

//  function handleAddItems(item) {
//   setItems((items)=> [...items, item]);
//  }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleAddItems}/>
//       <PackingList items={items} />
//       <Stats />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🏖️ Far Away⛅ </h1>;
// }

// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handlesubmit(e) {
//     e.preventDefault();
//     if (!description) return;

//     const newItem = { description, quantity,
//       packed: false, id: Date.now() };
//     //console.log(newItem);

//     onAddItems(newItem);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handlesubmit}>
//       <h3>What do you need for your 😎 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {/* <option vlaue={1}>1</option>
//         <option vlaue={2}>2</option>
//         <option vlaue={3}>3</option>
//         <option vlaue={4}>4</option> */}
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) =>
//           // { console.log(e.target.value);}
//           setDescription(e.target.value)
//         }
//       />
//       <button>Add</button>
//       {/* <button onClick={handleClick}>Add</button> */}
//     </form>
//   );
// }
// function PackingList(items) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item item={item} key={item.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }
// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>
//         🌞 You have x items on your list, and you are already packed X (X%)
//       </em>
//     </footer>
//   );
// }

import { useState } from "react";
import Logo  from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import  Stats  from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];
export default function App() {
  const [items, setItems] = useState([]);
 
//const [numItems, setNumItems]= useState(0);


  function handleAddItems(item) {
    setItems((items) => [...items, item]);
   //setNumItems((num)=> num+1);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? 
    { ...item, packed: !item.packed } : item
      )
    );
  }


  function handleClearItem(){
    const confirmed= window.confirm('Are you Sure ! you want to delete all items?')
      if(confirmed) 
    setItems([]);
  
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items}
       onDeleteItem={handleDeleteItem} 
       onToggleItem={handleToggleItem}
       onClearList={handleClearItem} />
      <Stats items={items} />
    </div>
  );
}





