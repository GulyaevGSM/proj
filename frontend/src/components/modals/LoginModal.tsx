import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import React from "react";
import {useDisclosure} from "@chakra-ui/hooks";
import {Checkbox} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {InputUI} from "@/components/UI/InputUI";
import {ButtonUI} from "@/components/UI/Button";
import Link from "next/link";

const Content = styled(ModalContent)`
  min-width: 470px;
  height: 624px;
  border-radius: 20px;
`

const Header = styled(ModalHeader)`
  padding: 0;
  font-size: 40px;
  margin-bottom: 10px;
`

const ModalForm = styled(ModalBody)`
  width: 100%;
  padding: 36px;
  
  input {
    margin-bottom: 15px;
    background-color: #f5f5f5;
  }

  button:nth-of-type(2) {
    border-radius: 6px;
    color: #fff;
    font-weight: normal;
    margin-bottom: 10px;
    word-break: break-word;
    text-align: center;
    font-size: 20px;
  }
`

export const MemberButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const Footer = styled(ModalFooter)`
  border-radius: 20px;
  background-color: #efeade;
  padding: 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  
  div {
    margin: 20px 0;
  }
  
  div:nth-of-type(2) {
    color: rgb(153, 153, 153);
    word-break: break-word;
    font-size: 15px;
  }
  
  button {
    background: #fff;
    color: #000;
    font-weight: normal;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

export const LoginModal = ({children}: {children: React.ReactNode}) => {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <span
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
                {children}
            </span>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <Content>
                    <ModalForm>
                        <Header>Вход</Header>
                        <ModalCloseButton />
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
                            placeholder='Почта'
                        />
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
                            placeholder='Пароль'
                        />
                        <MemberButtons>
                            <Checkbox colorScheme='green' defaultChecked>
                                Запомнить пароль
                            </Checkbox>
                            <span style={{color: '#00aaff'}}>Забыли пароль?</span>
                        </MemberButtons>
                        <ButtonUI
                            style={{
                                background: '#00aaff'
                            }}
                        >Войти</ButtonUI>
                    </ModalForm>
                    <Footer>
                        <div>Нет аккаунта на Авито?</div>
                        <Link href='/register'>
                            <ButtonUI>
                                Зарегистрироваться
                            </ButtonUI>
                        </Link>
                        <div>
                            При регистрации и входе вы соглашаетесь с условиями использования Авито и политикой обработки данных.
                        </div>
                    </Footer>
                </Content>
            </Modal>
        </>
    )
}