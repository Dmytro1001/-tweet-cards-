import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { GiShadowFollower } from 'react-icons/gi';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  background-color: lemonchiffon;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1200px;
  padding: 10px 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled(GiShadowFollower)`
  width: 35px;
  height: 35px;
  transition: opacity 250ms;
  margin-right: 15px;
  color: #537fe7;
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #e7b10a;
    transform: scale(1.1) rotate(360deg);
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 3px 5px 2px #474747;
`;
