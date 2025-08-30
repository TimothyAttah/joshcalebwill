import React from 'react';
import { Menus } from '../../utils/utils';
import DesktopMenu from './DesktopMenu';
import * as Styles from './MenuStyles'

const Menu = () => {
  return (
    <Styles.MenuUl>{
      Menus.map((menu, i) => (
      <DesktopMenu menu={menu} key={i}/>
      ))
    }</Styles.MenuUl>
  )
}

export default Menu