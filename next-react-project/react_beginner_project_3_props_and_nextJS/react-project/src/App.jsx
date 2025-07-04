import { use } from "react";
import "./App.css";
import chef from "./images/chef.jpg";
import { useEffect, useReducer } from "react";

let language = "🌚";

function Header({ name, year }) {
  return (
    <header>
      <h1>Welcome to {name}'s platform!!</h1>
      <h2>Copyright {year}</h2>
    </header>
  );
}

const items = ["Python", "Java", "React", "Angular"];

const dishObjects = items.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={onStatus}>I want to be open</button>
        <h2>
          Welcome to this beautiful platform !! {openStatus ? "Open" : "Close"}
        </h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of smiling chef"></img>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  //const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The Restaurant is ${status ? "Open" : "Close"}`);
  });

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={toggle}>Open and Close the shop</button>
      <Header name="Pulkit" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;
