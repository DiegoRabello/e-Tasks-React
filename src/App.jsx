import { useState } from "react";
import { Header } from "./components/header";
import styles from "./styles/App.module.css";
import {STORAGE_SERVICE} from "./services/storage"

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState( () => STORAGE_SERVICE.listTasks());
 

  function handleClick () {
    if(!inputValue) {
      return alert ('A tarefa precisa de uma descrição')
    }

    const newTask = {
      description: inputValue,
      isCompleted : false,
    }

    setTasks((prevState) => [...prevState, newTask])
    
    STORAGE_SERVICE.createTask(inputValue)
    setInputValue('')
  }
  
  function handleCheckboxChange(event) {
    STORAGE_SERVICE.updateTaskState(event.target.value)
    const updatedTasks = STORAGE_SERVICE.listTasks()
    setTasks( updatedTasks)
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles['form-container']}>
          <input type="text" placeholder="Adicione uma nova tarefa" onChange={(e) =>setInputValue(e.target.value)}
          value={inputValue}/>
          
          <button id="button_create" onClick={handleClick} type="button">
            Cadastrar
          </button>
        </section>
        
        <section>
          <header className={styles.tarefas}>
              <div className={styles.info}>
              <h5>Tarefas criadas</h5>
              <span className={styles.countTasks}>{totalTasks}</span> 
          </div>
          <div className={styles.info}>
              <h5>Concluidas</h5>
              <span className={styles.countFinisheds}>{completedTasks}</span>
          </div>
          </header>
      </section>
      {tasks.length ===0 && <p>Sem tarefas no momento</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.description} >
            <input type="checkbox"  
              onChange={handleCheckboxChange}
              value={task.description}
              checked = {task.isCompleted}
            />

            <strong>{task.description}</strong>
            
          </li>
          
        ))}
      </ul>
      </main>
    </>
  );
}

export default App;