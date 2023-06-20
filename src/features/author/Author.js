import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";


export default () => (
    <Container>
        <Header title="About author" />
        <Section
            title="Oleksandr Vykhor"
            body={
                <> <p>My name is Alex. I am 25 years old. I want to be a <strong>frontend</strong> developer. I'm a senior
                    majoringin data science.In addition, I am interested in cooking, sports, e-sports and serials.</p>
                </>
            }
        />
    </Container>
);