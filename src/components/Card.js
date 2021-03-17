import React from 'react';

function Card({ card, onCardClick }) {
    return (
        <li className="element">
            <img
                className="element__image"
                src={card.link}
                alt={card.name}
                onClick={onCardClick}
            />
            <div className="element__nowrap">
                <h3 className="element__text">{card.name}</h3>
                <div className="element__wrap">
                    <button type="button" className="element__button" />
                    <p className="element__like">{card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="element__basket" />
        </li>
    );
}

export default Card;
