import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";



export const App = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania:id">
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link to="/author">
                        About author
                    </Link>
                </li>
            </ul>
            <Switch>
            <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania"/>
                </Route>
            </Switch>
        </nav>
    </BrowserRouter>
);