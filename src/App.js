import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "przejsc na Reacta", done: false },
  { id: 2, content: "zjesc obiad", done: true },
];

const hideTasksDone = false;

function App() {
  return (
    <div>
      <Container>
        <Header title="Lista zadań"/> 
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          body={
            <Tasks tasks={tasks} hideTasksDone={hideTasksDone} />}
          extraHeaderContent={
            <Buttons tasks={tasks} hideTasksDone={hideTasksDone} />}
        />

      </Container>
    </div>
  );
}

export default App;
