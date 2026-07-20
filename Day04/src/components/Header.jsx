function Header(){
    return(
        <div className="heading">
            <img className="images" src="https://images.seeklogo.com/logo-png/35/1/myntra-logo-png_seeklogo-355038.png" height="80px" width="80px"/>
            <div className="options">
                <button className="butt">Men</button>
                <button className="butt">Women</button>
                <button className="butt">Kids</button>
                <button className="butt">Home & Living</button>
                <button className="butt">Beauty</button>
                <button className="butt">Studio</button>
            </div>
            <input className="searchbar" placeholder="Search for products brands and more"></input>
            <div className="profile">
                <button className="pro">Profile</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
    )
}

export default Header;