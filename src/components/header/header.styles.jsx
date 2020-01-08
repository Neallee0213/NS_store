import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
  @media screen and (max-width: 800px){
    height: 60px;
    padding: 10px;
    margin-bottom: 10px;
}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 170px;
  padding: 25px;
  font-size: 15px;
  align-items:center;
  justify-content:center;
  display:flex;
  &:hover{
    color:black;
    text-decoration:none;
    }
  @media screen and (max-width: 800px){
   width: 100px;
   padding: 0; 
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px){
   width: 80%; 
   font-size:12px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &:hover{
    color:black;
    text-decoration:none;
    }
`;
