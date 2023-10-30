import styled from 'styled-components'

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    maxWidth: '450px',
    width: '85%',
    height: '280px',
    border: 'none',
    background: '#262626',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, .5)'
  }
}

export const Form = styled.form`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #e05f6b;
  font-size: 15px;
  font-weight: 500;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

export const OpenButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`
