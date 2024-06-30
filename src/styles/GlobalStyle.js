import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    padding: 2rem;
  }

  header {
    background-color: ${({ theme }) => theme.header};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  nav a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.buttonBackground};
      color: ${({ theme }) => theme.buttonText};
    }
  }

  button {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.buttonBackgroundHover};
    }
  }

  form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default GlobalStyle;
