import React from 'react';
import styled from 'styled-components';
// import { HeaderTopRight, HeaderTitle } from './AdminHeaderStyle';
const HeaderContainer = styled.header`
  width: 100%;
`;

const HeaderTopRight = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 72px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
`;
const RezDvoIAdminPregled = styled.div``;
const HeaderTitle = styled.h1`
  font-family: Lora;
  font-size: 24px;
  font-weight: bold;
  color: #434343;
  margin: 0;
  padding: 8px 16px 4px;
`;
const HeaderTitleGray = styled.h2`
  opacity: 0.5;
  font-family: Poppins;
  font-size: 14px;
  color: #434343;
  padding-left: 16px;
`;
const LogOutButton = styled.button`
  width: 114px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4951;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #0f4951;
  margin-top: 16px;
`;
const Navbar = styled.div`
  width: 100%;
  background-color: #229c7f;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  height: 40px;
  padding: 0 calc((100vw - 1032px) / 2);
  display: flex;
  flex-direction: row;
`;

const NavButton = styled.div`
  width: 168px;
  height: 100%;
  display: flex;
`;
const NavLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 168px;
  align-items: center;
  height: 100%;
  color: white;
  font-family: Lora;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  :hover {
    color: #0f4951;
    background-color: #ffffff;
  }
`;

const Image = styled.img`
  width: 136px;
  height: 64px;
  position: relative;
  bottom: -9px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border: solid 1px #0f4951;
`;

const HeaderTopContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 calc((100vw - 1032px) / 2);
`;

const NavTab = props => (
  <NavButton>
    <NavLink href={props.link}>{props.text}</NavLink>
  </NavButton>
);

const AdminHeader = () => (
  <HeaderContainer>
    <HeaderTopContainer>
      <Image />
      <HeaderTopRight>
        <RezDvoIAdminPregled>
          <HeaderTitle>REZERVACIJA DVORANA</HeaderTitle>
          <HeaderTitleGray>Administratorski pregled</HeaderTitleGray>
        </RezDvoIAdminPregled>
        <LogOutButton>LOG OUT</LogOutButton>
      </HeaderTopRight>
    </HeaderTopContainer>
    <Navbar>
      <NavTab link="/zahtjevi" text="Zahtjevi na čekanju" />
      <NavTab link="/rezervacije" text="Rezervacije" />
      <NavTab link="/dvorane" text="Dvorane" />
    </Navbar>
  </HeaderContainer>
);

export default AdminHeader;
