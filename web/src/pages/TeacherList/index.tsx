import React from 'react'

import PageHeader from '../../components/PageHeader'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherList() {
  return(<>
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day"/>
          </div>
          
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/42079830?s=460&u=acba4bc2b5d0e97089748e4b787fd6f957460688&v=4" alt="avatar"/>
            <div>
              <strong>Ricássio Costa</strong>
              <span>História das Revoluções</span>
            </div>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/>
            Ipsum quasi eligendi temporibus repellat quam, quod, laborum veniam mollitia illo, placeat assumenda et? Praesentium a deserunt, non debitis facere voluptas possimus?
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 40,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  </>)
}

export default TeacherList