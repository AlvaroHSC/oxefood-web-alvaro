import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormCategoriaProduto() {
  const [descricao, setDescricao] = useState();
  // const [dataInicio, setDataInicio] = useState();
  // const [dataFim, setDataFim] = useState();
  // const [regra, setRegra] = useState();
  // const [valorDesconto, setValorDesconto] = useState();

  const [idCategoriaProduto, setIdCategoriaProduto] = useState();
  const { state } = useLocation();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/categoriaproduto/" + state.id)
        .then((response) => {
          setIdCategoriaProduto(response.data.id);
          setDescricao(response.data.descricao);
          // setDataInicio(formatarData(response.data.dataInicio));
          // setDataFim(formatarData(response.data.dataFim));
          // setRegra(response.data.regra);
          // setValorDesconto(response.data.valorDesconto);
        });
    }
  }, [state]);

  // function formatarData(dataParam) {
  //   if (dataParam === null || dataParam === "" || dataParam === undefined) {
  //     return "";
  //   }

  //   let arrayData = dataParam.split("-");
  //   return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0];
  // }

  function salvar() {
    let categoriaProdutoRequest = {
      descricao: descricao,
      // dataInicio: dataInicio,
      // dataFim: dataFim,
      // regra: regra,
      // valorDesconto: valorDesconto
    };

    if (idCategoriaProduto != null) {
      //Alteração:

      axios
        .put("http://localhost:8080/api/categoriaproduto/" + idCategoriaProduto, categoriaProdutoRequest)
        .then((response) => {
          console.log("Categoria de produto alterado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao alterar uma categoria de produto.");
        });
    } else {
      //Cadastro:

      axios
        .post("http://localhost:8080/api/categoriaproduto", categoriaProdutoRequest)
        .then((response) => {
          console.log("Categoria de produto cadastrada com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao incluir o uma categoria de produto.");
        });
    }
  }

  return (
    <div>
      <MenuSistema />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          {idCategoriaProduto === undefined && (
            <h2>
              <span style={{ color: "darkgray" }}>
                Categoria de Produto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>
              Cadastro
            </h2>
          )}

          {idCategoriaProduto != undefined && (
            <h2>
              <span style={{ color: "darkgray" }}>
                Categoria de Produto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>
              Alteração
            </h2>
          )}

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Descrição"
                  maxLength="100"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />

              </Form.Group>

              {/* <Form.Group>
                <Form.Input fluid label="Data Inicio" width={6}>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                    value={dataInicio}
                    onChange={(e) => setDataInicio(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Data Fim" width={6}>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                    value={dataFim}
                    onChange={(e) => setDataFim(e.target.value)}
                  />
                </Form.Input>
              </Form.Group> */}

              {/* <Form.Group>
                <Form.Input
                  required
                  fluid
                  width={6}
                  label="Regra"
                  maxLength="100"
                  value={regra}
                  onChange={(e) => setRegra(e.target.value)}
                />

                <Form.Input
                  fluid
                  width={6}
                  label="Valor do Desconto"
                  value={valorDesconto}
                  onChange={(e) => setValorDesconto(e.target.value)}
                />


              </Form.Group> */}
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Button
                type="button"
                inverted
                circular
                icon
                labelPosition="left"
                color="orange"
              >
                <Icon name="reply" />
                <Link to={"/list-categoriaproduto"}>Voltar</Link>
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
