import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
    <div className="page">
        <Header />
        <Main />
        <Footer />
        </div>

<div className="popup popup_open_edit">
<div className="popup__container">
    <form name="popup-form" className="popup__form popup__form_element_edit">
        <h2 className="popup__heading">Редактировать профиль</h2>
        <input type="text" name="author" id="text-input-author" className="popup__text popup__text_name_author" value="Жак-Ив Кусто" placeholder="Имя" minlength="2" maxlength="40" required />
        <span className="popup__text-error popup__text-error_active" id="text-input-author-error"/>
        <input type="text" name="activity" id="text-input-activity" className="popup__text popup__text_name_activity" value="Исследователь океана" placeholder="О себе" minlength="2" maxlength="200" required />
        <span className="popup__text-error popup__text-error_active" id="text-input-activity-error"/>
        <input type="submit" className="popup__button popup__button" value="Сохранить" />
        </form>
    <button className="popup__close popup__close_window_edit" type="button"></button>

</div>
</div>

<div clasName="popup popup_open_add">
<div className="popup__container">
    <form name="popup-item-form" className="popup__form popup__form_element_add" novalidate>
        <h2 className="popup__heading">Новое место</h2>
        <input type="text" name="description" id="text-input-description" className="popup__text popup__text_name_description" value="" placeholder="Название" minlength="2" maxlength="30" required />
        <span className="popup__text-error popup__text-error_active" id="text-input-description-error"/>
        <input type="url" name="link" id="url-input-link" className="popup__text popup__text_name_link" value="" placeholder="Ссылка на картинку" required />
        <span className="popup__text-error popup__text-error_active" id="url-input-link-error"/>
        <input type="submit" className="popup__button popup__button_create_card" value="Создать" />
    </form>
    <button className="popup__close popup__close_window_add" type="button"></button>
</div>
</div>

<div className="popup popup_open_picture">
<div className="popup__open-card">
    <img className="popup__picture" alt="Подставляем изображение" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" />
    <p className="popup__description"/>
    <button className="popup__close popup__close_window_picture" type="button"/>
</div>
</div>

<div className="popup popup_open_confirmation">
<div className="popup__container">
    <form name="popup-form-confirmation" className="popup__form popup__form_element_confirmation" novalidate>
        <h2 className="popup__heading">Вы уверены?</h2>
        <input type="submit" className="popup__button popup__button_confirmation" value="Да" />
    </form>
    <button className="popup__close popup__close_window_confirmation" type="button"/>
</div>
</div>

<div className="popup popup_change_avatar">
<div className="popup__container">
    <form name="popup-form-edit-image" className="popup__form popup__form_element_avatar" novalidate>
        <h2 className="popup__heading">Обновить аватар</h2>
        <input type="url" name="link-image" id="avatar-input-link" className="popup__text popup__text_name_image" value="" placeholder="Ссылка на картинку" required />
        <span className="popup__text-error popup__text-error_active" id="avatar-input-link-error"/>
        <input type="submit" className="popup__button popup__button_edit_image" value="Сохранить"/>
    </form>
    <button className="popup__close popup__close_edit_image" type="button"/>
</div>
</div>

<template id="card-template">
<li className="element">
    <img className="element__image" alt="Подставляем изображение"
        src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg" />
    <div className="element__nowrap">
        <h3 className="element__text"/>
        <div className="element__wrap">
            <button type="button" className="element__button"/>
            <p className="element__like">0</p>
        </div>
    </div>
    <button type="button" className="element__basket"/>
</li>
</template>
</>
  );
}

export default App;
