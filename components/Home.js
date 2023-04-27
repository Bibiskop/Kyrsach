import './styles/home.css';
import navBtnImg from './img/img--header/free-icon-globe-558593.png.svg';
import search from './img/free-icon-search-4024513_2.png.svg';
import React from 'react';
import {useNavigate} from "react-router-dom"
import { DatePicker, Space } from 'antd';


const Home = () => {


const navigate = useNavigate();
const { RangePicker } = DatePicker;


return (
	<div>
      <header className="header backWave">
          <div className="header--logoNav">
              <div className="logo---block"><button onClick={()=>navigate(-1)} className="logo">AviaSea</button></div>
              <div className="navigation">
                  <div className="navigation--btn"><button onClick={()=>navigate("/components/Sign")} className="navBtn">Sign in</button></div>
                  <div className="navigation--btn"><button onClick={()=>navigate("/components/Sign")} className="navBtn">Sign up</button></div>
                  <div className="navigation--btn"><img src={navBtnImg} alt="#" /></div>
              </div>
          </div>
          <div className="header--title">
              <div className="title"><h1 className="title--info">Поиск дешёвых авиабилетов</h1></div>
          </div>
          <div className="header--filter">
              <div className="filter--input">
                  <div className="filter--blockInput"><select className="filterInput" type="text" placeholder="Откуда">
                                  <option>Москва</option>
                                  <option>Челябинск</option>
                                  <option>Краснодар</option>
                                  <option>Санкт-Питербург</option>
                                  <option>Новосибирск</option>
                      </select></div>
                  <div className="filter--blockInput"><select className="filterInput" type="text" placeholder="Куда">
                                  <option>Челябинск</option>
                                  <option>Москва</option>
                                  <option>Краснодар</option>
                                  <option>Санкт-Питербург</option>
                                  <option>Новосибирск</option>
                      </select></div>
                  <div className="filter--blockInput"><Space direction="vertical" size={12}>
                                                    <RangePicker className='calendar' />
                                                  </Space>
                  </div>
                  <div className="filter--blockInput"><select className="filterInput" type="text" placeholder="Пассажиры и класс">
                                  <option></option>
                                  <option></option>
                                  <option></option>
                                  <option></option>
                                  <option></option>
                  </select></div>
                  <div className="filter--blockInput filter--button"><button className="filterBtn"><img src={search} alt='#' /></button></div>
              </div>
              <div className="filter--blockInput filter--button"><button className="dopFlBtn">Составить сложный маршрут</button></div>
          </div>
      </header>
    </div>
)
};

export default Home;
