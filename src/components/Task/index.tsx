import { TbTrash } from 'react-icons/tb'

import styles from './styles.module.css'

export function Task() {
  return (
    <div className={styles.task}>

      <button className={styles.checkContainer}>
        <div /> 
      </button>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At architecto labore id? Impedit, incidunt iusto.</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>

    </div>
  )
}