import axios from "axios";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import {
  Button,
  Container,
  Divider,
  Form,
  FormRadio,
  FormSelect,
  Icon,
  Input,
} from "semantic-ui-react";

const FormEntregador = () => {
  const [options, setOptions] = useState("");
  const [estados, setEstados] = useState([
    { text: "Alagoas", value: "Alagoas" },
    { text: "Pernambuco", value: "Pernambuco" },
    { text: "Paraíba", value: "Paraíba" },
    { text: "Rio Grande do Norte", value: "Rio Grande do Norte" },
  ]);

  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [foneCelular, setFoneCelular] = useState();
  const [foneFixo, setFoneFixo] = useState();
  const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
  const [valorFrete, setValorFrete] = useState();
  const [enderecoRua, setEnderecoRua] = useState();
  const [enderecoBairro, setEnderecoBairro] = useState();
  const [enderecoCidade, setEnderecoCidade] = useState();
  const [enderecoCep, setEnderecoCep] = useState();
  const [enderecoUf, setEnderecoUf] = useState();
  const [enderecoComplemento, setEnderecoComplemento] = useState();
  const [ativo, setAtivo] = useState(0);

  function salvar() {
    let entregadorRequest = {
      nome: nome,
      cpf: cpf,
      rg: rg,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
      qtdEntregasRealizadas: qtdEntregasRealizadas,
      valorFrete: valorFrete,
      enderecoRua: enderecoRua,
      enderecoBairro: enderecoBairro,
      enderecoCidade: enderecoCidade,
      enderecoCep: enderecoCep,
      enderecoUf: enderecoUf,
      enderecoComplemento: enderecoComplemento,
      ativo: ativo,
    };

    axios
      .post("http://localhost:8080/api/entregador", entregadorRequest)
      .then((response) => {
        console.log("Entregador cadastrado com sucesso.");
      })
      .catch((error) => {
        console.log("Erro ao incluir o um entregador.");
      });
  }

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
                <Form.Input
                  required
                  fluid
                  label="Nome"
                  maxLength="100"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input required fluid label="CPF">
                  <InputMask
                    required
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label="RG"
                  maxLength="100"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input fluid label="DT Nascimento" maxLength="100">
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </Form.Input>

                <Form.Input required fluid label="Fone Celular" maxLength="100">
                  <InputMask
                    mask="(99) 9999.9999"
                    maskChar={null}
                    placeholder="(99) 9999.9999"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Fone Fixo" maxLength="100">
                  <InputMask
                    mask="(99) 9999.9999"
                    maskChar={null}
                    placeholder="(99) 9999.9999"
                    value={foneFixo}
                    onChange={(e) => setFoneFixo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label="QTD Entregas Realizadas"
                  maxLength="100"
                  value={qtdEntregasRealizadas}
                  onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="Valor Por Frete"
                  maxLength="100"
                  value={valorFrete}
                  onChange={(e) => setValorFrete(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Rua"
                  maxLength="100"
                  value={enderecoRua}
                  onChange={(e) => setEnderecoRua(e.target.value)}
                />

                {/* <Form.Input
                  fluid
                  label="Número"
                  maxLength="4"
                  value={enderecoNumero}
                  onChange={(e) => setEnderecoNumero(e.target.value)}
                /> */}
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Bairro"
                  maxLength="100"
                  value={enderecoBairro}
                  onChange={(e) => setEnderecoBairro(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="Cidade"
                  maxLength="100"
                  value={enderecoCidade}
                  onChange={(e) => setEnderecoCidade(e.target.value)}
                />

                <Form.Input
                  fluid
                  label="CEP"
                  maxLength="100"
                  value={enderecoCep}
                  onChange={(e) => setEnderecoCep(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <FormSelect
                  fluid
                  label="UF"
                  options={estados}
                  placeholder="Selecione"
                  value={enderecoUf}
                  onChange={(e) => setEnderecoUf(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Complemento"
                  maxLength="100"
                  value={enderecoComplemento}
                  onChange={(e) => setEnderecoComplemento(e.target.value)}
                />
              </Form.Group>

              <Form.Group inline>
                <label>Ativo</label>
                <FormRadio
                  label="Sim"
                  value={1}
                  checked={ativo == 1}
                  onChange={() => setAtivo(1)}
                />

                <FormRadio
                  label="Não"
                  value={0}
                  checked={ativo == 0}
                  onChange={() => setAtivo(0)}
                />
              </Form.Group>
            </Form>
          </div>

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
              Voltar
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
        </Container>
      </div>
    </div>
  );
};

export default FormEntregador;
