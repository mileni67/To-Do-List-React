import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    background-color: teal;
    display: grid;
    justify-content: center;
    list-style-type: none;
    margin: 0px;
    grid-template-columns: 100px 100px;
    padding: 10px;
    text-decoration: none;
    font-size: 15px;
    display: flex;
    flex-direction: row;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    text-align: center;
    
    &.active{
        font-weight: bold;
    }

    &:hover{
        text-shadow: 0px 0px white;
    }
   
`;

export const Item = styled.li`
    margin: auto 10px;
    list-style: none;
`;