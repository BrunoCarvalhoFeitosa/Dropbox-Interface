import styled from 'styled-components';

export const MainContainer = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Form = styled.form `
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Image = styled.img `
  margin: 0 auto;
  width: 54px;
  cursor: pointer;
`;

export const Input = styled.input `
  margin-top: 30px;
  height: 48px;
  padding: 0 20px;
  border: 1px solid #DDD;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button `
  margin-top: 10px;
  height: 48px;
  padding: 0 20px;
  background: #1B66CA;
  border: 1px solid #DDD;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #FFF;
  transition: .55s opacity;
  opacity: .9;
  cursor: pointer;
  &:hover {
    opacity: .78;
  }
`;