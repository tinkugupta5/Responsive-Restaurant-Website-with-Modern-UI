import React from 'react';
import {SubHeading, MenuItem} from '../../components'
import {images, data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (

  <div className='app__specialMenu flex__center section__padding' id='menu'>

    <div className="app__specialMenu-title">
      <SubHeading tittle="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant'>Todays Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_wine flex__center"></div>
      <p className="app__specialMenu_menu_heading">Wine</p>
      {/* left div */}
      <div className="app__specialMenu_menu_items">
        {data.wines.map((wine,index) => (
          <MenuItem key={wine.title + index} title={wine.price} tags={wine.tags}/>
          // <p>{wine.title}</p>
        ))}
      </div>
      {/* center image */}
          <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="" />
          </div>
      {/* right menu items  */}
      <div className="app__specialMenu-menu_cocktails flex__center"></div>
      <p className="app__specialMenu_menu_heading">Wine</p>
      {/* left div */}
      <div className="app__specialMenu_menu_items">
        {data.cocktails.map((cocktail,index) => (
          <p>{cocktail.title}</p>
        ) )}
      </div>
    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
  </div>


  </div>

  


  
);

export default SpecialMenu;
