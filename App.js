import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import navBtnImg from './img/img--header/free-icon-globe-558593.png.svg';
import navBtnImg2 from './img/img--header/free-icon-more-information-2740648.png.svg';;


function App() {

    const [value, onChange] = useState(new Date());

  return (
    <header class="header backWave">
        <div class="header--logoNav">
            <div class="logo---block"><button class="logo">AviaSea</button></div>
            <div class="navigation">
                <div class="navigation--btn"><button class="navBtn">Профиль</button></div>
                <div class="navigation--btn"><button class="navBtn">Кое-что ещё</button></div>
                <div class="navigation--btn"><img src={navBtnImg} alt="#" /></div>
                <div class="navigation--btn"><img src={navBtnImg2} alt="#" /></div>
            </div>
        </div>
        <div class="header--title">
            <div class="title"><h1 class="title--info">Поиск дешёвых авиабилетов</h1></div>
        </div>
        <div class="header--filter">
            <div class="filter--input">
                <div class="filter--blockInput"><select class="filterInput" type="text" placeholder="Откуда">
                                <option>Москва</option>
                                <option>Челябинск</option>
                                <option>Краснодар</option>
                                <option>Санкт-Питербург</option>
                                <option>Новосибирск</option>
                    </select></div>
                <div class="filter--blockInput"><select class="filterInput" type="text" placeholder="Куда">
                                <option>Челябинск</option>
                                <option>Москва</option>
                                <option>Краснодар</option>
                                <option>Санкт-Питербург</option>
                                <option>Новосибирск</option>
                    </select></div>
                <div class="filter--blockInput"><Calendar onChange={onChange} value={value} class="filterInput" type="text" placeholder="Когда"/></div>
                <div class="filter--blockInput"><Calendar onChange={onChange} value={value} class="filterInput" type="text" placeholder="Обратно"/></div>
                <div class="filter--blockInput"><input class="filterInput" type="text" placeholder="Пассажиры и класс"/></div>
                <div class="filter--blockInput filter--button"><button class="filterBtn">Найти билеты</button></div>
            </div>
            <div class="filter--blockInput filter--button"><button class="dopFlBtn">Составить сложный маршрут</button></div>
        </div>
    </header>
  );
}

export default App;
