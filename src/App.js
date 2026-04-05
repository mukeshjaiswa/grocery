
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import CategoryPage from './components/categorypage/CategoryPage';
import Footer from './components/Footer/Footer';
import AllProducts from './components/Allproducts/AllProducts';
import ContactPage from './components/Contact/ContactPage';
import About from './components/About/About';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* child routes render here */}
      <Footer />
    </div>
  );
}
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shopbycategory/:categoryid' element={<CategoryPage />}/>
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
