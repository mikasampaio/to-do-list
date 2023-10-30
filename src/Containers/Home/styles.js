import styled from 'styled-components'

export const Container = styled.div`
  background: #262626;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  img {
    width: 230px;
    margin: 20px 0;
  }
`

export const H1 = styled.h1``

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin: 30px 0 40px;
`

export const ContainerInput = styled.div`
  width: 45%;

  @media (max-width: 900px) {
    flex: 1 1 auto;
  }
`

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #e05f6b;
  font-size: 15px;
  font-weight: 500;
`

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: #262626;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 3px 10px;
  padding: 0 15px;
  font-weight: 500;
`
