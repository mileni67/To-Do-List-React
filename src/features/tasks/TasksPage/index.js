import Form from "../TasksPage/Form";
import TasksList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons"
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container"
import Search from "../TaskPage/Search";
import ExampleTasksButton from "../TasksPage/ExampleTasksButton"


function TasksPage() {

  return (
    <Container>
      <Header title="Tasks list" />
      <Section
        title="Add a new task"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />

      <Section
        title="Search"
        body={<Search />}
      />

      <Section
        title="To Do list"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
