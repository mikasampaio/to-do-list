import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'

import logoImage from '../../assets/listaDeTarefasLogo.svg'
import { Card } from '../../components/Card'
import Forms from '../../components/Form'
import { Container, H1 } from './styles'

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
  }

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

  return (
    <Container>
      <img src={logoImage} />
      <H1>Lista de tarefas</H1>

      <Forms
        key={tasks}
        addNewTask={addNewTask}
        data={data}
        setData={setData}
      />

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
