import React, { useContext } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { ShopContext } from "../../context/Context";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };

  const { cartItems } = useContext(ShopContext);

  const cartItemToArray = Object.values(cartItems);

  console.log(cartItemToArray, "array");

  const addToCartItems = cartItemToArray.filter((value) => value === 1);

  console.log(addToCartItems, "cart items");

  const cartItemCount = addToCartItems.length;

  console.log(cartItemCount, "count");

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>
        <ul
          className={css.menu}
          style={{ display: ShowMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
        </ul>

        <input type="text" className={css.search} placeholder="Search" />

        <Link to="/cart">
          <div className={css.cartIcon}>
            <div className={css.cartCount}>{cartItemCount}</div>
            <CgShoppingBag size={35} />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
