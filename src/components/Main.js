import '../index.css';
import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    function mapCard(card) {
        return (
            <Card
                key={card._id}
                card={card}
                onCardClick={() => onCardClick(card)}
            />
        );
    }

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([res, cardList]) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
                setCards(cardList);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <main className="content">
                <section className="profile">
                    <img
                        src={userAvatar}
                        className="profile__avatar"
                        alt="Фото, которое вы сами выберете"
                    />
                    <div className="profile__edits" onClick={onEditAvatar}>
                        <div className="profile__edit"></div>
                    </div>
                    <div className="profile-info">
                        <div className="profile-info__nowrap">
                            <h1 className="profile-info__name">{userName}</h1>
                            <button
                                type="button"
                                className="profile-info__button"
                                onClick={onEditProfile}
                            />
                        </div>
                        <p className="profile-info__activity">
                            {userDescription}
                        </p>
                    </div>
                    <button
                        type="button"
                        className="add-button"
                        onClick={onAddPlace}
                    />
                </section>

                <section className="elements">{cards.map(mapCard)}</section>
            </main>
        </>
    );
}

export default Main;
