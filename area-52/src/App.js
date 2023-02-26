import './CSS/App.css';
import Navbar from './component/Navbar';
import AllRoutes from './component/AllRoutes';
// import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <hr />
      <AllRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
