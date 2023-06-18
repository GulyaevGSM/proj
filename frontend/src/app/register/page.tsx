'use client'

import React from 'react';
import styled from "@emotion/styled";
import {InputUI} from "@/components/UI/InputUI";
import {ButtonUI} from "@/components/UI/Button";
import Link from "next/link";

const RegisterFrame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterBlock = styled.div`
  width: 470px;
  height: 230px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
  border-radius: 10px;
`

const Content = styled.div`
  min-width: 470px;
  height: auto;
  border-radius: 20px;
`

const Header = styled.div`
  padding: 0;
  font-size: 30px;
  margin-bottom: 10px;
`

const ModalForm = styled.div`
  width: 100%;
  padding: 36px;
  
  div {
    display: flex;
    
    div {
      color: #00aaff;
      margin-left: 5px;
      font-size: 17px;
      cursor: pointer;
      
      &:hover {
        color: #ff6163;
      }
    }
  }
  
  input {
    margin-bottom: 15px;
    background-color: #f5f5f5;
    width: 65%;
  }
`

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  button {
    border-radius: 6px;
    color: #fff;
    font-weight: normal;
    margin-bottom: 10px;
    word-break: break-word;
    text-align: center;
  }
`

const Register = () => {

    return (
        <RegisterFrame>
            <RegisterBlock>
                <Content>
                    <ModalForm>
                        <Header>Регистрация</Header>
                        <Form>
                            <InputUI
                                hover={{
                                    outline: 0,
                                    boxShadow: 0,
                                }}
                                focus={{
                                    outline: 0,
                                    boxShadow: 'none',
                                    border: '2px solid #00aaff'
                                }}
                                type='text'
                                placeholder='Введите свою почту'
                            />
                            <ButtonUI
                                style={{
                                    background: '#00aaff'
                                }}
                            >Продолжить</ButtonUI>
                        </Form>
                        <div>
                            <span>Уже есть профиль?</span>
                            <Link href='/'>
                                <div>Войти</div>
                            </Link>
                        </div>
                    </ModalForm>
                </Content>
            </RegisterBlock>
        </RegisterFrame>
    );
};

export default Register;
