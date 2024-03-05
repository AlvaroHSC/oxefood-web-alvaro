import React from "react";
import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";

const FormEntregador = () => {
  return (
    <div>
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            <span style={{ color: "darkgray" }}>
              Entregador &nbsp;
              <Icon name="angle double right" size="small" />{" "}
            </span>
            Cadastro
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input required fluid label="Nome" maxLength="100" />

                <Form.Input required fluid label="CPF" maxLength="100" />

                <Form.Input fluid label="RG" maxLength="100" />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input required fluid label="Nome" maxLength="100" />

                <Form.Input required fluid label="CPF" maxLength="100" />

                <Form.Input fluid label="RG" maxLength="100" />
              </Form.Group>
              
              <Form.Group widths="equal">
                <Form.Input required fluid label="Nome" maxLength="100" />

                <Form.Input required fluid label="CPF" maxLength="100" />

                <Form.Input fluid label="RG" maxLength="100" />
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FormEntregador;
