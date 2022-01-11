import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {

    var auhUser = { 'id': 1, 'pseudo': 'Jean2', 'avatar': "https://www.afrik.com/wp-content/uploads/2021/02/samuel-eto-o-ok-696x392.jpg" }


    return (
        <div><div className="nav-bar shadow-sm py-4 px-5">
            <div className="logo"> <img src="https://www.meilleure-innovation.com/wp-content/uploads/2021/11/1200px-facebook-logo-2019-1024x1024.png" alt="avatar" className="logo" /></div>
            <div className="right-content d-flex align-items-center">
                <div className="user-avatar px-5">
                    <img src={auhUser['avatar']} alt="avatar" className="user-avatar" />
                </div>
                <div className="user-name">
                    {auhUser['pseudo']}
                </div>
            </div>
        </div></div>
    )
}

export default NavBar;