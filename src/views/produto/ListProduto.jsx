import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListProduto() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/produto")
            .then((response) => {
                setLista(response.data)
            })
    }

    return (
        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Produto </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-produto'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Título</Table.HeaderCell>
                                    <Table.HeaderCell>Código</Table.HeaderCell>
                                    <Table.HeaderCell>Valor Unitário</Table.HeaderCell>
                                    <Table.HeaderCell>Tempo Entrega Mínima</Table.HeaderCell>
                                    <Table.HeaderCell>Tempo Entrega Máxima</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(produto => (

                                    <Table.Row key={produto.id}>
                                        <Table.Cell>{produto.titulo || 'Não informado'}</Table.Cell>
                                        <Table.Cell>{produto.codigo || 'Não informado'}</Table.Cell>
                                        <Table.Cell>{produto.valorUnitario || 'Não informado'}</Table.Cell>
                                        <Table.Cell>{produto.tempoEntregaMinimo|| 'Não informado'}</Table.Cell>
                                        <Table.Cell>{produto.tempoEntregaMaximo || 'Não informado'}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste produto'
                                                icon>
                                                <Icon name='edit' />
                                            </Button> &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este produto'
                                                icon>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

        </div>
    )
}
