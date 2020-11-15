import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import {
  MainContainer,
  Form,
  Image,
  Input,
  Button,
} from './style';
import logo from '../../assets/dropbox.png';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.post('/boxes', {
      title: inputValue,
    });

    history.push(`/box/${response.data._id}`);
  }

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <Image
          src={logo}
          alt="Dropbox"
        />
        <Input
          type="text"
          placeholder="Criar um box"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <Button type="submit">Criar</Button>
      </Form>
    </MainContainer>
  );
}

export default Main;