import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section"
import { Stylediv } from "./styled";


export default () => (
    <Container>
        <Header title="About author" />
        <Section
            title="Oleksandr Vykhor"
            body={
                <Stylediv>
                    My name is Oleksandr. I am an ambitious person with a strong
                    passion for personal and professional
                    development. I like work in a team and
                    very eager to help others. Currently
                    looking for place that offers high
                    potential for development of soft and
                    technical skills. I'm open to new
                    technologies and the near future want
                    working to Frontend.
                </Stylediv>
            }
        />
    </Container>
);