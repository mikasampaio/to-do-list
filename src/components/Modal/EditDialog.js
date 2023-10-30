import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import Modal from 'react-modal'
import * as Yup from 'yup'

import { Input } from '../../Containers/Home/styles'
import Button from '../Button'
import {
  ErrorMessage,
  customStyles,
  OpenButton,
  ContainerButton,
  ContainerInput,
  Form
} from './styles'

export default function EditModal({ task, editTask }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [editedTask, setEditedTask] = useState(task.name)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const onSubmit = () => {
    editTask(task.id, editedTask)
    closeModal()
  }

  const schema = Yup.object({
    task: Yup.string().required('Campo obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <>
      <OpenButton onClick={openModal}>
        <HiOutlinePencilAlt />
      </OpenButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h1>Editar tarefa</h1>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerInput>
            <Input
              style={{ width: '100%' }}
              {...register('task')}
              placeholder="Editar tarefa..."
              defaultValue={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
            <ErrorMessage>{errors.task?.message}</ErrorMessage>
          </ContainerInput>
          <ContainerButton>
            <Button isColor={true} onClick={closeModal}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </ContainerButton>
        </Form>
      </Modal>
    </>
  )
}
