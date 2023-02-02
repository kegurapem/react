import React from 'react'
import style from './Rightbar.module.css'

function Rightbar (props) {
    return (
        <>
            <button>
                <svg className={`${style.svgImage}`} width="800px" height="800px" viewBox="0 0 24 24" fill="none"   xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 12H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 17H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>
        </>
    )
}

export default Rightbar