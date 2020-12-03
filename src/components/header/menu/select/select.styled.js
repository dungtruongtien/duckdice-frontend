import styled from 'styled-components';

export const MenuStyled = styled.div`
  position: relative;
  .title {
    margin: 0;
  }
`;

export const OptionDropdown = styled.div`
  display: none; 
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;  
  ${MenuStyled}:hover & {
    display: block;
  }
  .option-main {
    display: flex;
    background: white;
    box-shadow: 0 5px 20px 0 rgba(23,43,77,.05), 0 5px 20px 0 rgba(23,43,77,.05);
  }
  .option-margin {
    margin-bottom: 3rem;
  }
`;

export const ItemOption = styled.div`
  width: 100px;
  border-right: ${(props) => !props.isLastItem && '1px solid #d9d9d9'};
  .option-title {
    margin: 5px 0px 0px 5px;
    font-size: 14px;
    color: #344563;
    font-weight: 500;
    padding: 0.2rem;
  }
  .option-wrapper {
    width: 100%; 
    display: flex; 
    align-items: center;
  }
  .option-item {
    img {
      height: 10px;
      width: 10px; 
      margin-right: 8px;
    }
    margin: 0; 
    display: flex;
    align-items: center;
    color: #6b778c;
    width: 100%;
    padding: 0.2rem;
    margin: 5px;
    border: 1px solid white;

    &:hover {
      border: 1px solid #ebecf0;
      border-radius: 20px;
      background: #ebecf0;
      color: #6b778c;
      padding: 0.2rem;
      margin: 5px;
    }
  }
`;
