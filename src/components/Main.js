import '../index.css';
import kusto from '../images/kusto.jpg'

function Main() {
    return (
      <>
    <main className="content">
              <section className="profile">
                  <img src={kusto} className="profile__avatar" alt="Фото, которое вы сами выберете" />
                  <div className="profile__edits">
                      <div className="profile__edit"></div>
                  </div>
                  <div className="profile-info">
                      <div className="profile-info__nowrap">
                          <h1 className="profile-info__name">Жак-Ив Кусто</h1>
                          <button type="button" className="profile-info__button"></button>
                      </div>
                      <p className="profile-info__activity">Исследователь океана</p>
                  </div>
                  <button type="button" className="add-button"></button>
              </section>
  
              <section className="elements"/>
          </main>
          </>
          )
          }

          export default Main;
          