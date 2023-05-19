import styled from "styled-components";

export const ButtonList = styled.div`
    padding-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        align-items: center;
        padding-right: 0;
        padding-bottom: 20px;
    }
`;

export const StyledButton = styled.button`
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
