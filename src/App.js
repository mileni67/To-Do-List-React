import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { StyledNavLink } from "./styled";



export const App = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania:id">
                        Tasks
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/author">
                        About author
                    </StyledNavLink>
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