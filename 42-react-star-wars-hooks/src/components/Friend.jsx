import React from 'react'
import style from '../css_modules/bottomRound.module.css'

const Friend = ({ picture, pos }) => {

    switch (pos) {
        case 7:
            return (
                <img className={`col-4 p-1 ${style.bottomLeft}`} src={picture} alt="Friend" />
            )
        case 9:
            return (
                <img className={`col-4 p-1 ${style.bottomRight}`} src={picture} alt="Friend" />
            )
        default:
            return (
                <img className="col-4 p-1" src={picture} alt="Friend" />
            )
    }

}

export default Friend