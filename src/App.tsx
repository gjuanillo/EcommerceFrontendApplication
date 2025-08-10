import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'
import Login from './components/auth/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Checkout from './components/checkout/Checkout'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    {/* Public & Private */}
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/*' element={<NotFound />} />

                    {/* Public Only */}
                    <Route element={<PrivateRoute publicPage />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    {/* Private Only */}
                    <Route element={<PrivateRoute />}>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Route>
                </Routes>
            </Router>
            <Toaster position='bottom-center' />
        </>
    )
}

export default App;
