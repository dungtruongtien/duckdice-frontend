import { Button, Col, Row } from 'antd';
import styled from 'styled-components';

export const LoginButton = styled(Button)`
    border: 1px solid #465059;
    border-radius: 8px;
    line-height: 30px;
    min-width: 30px;
    padding: 0 7px;
    font-size: 11px;
    background: #465059;
    color: #8a99a5;
    transition: all .2s ease;
    text-decoration: none!important;
    margin-right: 1rem;
`;

export const RegisterButton = styled(Button)`
    border: 1px solid #f6a623;
    border-radius: 8px;
    line-height: 30px;
    min-width: 30px;
    padding: 0 7px;
    background: #f6a623;
    color: #fff;
    margin-right: 1rem;
`;

export const LeftMenuHeader = styled(Col)`
    display: flex;
    padding-left: 1rem;
    .app-logo {
        display: flex;
        align-items: center;
        a {
            display: flex;
        }
        img {
            margin-right: 0.5rem;
        }
        p {
            margin: 0;
            font-size: 25px;
            line-height: 39px;
            font-weight: 700;
            color: #fff;
        }
    }
    .menu-item {
        margin-left: 1.5rem;
        display: flex;
        align-items: center;
        a {
            color: #adbfce;
            margin: 0;
            font-weight: 400;
            font-size: 15px;
            font-family: Open Sans,sans-serif;
            cursor: pointer;
        }
        &:hover {
            color: #fff;
            border-bottom: 3px solid #f6a623;
        }
    }
`;

export const RightMenuHeader = styled(Col)`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .location-btn {
        background: #8c5679;
        width: 30px;
        height: 30px;
        border-radius: 6px;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        margin-right: 1rem;
        .fa-compass {
            animation-name: spin;
            animation-duration: 3000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear; 
        }
        @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }
    }
    .message-btn {
        background: #465059;
        width: 30px;
        height: 30px;
        border-radius: 6px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
`;

export const HeaderStyled = styled(Row)`
    border-bottom: 1px solid #ebecf0;
    background: #3a434b;
`;
