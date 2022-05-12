import React from 'react';
import './App.css';
import InputCity from './InputCity';
import InputStates from './InputStates';
import InputText from './InputText';
import InputRadio from './InputRadio';
import TextArea from './TextArea';

export default class App extends React.Component {
  state = {
    nome: '',
    endereco: '',
    cidade: '',
    email: '',
    cpf: '',
    estado: '',
    radio: '',
  };

  upperCase = (event) => {
    this.setState({
      nome: event.target.value.toUpperCase(),
    });
  };

  specialCharacter = (event) => {
    this.setState({
      endereco: event.target.value.replace(/[^\w\s]/gi, ''),
    });
  };
  blurText = (event) => {
    event.target.value = event.target.value.match(/^\d/)
      ? this.setState({
          cidade: '',
        })
      : this.setState({
          cidade: event.target.value,
        });
  };

  render() {
    const { nome, endereco, cidade, email } = this.state;
    return (
      <div>
        <forms>
      <fieldset>
          <InputText
            type={'text'}
            func={this.upperCase}
            value={nome}
            nome={'Nome: '}
            maxlength={40}
            required={true}
          />
          <InputText
            type={'email'}
            value={email}
            nome={'Email: '}
            maxlength={50}
            required={true}
          />
          <InputText
            type={'text'}
            nome={'CPF: '}
            maxlength={11}
            required={true}
          />
          <InputText
            type={'text'}
            func={this.specialCharacter}
            value={endereco}
            nome={'Endereço: '}
            maxlength={200}
            required={true}
          />
          <InputCity
            type={'text'}
            nome={'Cidade: '}
            value={cidade}
            func={this.blurText}
            maxlength={28}
            required={true}
          />
          <InputStates nome={'Estado: '} required={true} />
          <InputRadio            
            casa={'Casa'}
            apartamento={'Apartamento'}
            required={true}
          />
      </fieldset>
      <fieldset>
        <TextArea maxlength={1000} required={true} nome={'Resumo do currículo: '}/>
        <TextArea maxlength={40} required={true} nome={'Descrição do cargo: '}/>
        <TextArea maxlength={500} required={true} nome={'Cargo: '}/>
      </fieldset>
        </forms>
      
      </div>
    );
  }
}
