import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 10px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns:  auto 1fr auto;
    text-decoration: none;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    text-decoration: none;
    background-color: rgb(22, 143, 22);
    cursor: pointer;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 61%, 34%);

        &:hover {
            background-color: hsl(120, 61%, 39%);
        }

        &:active {
            background-color: hsl(120, 61%, 44%);
        }
    `}

    ${({ remove }) => remove && css`
            background-color: ${({ theme }) => theme.color.red};
            color: ${({ theme }) => theme.color.white};
            border: none;
            width: 30px;
            height: 30px;
            padding: 0;
            cursor: pointer;
            transition: 1s;
        &:hover {
            filter: brightness(110%);
        }
    `}
`;