import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { ITasks } from '../../App'

import styles from './styles.module.css'

interface props {
  task: ITasks;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: props) {
  const isCompletedTask = task.isCompleted
  const isTaskCompleted = task.isCompleted ? styles.textCompleted : '';

  function handleDeleteTask() {
    onDelete(task.id);
  }

  function handleCompleteTask() {
    onComplete(task.id);
  }

  return (
    <div className={styles.task}>

      <button onClick={handleCompleteTask} className={styles.checkContainer}>
        {isCompletedTask ? <BsFillCheckCircleFill/> : <div /> }
      </button>

      <p className={isTaskCompleted}>{task.title}</p>

      <button onClick={handleDeleteTask} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>

    </div>
  )
}