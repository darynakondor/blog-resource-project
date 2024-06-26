import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.scss'

const Menu = () => {
    const [displayMenu, setDisplayMenu] = useState<string>('none')
    const [displaySubMenu, setDisplaySubMenu] = useState<string>('none')
    const [activeMenuItem, setActiveMenuItem] = useState<string>('')

    const toggleOpenMenu = () => {
        setDisplayMenu((prevState: string) =>
            prevState === 'none' ? 'block' : 'none'
        )
    }
    const toggleSubMenu = () =>
        setDisplaySubMenu((prevState: string) =>
            prevState === 'none' ? 'block' : 'none'
        )
    const clickSubMenuItem = () =>
        setActiveMenuItem(
            (prevState: string) => (prevState = 'rgb(255, 255, 255)')
        )
    const clickMenuItem = () =>
        setActiveMenuItem((prevState: string) => (prevState = '#959595'))
    return (
        <>
            <div className={classes.menuArea}>
                <div
                    onClick={toggleOpenMenu}
                    className={classes.mobileOppenedMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className={classes.biList}
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </div>
                <nav className={classes.headerMenu}>
                    <ul
                        style={{
                            display: `${displayMenu}`,
                        }}
                        className={classes.upperMenu}
                    >
                        <li>
                            <NavLink
                                onClick={clickMenuItem}
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? classes.activeMenuItem
                                        : classes.menuItem
                                }
                            >
                                <span
                                    onClick={toggleOpenMenu}
                                    className={classes.itemWrapper}
                                >
                                    <span className={classes.itemInner}>
                                        <span className={classes.itemText}>
                                            Home
                                        </span>
                                        <span className={classes.hoverText}>
                                            Home
                                        </span>
                                    </span>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={clickMenuItem}
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? classes.activeMenuItem
                                        : classes.menuItem
                                }
                            >
                                <span
                                    onClick={toggleOpenMenu}
                                    className={classes.itemWrapper}
                                >
                                    <span className={classes.itemInner}>
                                        <span className={classes.itemText}>
                                            About
                                        </span>
                                        <span className={classes.hoverText}>
                                            About
                                        </span>
                                    </span>
                                </span>
                            </NavLink>
                        </li>
                        <li onClick={toggleSubMenu}>
                            <NavLink to="#" className={classes.menuItem}>
                                <span className={classes.itemWrapper}>
                                    <span className={classes.itemInner}>
                                        <span
                                            style={{
                                                color: `${activeMenuItem} `,
                                            }}
                                            className={classes.itemText}
                                        >
                                            Categories
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className={
                                                    classes.biChevronDown
                                                }
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </span>
                                        <span className={classes.hoverText}>
                                            Categories
                                        </span>
                                    </span>
                                </span>
                            </NavLink>
                            <div className={classes.subMenu}>
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                onClick={() =>
                                                    clickSubMenuItem()
                                                }
                                                to="category/living"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Living
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Living
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={() =>
                                                    clickSubMenuItem()
                                                }
                                                to="category/culture"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Culture
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Culture
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={() =>
                                                    clickSubMenuItem()
                                                }
                                                to="category/events"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Events
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Events
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={() =>
                                                    clickSubMenuItem()
                                                }
                                                to="category/lifestyle"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            LifeStyle
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            LifeStyle
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={() =>
                                                    clickSubMenuItem()
                                                }
                                                to="category/travel"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Travel
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Travel
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: `${displaySubMenu}`,
                                }}
                                className={classes.subMenuMobile}
                            >
                                <div>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to="category/living"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    onClick={toggleOpenMenu}
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Living
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Living
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="category/culture"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    onClick={toggleOpenMenu}
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Culture
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Culture
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to="category/events"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    onClick={toggleOpenMenu}
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Events
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Events
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="category/lifestyle"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    onClick={toggleOpenMenu}
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Life Style
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Life Style
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="category/travel"
                                                className={classes.subMenuLink}
                                            >
                                                <span
                                                    onClick={toggleOpenMenu}
                                                    className={
                                                        classes.itemWrapper
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            classes.itemInner
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                classes.itemText
                                                            }
                                                        >
                                                            Travel
                                                        </span>
                                                        <span
                                                            className={
                                                                classes.hoverText
                                                            }
                                                        >
                                                            Travel
                                                        </span>
                                                    </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink
                                onClick={clickMenuItem}
                                to="favorite"
                                className={({ isActive }) =>
                                    isActive
                                        ? classes.activeMenuItem
                                        : classes.menuItem
                                }
                            >
                                <span
                                    onClick={toggleOpenMenu}
                                    className={classes.itemWrapper}
                                >
                                    <span className={classes.itemInner}>
                                        <span className={classes.itemText}>
                                            Favorite
                                        </span>
                                        <span className={classes.hoverText}>
                                            Favorite
                                        </span>
                                    </span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu
