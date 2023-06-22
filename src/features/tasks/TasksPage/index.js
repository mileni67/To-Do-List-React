import Form from "../TasksPage/Form";
import TasksList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons"
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container"
import Search from "../TaskPage/Search";

function TasksPage() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
