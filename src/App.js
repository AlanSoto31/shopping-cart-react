import Navbar from "./Components/Navbar";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Navbar className={'d-flex justify-content-between align-content-center'}/>
      <div>
        <List listState={listState} />
      </div>
    </>
  );
}

export default App;
