import React from 'react';
import '../css/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logoWrap">
                <a href="/">
                    <img className="logo" src="/img/logo.svg" alt="logo" />
                </a>
            </div>
            <ul className="navbar">
                <li className="navbar__item__active navbar__item">
                    <img className="navbar__item__image" src="/img/menu1.png" alt="menu1" />
                    대쉬보드
                </li>
                <li className="navbar__item">
                    <img className="navbar__item__image" src="/img/menu2.png" alt="menu2" />
                    네트워크 서비스 관리
                </li>
                <li className="navbar__item">
                    <img className="navbar__item__image" src="/img/menu3.png" alt="menu3" />
                    시스템 관리
                </li>
            </ul>
            <div className="adminInfos">
                <img className="alarm__image" src="/img/alarm.svg" alt="alarm" />
                <div className="adminWrap">
                    <img className="admin__image" src="/img/admin.svg" alt="admin" />
                    <div className="adminInfo">
                        <h1>김과장</h1>
                        <p>ID: 1234567</p>
                    </div>
                    <img className="arrow__image" src="/img/arrow.svg" alt="arrow" />
                </div>
            </div>
        </header>
    )
}

export default Header;