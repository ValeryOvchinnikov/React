import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled.input`
    transform: ${props => (props.checked ? 'scale(1)' : 'scale(2)')};
    margin:10px;  
}
`;

export const StyledButton = styled.button`
  font: inherit;
  margin: 10px;
  height: 50px;
  width: 125px;
  min-width: 117px;
  background-color: #5e4bd8;
  border-radius: 7px;

  color: white;
  &&:hover {
    background: #3a2e85;
  }

  &&:focus {
    outline: none;
  }
`;
