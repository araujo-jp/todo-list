import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import logo from '../../assets/logo.svg';
import styles from './styles.module.css';

interface props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: props) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="ToDo List" />

      <form onSubmit={handleSubmit} className={styles.taskForm}>
        <input
          onChange={onChangeTitle}
          value={title}
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