import React from "react";
import { BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";


export const App = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">
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
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
            </Switch>
        </nav>
    </BrowserRouter>
);