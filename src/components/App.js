import '../index.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
    const [isPopupWithImageOpen, setPopupWithImageOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const profileEditInputs = (
        <>
            <input
                type="text"
                name="author"
                id="text-input-author"
                className="popup__text popup__text_name_author"
                value="Жак-Ив Кусто"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
            />
            <span
                className="popup__text-error popup__text-error_active"
                id="text-input-author-error"
            />
            <input
                type="text"
                name="activity"
                id="text-input-activity"
                className="popup__text popup__text_name_activity"
                value="Исследователь океана"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
            />
            <span
                className="popup__text-error popup__text-error_active"
                id="text-input-activity-error"
            />
        </>
    );

    const addPlaseInputs = (
        <>
            <input
                type="text"
                name="description"
                id="text-input-description"
                className="popup__text popup__text_name_description"
                value=""
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
            />
            <span
                className="popup__text-error popup__text-error_active"
                id="text-input-description-error"
            />
            <input
                type="url"
                name="link"
                id="url-input-link"
                className="popup__text popup__text_name_link"
                value=""
                placeholder="Ссылка на картинку"
                required
            />
            <span
                className="popup__text-error popup__text-error_active"
                id="url-input-link-error"
            />
        </>
    );

    const editAvatarInputs = (
        <>
            <input
                type="url"
                name="link-image"
                id="avatar-input-link"
                className="popup__text popup__text_name_image"
                value=""
                placeholder="Ссылка на картинку"
                required
            />
            <span
                className="popup__text-error popup__text-error_active"
                id="avatar-input-link-error"
            />
        </>
    );

    function handleEditProfileClick() {
        setEditProfileClick(true);
    }

    function handleAddPlaceClick() {
        setAddPlaceClick(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarClick(true);
    }

    function closeAllPopups() {
        setEditProfileClick(false);
        setAddPlaceClick(false);
        setEditAvatarClick(false);
        setPopupWithImageOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        setPopupWithImageOpen(true);
    }

    return (
        <>
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
            </div>

            <PopupWithForm
                name="open_edit"
                title="Редактировать профиль"
                input="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                children={profileEditInputs}
            />

            <PopupWithForm
                name="open_add"
                title="Новое место"
                input="Создать"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                children={addPlaseInputs}
            />

            <ImagePopup
                name="open_picture"
                card={selectedCard}
                isOpen={isPopupWithImageOpen}
                onClose={closeAllPopups}
            />

            <PopupWithForm
                name="open_confirmation"
                title="Вы уверены?"
                input="Да"
            />

            <PopupWithForm
                name="change_avatar"
                title="Обновить аватар"
                input="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                children={editAvatarInputs}
            />
        </>
    );
}

export default App;
