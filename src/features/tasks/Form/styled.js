import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    flex-basis: 100px;
    flex-grow: 1;
    overflow: hidden;
    padding: 7px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    padding: 7px;
    background-color: rgb(57, 149, 149);
    color: ${({ theme }) => theme.color.white};
    margin-left: 15px;
    border: 1px solid ${({ theme }) => theme.color.teal};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-grow: 1;
        flex-basis: 100%;
        margin: 10px 0;
    }

    &:hover {
        filter: brightness(110%);
        transform: scale (1.1);
}
    &:active{
        filter: brightness(120%);
}
`;
