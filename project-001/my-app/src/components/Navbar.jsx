import React from "react"
import style from './Navbar.module.css'
import reactMenu from './icon_menu.svg'

function Navbar (props) {

    return (
        <>
            <nav className={`${style.divNavbar}`}>
                <div className={`${style.navbarLeft}`}>
                    <a href="">Kevin H. Gutierrez Ramirez</a>
                </div>
                <div className={`${style.navbarRight}`} >
                    {/* <ul className={`${style.navbarRight}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Feedback</li>
                    </ul> */}
                    {/* <img onClick={() => alert('Helo')} src={reactMenu} alt='icon-menu'/> */}
                    <img onClick={() => {
                        return (
                            <>
                                <Navbar/>
                                <h1>Hello</h1>
                            </>
                        )
                    }} src={reactMenu} alt='icon-menu'/>
                </div>
            </nav>
        </>
    )
}

export default Navbar