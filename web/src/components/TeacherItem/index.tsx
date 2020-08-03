import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(<>
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
  </>)
}

export default TeacherItem