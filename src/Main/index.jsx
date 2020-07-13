import React from 'react'
import './Main.scss'
import { Ticket } from './Ticket'
export const Main = ({ flights }) => {
    return (
        <div className="main">
            <Ticket flights={flights} />
        </div>
    )
}
