import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='Tesla logo' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href='#'>
              {car}
            </a>
          ))}
        <a href='#'>Solar Roof</a>
        <a href='#'>Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerStatus(true)} />
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Use Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadster</a>
        </li>
        <li>
          <a href='#'>Semi</a>
        </li>
        <li>
          <a href='#'>Charging</a>
        </li>
        <li>
          <a href='#'>Powerwall</a>
        </li>
        <li>
          <a href='#'>Commercial Energy</a>
        </li>
        <li>
          <a href='#'>Utilities</a>
        </li>
        <li>
          <a href='#'>Test Drive</a>
        </li>
        <li>
          <a href='#'>Find us</a>
        </li>
        <li>
          <a href='#'>Support</a>
        </li>
        <li>
          <a href='#'>United States</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 400;
    font-size: 14px;
    color: black;
    line-height: 17.5px;
    text-transform: uppercase;
    wrap: no-wrap;
    padding: 0 10px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 400;
    font-size: 14px;
    margin-right: 10px;
    color: black;
    line-height: 17.5px;
    text-transform: uppercase;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  list-style: none;
  padding: 20px;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 400;
      font-size: 14px;
      margin-right: 10px;
      color: black;
      line-height: 17.5px;
      text-transform: uppercase;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Header;
