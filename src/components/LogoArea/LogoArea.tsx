import React from 'react'
import './LogoArea.css'

type Props = {}

const LogoArea = (props: Props) => {
  return (
    <>
        <div className="logo-area">
            <div className="grid"> 
                <div className="top-bar">
                    <div className="left-elements">
                        <div className="icon-top-bar">
                            <a href="" className="link-social">
                                <span className='icon-twitter'></span>
                            </a>
                        </div>
                        <div className="icon-top-bar">
                            <a href="" className="link-social">
                                <span className='icon-pinterest'></span>
                            </a>
                        </div>
                        <div className="icon-top-bar">
                            <a href="" className="link-social">
                                <span className='icon-vimeo'></span>
                            </a>
                        </div>
                    </div>
                    <div className="right-elements">
                        <div className="search">
                            <span className='icon-search'></span>
                        </div>
                        <div className="menu-opened">
                            <span className='icon-menu'></span>
                        </div>
                    </div>
                </div>
                <div className="logo-wrapper">
                    <div className="logo"> 
                        <img src="/images/allure-logo.png" alt="" />
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default LogoArea