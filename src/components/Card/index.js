import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'

import EditModal from '../Modal/EditDialog'
import { Container, Button, ButtonCheck, ContainerButton } from './styles'

export function Card({ task, deleteTask, editTask, checkedTask }) {
  return (
    <Container checked={task.checked}>
      <div>
        <ButtonCheck
          checked={task.checked}
          onClick={() => checkedTask(task.id, task.checked)}
        >
          <AiOutlineCheckCircle />
        </ButtonCheck>

        <p>{task.name}</p>
      </div>

      <ContainerButton>
        <EditModal editTask={editTask} task={task} />
        <Button onClick={() => deleteTask(task.id)}>
          <FaRegTrashAlt />
        </Button>
      </ContainerButton>
    </Container>
  )
}
