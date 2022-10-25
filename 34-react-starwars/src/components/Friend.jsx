import React from 'react'
import style from '../css_modules/bottomRound.module.css'

const Friend = ({ friend, pos }) => {
    const styles = 'col-4 p-1 ';
    switch (pos) {
        case 7:
            return (
                < img className={`${styles}${style.bottomLeft}`} src={friend} alt="Friend" />
            )
        case 9:
            return (
                < img className={`${styles}${style.bottomRight}`} src={friend} alt="Friend" />

            )

        default:
            return (
                <img className={styles} src={friend} alt="Friend" />
            )
    }
}

export default Friend