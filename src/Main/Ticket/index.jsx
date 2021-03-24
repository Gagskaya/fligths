import React from 'react'

import './Ticket.scss'
import { Fragment } from 'react'

export const Ticket = ({ flights }) => {
    return (
        <Fragment>
            {
                flights && flights.length ? flights.map((item, index) => <div className="ticket" key={index}>
                    <div className="header">
                        <span>{item.flight.carrier.caption} </span>
                        <ul>
                            <li><h5>{item.flight.price.passengerPrices[0].singlePassengerTotal.amount} ₽</h5></li>
                            <li><small>Стоимость для одного взрослого пассажира</small></li>
                        </ul>
                    </div>
                    <div className="content">
                        <span className="content-city">{item.flight.legs[0].segments[0].departureCity.caption}, {item.flight.legs[0].segments[0].departureAirport.caption} ({item.flight.legs[0].segments[0].departureAirport.uid}) &#8594; {item.flight.legs[0].segments[0].arrivalAirport.caption}, {item.flight.legs[0].segments[0].arrivalCity.caption} ({item.flight.legs[0].segments[0].arrivalAirport.uid})</span>
                        <hr />
                        <div className="info">
                            <span>{item.flight.legs[0].segments[0].departureDate}</span>
                            <span>&#9719; {item.flight.legs[0].segments[0].travelDuration} мин.</span>
                            <span>{item.flight.legs[0].segments[0].arrivalDate}</span>
                        </div>
                        <span className="content-flight">Рейс выполняет : {item.flight.carrier.caption}</span>
                    </div>
                    <button>Выбрать</button>
                </div>
                ) : 'Билетов не найдено'
            }

        </Fragment>

    )
}
