import styled from "styled-components";

export const StyledButton = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: white;
    color: ${({ theme }) => theme.color.teal};
    transition: color 0.5s;

    &:hover {
    color: hsl(180, 60%, 20%);
    cursor: pointer;
    transform: scale(1.1);
    }

    &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: auto;
    }
`;