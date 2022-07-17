import { useEffect, useState } from 'react';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  function setTaskAndSave(newTasks: ITasks[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  function addTask(taskTitle: string) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTaks = tasks.filter(task => task.id !== taskId);
    setTaskAndSave(newTaks);
  }

  function toggleTaskCompleteById(taskId: string) {
    const newTaks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task;
    });

    setTaskAndSave(newTaks);
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompleteById} />
    </>
  )
}

export default App
