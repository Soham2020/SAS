import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useNavigate, Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import './Header.css'

export default function Navbar(){
    const [ { cart }, dispatch ] = useStateValue();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        return navigate('/');
    }
    return (
        <div className="header">
            <img 
                className="header__logo"
                src="https://www.pngfind.com/pngs/m/607-6077306_sas-logo-black-and-white-sas-institute-hd.png"
            />
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne" onClick={logout}>Logout</span>
                </div>
                <div className="header__option">
                    <Link to={"/user/cart"} ><span className="header__optionLineTwo">Orders</span></Link>
                </div>
                <div className="header__optionBasket">
                    <Link to={"/user/cart"} ><AddShoppingCartIcon /></Link>
                    <span className="header__optionLineTwo header__basketCount">{ cart.length }</span>
                </div>
            </div>
        </div>
    )
}