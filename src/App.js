import Navbar from "./Components/Navbar";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.min.css';

const listState = [
  {
    id: 1,
    type: 'Peperoni',
    img_url: 'https://images.pexels.com/photos/5088681/pexels-photo-5088681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    price: 5.00,
    qty: 1,
  },
  {
    id: 2,
    type: 'Supreme',
    img_url: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    price: 6.00,
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
