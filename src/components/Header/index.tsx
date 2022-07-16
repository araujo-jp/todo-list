import { AiOutlinePlusCircle } from 'react-icons/ai'

import logo from '../../assets/logo.svg';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="ToDo List" />

      <form className={styles.taskForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>

    </header>
  )
}