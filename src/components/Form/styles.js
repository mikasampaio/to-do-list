import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 45%;

  @media (max-width: 900px) {
    flex: 1 1 auto;
  }
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

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin: 30px 0 40px;
`

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #e05f6b;
  font-size: 15px;
  font-weight: 500;
`
