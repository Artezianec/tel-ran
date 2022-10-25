import React from 'react'
import { friends } from '../utils/consts'
import Friend from './Friend'
const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => <Friend key={index} pos={index+1} friend={friend} />)}
        </section>
    )
}

export default DreamTeam