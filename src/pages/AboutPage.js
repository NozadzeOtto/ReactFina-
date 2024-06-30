import React from 'react';
import styled from 'styled-components';

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <Title>About Us</Title>
      <Content>
        Our Task Management Tool is designed to help users organize their tasks
        efficiently. With features like task creation, editing, and deletion,
        users can easily manage their daily tasks or to-do lists. The
        application utilizes modern web technologies such as React for a smooth
        and responsive user experience. It also integrates with a backend API
        for seamless data storage and retrieval, ensuring data persistence and
        reliability. Whether you're a professional managing complex projects or
        an individual organizing personal tasks, our tool provides the
        flexibility and functionality you need to stay productive.
      </Content>
    </AboutPageContainer>
  );
};

export default AboutPage;
