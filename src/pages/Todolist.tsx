import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCheckbox, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline, trashOutline } from 'ionicons/icons';
import './Todolist.css';

const Todolist: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = tasks[index] + ' (Completed)';
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
          <IonTitle>To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {tasks.map((task, index) => (
            <IonItem key={index} className="task-item">
              
              <IonLabel className={task.endsWith('(Completed)') ? 'completed-task' : ''}>{task}</IonLabel>
              <IonButton slot="end" fill="clear" onClick={() => deleteTask(index)}>
                <IonIcon icon={trashOutline} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
        <div className="add-task-container">
          <IonInput value={taskInput} placeholder="Enter task" onIonChange={handleTaskInputChange} className="add-task-input"></IonInput>
          <IonButton slot="end" onClick={addTask} className="add-task-button">Add</IonButton>
         
        </div>
        <IonButton expand="block" onClick={clearTasks}>Clear All Tasks</IonButton>
        <IonButton onClick={goBack}>Back</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;