import Navbar from "./Components/Navbar";
import List from "./Components/List";

const listState = [
  {
    id: 1,
    type: 'peperoni',
    price: 5,
    qty: 1,
  },
  {
    id: 2,
    type: 'supreme',
    price: 6,
    qty: 1,
  }
]

function App() {
  return (
    <>
    <Navbar />
      <div>
        <List listState={listState} />
      </div>
    </>
  );
}

export default App;
