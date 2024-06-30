import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Ensures items are spaced evenly, pushing delete button to the right */
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.taskBackground};
  border: 1px solid ${({ theme }) => theme.taskBorder};
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const TaskDetails = styled.div`
  flex: 1; /* Takes up remaining space */
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const DeleteButton = styled.button`
  background-color: #2eb82e;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d64531;
  }
`;

const TaskItem = ({ task, onDelete }) => {
  const themeContext = useContext(ThemeContext);
  const { title, description } = task;

  return (
    <TaskContainer theme={themeContext}>
      <TaskDetails>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TaskDetails>
      <DeleteButton onClick={onDelete}>Done</DeleteButton>
    </TaskContainer>
  );
};

export default TaskItem;
