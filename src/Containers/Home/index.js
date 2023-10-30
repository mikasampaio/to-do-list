import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 } from 'uuid'
import * as Yup from 'yup'

import logoImage from '../../assets/listaDeTarefasLogo.svg'
import Button from '../../components/Button'
import { Card } from '../../components/Card'
import {
  Container,
  H1,
  Form,
  Input,
  ContainerInput,
  ErrorMessage
} from './styles'

const getLocalStorage = () => {
  let tasks = localStorage.getItem('tasks')
  if (tasks) {
    return (tasks = JSON.parse(localStorage.getItem('tasks')))
  } else {
    return []
  }
}

export function Home() {
  const [tasks, setTasks] = useState(getLocalStorage())
  const [data, setData] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addNewTask() {
    const newTask = {
      id: v4(),
      name: data,
      checked: false
    }
    setTasks([newTask, ...tasks])

    setData('')
  }

  console.log(data)

  function deleteTask(id) {
    const newTask = tasks.filter((activy) => activy.id !== id)

    setTasks(newTask)
  }

  function editTask(id, editedTask) {
    const allTasks = [...tasks]
    for (const i in allTasks) {
      if (allTasks[i].id === id) {
        allTasks[i].name = editedTask
      }
    }

    setTasks(allTasks)
  }

  function checkedTask(id, checked) {
    const index = tasks.findIndex((task) => task.id === id)
    tasks[index].checked = !checked

    setTasks([...tasks])
  }

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

  return (
    <Container>
      <img src={logoImage} />
      <H1>Lista de tarefas</H1>

      <Form noValidate onSubmit={handleSubmit(addNewTask)}>
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

      {tasks &&
        tasks.map((task) => (
          <Card
            checkedTask={checkedTask}
            editTask={editTask}
            key={task.id}
            task={task}
            deleteTask={deleteTask}
          />
        ))}
    </Container>
  )
}
