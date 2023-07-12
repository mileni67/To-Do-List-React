import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { Navigation } from "./common/Navigation";


export const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
                <TasksPage />
            </Route>
        </Switch>
    </HashRouter>
);