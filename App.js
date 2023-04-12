import './App.css';
import navBtnImg from './img/img--header/free-icon-globe-558593.png.svg';
import navBtnImg2 from './img/img--header/free-icon-more-information-2740648.png.svg';;


function App() {
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
                <div class="filter--blockInput"><input class="filterInput" type="text" placeholder="Откуда"/></div>
                <div class="filter--blockInput"><input class="filterInput" type="text" placeholder="Куда"/></div>
                <div class="filter--blockInput"><input class="filterInput" type="text" placeholder="Когда"/></div>
                <div class="filter--blockInput"><input class="filterInput" type="text" placeholder="Обратно"/></div>
                <div class="filter--blockInput"><input class="filterInput" type="text" placeholder="Пассажиры и класс"/></div>
                <div class="filter--blockInput filter--button"><button class="filterBtn">Найти билеты</button></div>
            </div>
            <div class="filter--blockInput filter--button"><button class="dopFlBtn">Составить сложный маршрут</button></div>
        </div>
    </header>
  );
}

export default App;
