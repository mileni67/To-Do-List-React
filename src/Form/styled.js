import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    padding: 20px;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    flex-basis: 100px;
    flex-grow: 1;
    overflow: hidden;
    padding: 7px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 7px;
    background-color: rgb(57, 149, 149);
    color: #fff;
    margin-left: 15px;
    border: 1px solid #ddd;

    @media (max-width: 767px) {
        flex-grow: 1;
        flex-basis: 100%;
        margin: 10px 0;
    }

    &:hover {
    background-color: rgb(122, 194, 194);
}
    &:active{
    background-color: rgb(159, 215, 215);
}
`;
