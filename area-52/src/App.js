import './CSS/App.css';
import Navbar from './component/Navbar';
import AllRoutes from './component/AllRoutes';
// import Form from './Pages/Form';

function App() {
  return (
    <div className="App">

      <Navbar />
      <hr />
      <AllRoutes />
      {/* <Form /> */}
    </div>
  );
}

export default App;
