import './styles/background.css';
import './styles/buttons.css';
import './styles/flexbox.css';
import './styles/inputs.css';
import './styles/text.css';
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
              </div>
          </div>
          <div className="header--title">
              <div className="title"><h1 className="title--info">Search for cheap flights</h1></div>
          </div>
          <div className="header--filter">
              <div className="filter--input">
                  <div className="filter--blockInput"><select className="filterInput" type="text" placeholder="Откуда">
                                  <option>Moscow</option>
                                  <option>Chelyabinsk</option>
                                  <option>Krasnodar</option>
                                  <option>Saint Petersburg</option>
                                  <option>Novosibirsk</option>
                      </select></div>
                  <div className="filter--blockInput"><select className="filterInput" type="text" placeholder="Куда">
                                  <option>Chelyabinsk</option>
                                  <option>Moscow</option>
                                  <option>Krasnodar</option>
                                  <option>Saint Petersburg</option>
                                  <option>Novosibirsk</option>
                      </select></div>
                  <div className="filter--blockInput"><Space direction="vertical" size={12}>
                                                    <RangePicker className='calendar' />
                                                  </Space>
                  </div>
                  <div className="filter--blockInput"><select className="filterInput" type="text" placeholder="Пассажиры и класс">
                                  <option>Economy</option>
                                  <option>Business</option>
                                  <option>Adults</option>
                                  <option>Teenagers</option>
                                  <option>Children</option>
                  </select></div>
                  <div className="filter--blockInput filter--button"><button className="filterBtn"><img src={search} alt='#' /></button></div>
              </div>
              <div className="filter--blockInput filter--button"><button className="dopFlBtn">Create a complex route</button></div>
          </div>
      </header>
    </div>
)
};

export default Home;
