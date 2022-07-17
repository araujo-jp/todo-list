import { TbClipboardText } from 'react-icons/tb'

import { ITasks } from '../../App'
import { Task } from '../Task'

import styles from './styles.module.css'

interface props {
  tasks: ITasks[]
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: props) {
  const numberTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header>

        <div>
          <p>Tarefas criadas</p>
          <span>{numberTasks}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{completedTasks} de {numberTasks}</span>
        </div>

      </header>

      <div className={styles.list}>
        {tasks.map(task => {
          return (
            <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
          )
        })}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>

    </section>
  )
}