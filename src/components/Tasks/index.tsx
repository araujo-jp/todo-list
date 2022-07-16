import styles from './styles.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header>
        
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>2 de 10</span>
        </div>
      
      </header>
    
    </section>
  )
}