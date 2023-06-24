import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

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
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName}{
        color: yellow;
    }
    text-decoration: none;
    color: white;
`;
