import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

const TaskList = ({ tasks, onDeleteTask }) => {
  const handleDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  return (
    <ListContainer>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={() => handleDelete(task.id)} />
      ))}
    </ListContainer>
  );
};

export default TaskList;
