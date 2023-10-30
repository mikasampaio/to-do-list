import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 55%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid rgba(242, 242, 242, 0.1);
  background: ${(props) =>
    props.checked ? 'rgba(128, 128, 128, 0.3)' : 'rgba(128, 128, 128, 0.1)'};

  div {
    display: flex;

    p {
      padding: 0 10px;
      text-align: justify;
      word-break: break-all;
      color: ${(props) => (props.checked ? '#D9D9D9' : '#FFFFFF')};
      text-decoration: ${(props) => (props.checked ? 'line-through' : '')};
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 10px;
`

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const ButtonCheck = styled.button`
  background: ${(props) => (props.checked ? '#009D65' : 'transparent')};
  border-radius: 50px;
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`
