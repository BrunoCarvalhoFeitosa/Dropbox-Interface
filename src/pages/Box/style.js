import styled from 'styled-components';

export const BoxContainer = styled.section `
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const CreateNewBox = styled.button `
  position: absolute;
  bottom: 15px;
  right: 20px;
  padding: 10px 20px;
  background: #1B66CA;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  color: #FFF;
  transition: .55s opacity;
  cursor: pointer;
  &:hover {
    opacity: .88;
  }
`;

export const BoxWrapper = styled.section `
  margin: 0 auto;
  max-width: 600px;
  height: 100vh;
  overflow-y: auto;
`;

export const Header = styled.header `
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Upload = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 22px;
  border: 1px solid #DDD;
  cursor: pointer;

  > p {
    text-align: center;
    color: #777;
  }
`;

export const Image = styled.img `
  width: 32px;
`;

export const TitleBox = styled.h2 `
  font-size: 24px;
  padding-left: 15px;
  margin-left: 15px;
  border-left: 1px solid #DDD;
`;

export const ListFilesUl = styled.ul `
  margin-top: 24px;
  list-style: none;
`;

export const ListFilesLi = styled.li `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #DDD;

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const FileName = styled.strong `
  margin-left: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const CreatedHour = styled.h3 `
  font-size: 12px;
  font-weight: 500;
  color: #BBB;
`;