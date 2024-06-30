import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Welcome to the Task Management Tool</Title>
      <Description>Manage your tasks efficiently and stay organized. Create, read, update, and delete tasks easily.</Description>
      <Button to="/tasks">Get Started</Button>
    </HomePageContainer>
  );
};

export default HomePage;
