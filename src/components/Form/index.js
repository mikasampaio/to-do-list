import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import Button from '../Button'
import { ContainerInput, Input, Form, ErrorMessage } from './styles'

export default function Forms({ addNewTask, data, setData }) {
  const schema = Yup.object({
    data: Yup.string().required('Por favor, inserir uma tarefa!')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (form) => {
    addNewTask(form.data)
    setData('')
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <ContainerInput>
        <Input
          {...register('data')}
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <ErrorMessage>{errors.data?.message}</ErrorMessage>
      </ContainerInput>
      <Button type="submit">Adicionar</Button>
    </Form>
  )
}
