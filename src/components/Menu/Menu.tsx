import React from "react";
import './Menu.css'
type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="menu-area">
                <div className="grid">
                    <div className="menu">
                        <nav className="header-menu">
                            <ul className="upper-menu">
                                <li>
                                    <div className="no-link">
                                        <span className="item-wrapper">
                                            <span className="item-inner">
                                                <span className="item-text">
                                                    Home
                                                </span>
                                                <span className="hover-text">
                                                    Home
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="no-link">
                                        <span className="item-wrapper">
                                            <span className="item-inner">
                                                <span className="item-text">
                                                    Post types
                                                </span>
                                                <span className="hover-text">
                                                    Post types
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="sub-menu">
                                        <div className="wrapper">
                                            <ul>
                                                <li>
                                                    <div className="sub-menu-no-link">
                                                        <span className="item-wrapper">
                                                            <span className="item-inner">
                                                                <span className="item-text">
                                                                    Standart
                                                                </span>
                                                                <span className="hover-text">
                                                                    Standart
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Without Sidebar
                                                            </span>
                                                            <span className="hover-text">
                                                                Without Sidebar
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Slider Gallery
                                                            </span>
                                                            <span className="hover-text">
                                                                Slider Gallery
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Gallery
                                                            </span>
                                                            <span className="hover-text">
                                                                Gallery
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Link
                                                            </span>
                                                            <span className="hover-text">
                                                                Link
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Quote
                                                            </span>
                                                            <span className="hover-text">
                                                                Quote
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Audio
                                                            </span>
                                                            <span className="hover-text">
                                                                Audio
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Video
                                                            </span>
                                                            <span className="hover-text">
                                                                Video
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="no-link">
                                        <span className="item-wrapper">
                                            <span className="item-inner">
                                                <span className="item-text">
                                                    Pages
                                                </span>
                                                <span className="hover-text">
                                                    Pages
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="sub-menu">
                                        <div className="wrapper">
                                            <ul>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                About
                                                            </span>
                                                            <span className="hover-text">
                                                                About
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Contact
                                                            </span>
                                                            <span className="hover-text">
                                                                Contact
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="no-link">
                                        <div className="item-wrapper">
                                            <span className="item-inner">
                                                <span className="item-text">
                                                    Categories
                                                </span>
                                                <span className="hover-text">Categories</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sub-menu">
                                        <div className="wrapper">
                                            <ul>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Living
                                                            </span>
                                                            <span className="hover-text">
                                                                Living
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Culture
                                                            </span>
                                                            <span className="hover-text">
                                                                Culture
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Advice
                                                            </span>
                                                            <span className="hover-text">
                                                                Advice
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Events
                                                            </span>
                                                            <span className="hover-text">
                                                                Events
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Life Style
                                                            </span>
                                                            <span className="hover-text">
                                                                Life Style
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                                <li><div className="sub-menu-no-link">
                                                    <span className="item-wrapper">
                                                        <span className="item-inner">
                                                            <span className="item-text">
                                                                Travel
                                                            </span>
                                                            <span className="hover-text">
                                                                Travel
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu