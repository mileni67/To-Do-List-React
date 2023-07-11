import React from "react"
import { List, StyledNavLink, Item } from "./styled"

export const Navigation = () => (
    <nav>
        <List>
            <Item>
                <StyledNavLink to="/zadania">
                    Tasks
                </StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to="/author">
                    About author
                </StyledNavLink>
            </Item>
        </List>
    </nav>

);