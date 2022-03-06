import { useEffect, useState } from 'react';
import { Container, Content, TaskArea, TaskInfos, TaskList } from '../styles/tarefa';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { getDate } from '../util/tarefas'
import type { NextPage } from 'next'



const Tarefas: NextPage = () => {
  const [date, setDate] = useState('')
  const [task, setTask] = useState('');
  const [mode, setMode] = useState<'add' | 'edit'>('add')
  const [taskList, setTaskList] = useState<any[]>()

  useEffect(() => {
    setDate(getDate())
  }, [])

  return (
    <Container>
      <Content>

        <TaskArea>
          <TaskInfos>
            <h2>{mode === 'add' ? 'Adicionar tarefa' : 'Editar tarefa'}</h2>
            <span>{date}</span>
          </TaskInfos>
          <textarea
            value={task}
            placeholder="Digite sua tarefa aqui"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit'>Salvar</button>
        </TaskArea>

        <TaskList>
          <h3>Tarefas salvas</h3>
          {taskList ? taskList.map((task, index) => (
            <article key={index} className='list-container'>
              <span>Criado em: <span>{task.created}</span></span>
              <p className='list-description'>{task.tarefa}</p>
              <div className='list-buttons'>
                <button className='edit'>
                  <span>Editar </span> {<FaEdit size={'25px'} />}
                </button>
                <button className='delete'>
                  <span>Apagar </span>{<FaTrashAlt size={'25px'} />}
                </button>
              </div>
            </article>
          ))
            :
            <p>Nenhuma task adicionada!</p>
          }
        </TaskList>

      </Content>
    </Container>
  );
}

export default Tarefas;