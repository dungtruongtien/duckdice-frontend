import styled from 'styled-components';

export const CheckBoxStyled = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid #5c6b78;
  border-radius: 50%;
  padding: 0.15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  border-color: ${(props) => (props.checked ? '#f6a623' : 'none')};
  ${(props) => !props.isDisabled && `&:hover {
      border-color: #f6a623;
    }`}
  .custom-radio-checkbox-inner { 
    background: ${(props) => (props.checked ? '#f6a623' : 'none')};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
`;
