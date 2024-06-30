import React, { useEffect } from 'react';
import styled from 'styled-components';
import TaskList from '../components/TaskList';
import useLocalStorage from '../hooks/useLocalStorage'; 

const TaskPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.body}; /* Ensure background matches theme */
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem; /* Added margin-bottom */
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
  }
`;

const TaskPage = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []); 

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    if (!title.trim() || !description.trim()) return; 

    const newTask = {
      id: Date.now(), 
      title,
      description
    };

    handleAddTask(newTask);

    
    e.target.title.value = '';
    e.target.description.value = '';
  };

  return (
    <TaskPageContainer>
      <Title>Tasks</Title>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Task title"
          name="title"
          required
        />
        <Input
          type="text"
          placeholder="Task description"
          name="description"
          required
        />
        <Button type="submit">Add Task</Button>
      </FormContainer>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </TaskPageContainer>
  );
};

export default TaskPage;
