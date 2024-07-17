import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class MenuSistema extends React.Component {
  state = {
    activeItem: "home",
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <>
        <Menu inverted>
          <Menu.Item
            name="home"
            active={this.state.activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />

          <Menu.Item
            name="cliente"
            active={this.state.activeItem === "cliente"}
            onClick={this.handleItemClick}
            as={Link}
            to="/list-cliente"
          />

          <Menu.Item
            name="produto"
            active={this.state.activeItem === "produto"}
            onClick={this.handleItemClick}
            as={Link}
            to="/list-produto"
          />

          <Menu.Item
            name="entregador"
            active={this.state.activeItem === "entregador"}
            onClick={this.handleItemClick}
            as={Link}
            to="/list-entregador"
          />

          <Menu.Item
            name="promocao"
            active={this.state.activeItem === "promocao"}
            onClick={this.handleItemClick}
            as={Link}
            to="/list-promocao"
          />
<<<<<<< HEAD

          <Menu.Item
            name="categoriaproduto"
            active={this.state.activeItem === "categoriaproduto"}
            onClick={this.handleItemClick}
            as={Link}
            to="/list-categoriaproduto"
          />
=======
>>>>>>> cc029642b0b067d7db7a1e985173f52c8a94f462
        </Menu>
      </>
    );
  }
}

export default MenuSistema;
