import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button, } from "./styled";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispacth = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const contentTrimmed = newTaskContent.trim();

        if (!contentTrimmed) {
            return;
        }

        dispacth(addTask({
            content: contentTrimmed,
            done: false,
            id: nanoid(),
        }));
        
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobenia?"
                onChange={({ target }) => setNewTaskContent(target.value)}

            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;