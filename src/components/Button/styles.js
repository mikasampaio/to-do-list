import styled from 'styled-components'

export const Buttons = styled.button`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.isColor ? 'rgba(128, 128, 128, 0.3)' : '#0094c1'};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 100px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`
