import React from "react";
import PropTypes from "prop-types";


class Phonebook extends React.Component {
  state = {
    name: "",
    number: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.onChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};