import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import api from '../../services/api';
import { MdInsertDriveFile } from 'react-icons/md';
import {
  BoxContainer,
  BoxWrapper,
  Header,
  Upload,
  Image,
  TitleBox,
  ListFilesUl,
  ListFilesLi,
  FileName,
  CreatedHour,
  CreateNewBox,
} from './style';
import logo from '../../assets/dropbox.png';

const Box = (props) => {
  const [ box, setBox] = useState('');
  
  useEffect(() => {
    const getBox = async () => {
      const box = props.match.params.id;
      const response = await api.get(`/boxes/${box}`);
      
      setBox(response.data);
    }

    getBox();
  }, [props.match.params.id]);

  const handleUpload = (files) => {
    files.forEach(file => {
      const data = new FormData();
      const box = props.match.params.id;

      data.append('file', file);
      api.post(`/boxes/${box}/files`, data);
    });
  };

  return (
  <BoxContainer>
    <Link to="/">
      <CreateNewBox>Criar um novo box</CreateNewBox>
    </Link>
    <BoxWrapper>
      <Header>
        <Link to="/">
          <Image src={logo} alt="Dropbox" />
        </Link>
        <TitleBox>{box.title}</TitleBox>
      </Header>

      <Dropzone onDropAccepted={handleUpload}>
        {({ getRootProps, getInputProps }) => (
          <Upload { ...getRootProps() }>
            <input { ...getInputProps() } />
            <p>Arraste arquivos ou clique aqui...</p>
          </Upload>
        )}
      </Dropzone>

      <ListFilesUl>
        {box.files && box.files.map(file => (
          <ListFilesLi key={file._id}>
            <Link to={file.url} target="_blank">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <FileName>{file.title}</FileName>
            </Link>
            <CreatedHour>
              {file.createdAt}
            </CreatedHour>
          </ListFilesLi>
        ))}
      </ListFilesUl>
    </BoxWrapper>
  </BoxContainer>
   
  );
}

export default Box;