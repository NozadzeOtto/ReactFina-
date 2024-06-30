import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await apiClient.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const response = await apiClient.post('/tasks', task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  const updateTask = async (task) => {
    try {
      const response = await apiClient.put(`/tasks/${task.id}`, task);
      setTasks(tasks.map(t => (t.id === task.id ? response.data : t)));
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await apiClient.delete(`/tasks/${taskId}`);
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return { tasks, addTask, updateTask, deleteTask };
};

export default useTasks;
