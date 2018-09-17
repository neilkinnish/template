import React from 'react';
import styled from 'styled-components';

const Button = ({children}) => {
  const MyButton = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5em 1em;
    margin-top: 1em;
    background: white;
    color: black;
    border: 2px solid black;
  `;

  return (
    <MyButton
      onClick={() => {
        alert("It's your button!");
      }}>
      {children}
    </MyButton>
  );
};

export default Button;
