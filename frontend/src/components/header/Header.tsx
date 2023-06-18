import {GeneralFrame, FirstFrame, SecondFrame, SecondBlock, SVGIcon, StyledMdFavorite} from "./header.styles"
import {MdFavorite} from 'react-icons/md'
import {InputGroup, InputRightElement} from '@chakra-ui/react'
import {CloseIcon, SearchIcon, SmallCloseIcon} from "@chakra-ui/icons";
import {ButtonUI} from "@/components/UI/Button";
import {InputUI} from "@/components/UI/InputUI";
import {LoginModal} from "@/components/modals/LoginModal";
import {useAppDispatch, useAppSelector} from "@/services/redux/hooks";
import {changeRubricator} from "@/services/redux/slices/UISlice";
import { useEffect, useState } from "react";
import { log } from "console";

export const Header = () => {
    const dispatch = useAppDispatch()
    const {rubricator} = useAppSelector(state => state.UIReducer)

    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        const detectScroll = () => {
            window.onscroll = () =>
            window.pageYOffset === 0 ? setShadow(false) : setShadow(true) 
            rubricator ? setShadow(false) : null
          return () => (window.onscroll = null);
        }

        detectScroll()
    }, []);

    return (
        <GeneralFrame>
            <div style={{
                background: '#292929'
            }}>
                <FirstFrame>
                    <div>
                        Для бизнеса
                    </div>

                    <SecondBlock>
                        <StyledMdFavorite
                            size={25}
                            style={{
                                cursor: 'pointer'
                            }} />
                        <LoginModal>
                            <span>
                                Вход и регистрация
                            </span>
                        </LoginModal>
                        <ButtonUI
                            hover={{
                                background: '#0264ab'
                            }}
                        >Разместить объявление</ButtonUI>
                    </SecondBlock>
                </FirstFrame>
            </div>

            <SecondFrame shadow={shadow}>
                <SVGIcon>
                    <svg width="109" height="30" viewBox="0 0 109 30" xmlns="http://www.w3.org/2000/svg"><path d="m41.426.62-9.361 24.443h5.028l1.924-5.107h9.933l1.932 5.107h4.991L46.57.62h-5.144Zm-.683 14.85 3.27-8.6 3.256 8.6h-6.526Zm21.14 3.29-4.06-10.868h-4.797l6.539 17.17h4.755l6.423-17.17h-4.797L61.882 18.76ZM76.776 7.892h-4.565v17.17h4.565V7.892Zm-2.285-1.237a3.327 3.327 0 1 0 0-6.655 3.327 3.327 0 0 0 0 6.655ZM85.823 3.31h-4.552v4.552h-2.67v4.138h2.67v7.297c0 4.138 2.28 5.918 5.492 5.918a7.864 7.864 0 0 0 3.157-.617v-4.254c-.545.2-1.12.304-1.7.31-1.395 0-2.4-.542-2.4-2.4v-6.253h4.1V7.904h-4.097V3.311Zm13.694 4.27a8.898 8.898 0 1 0-.008 17.796 8.898 8.898 0 0 0 .008-17.795Zm0 13.244a4.333 4.333 0 1 1 4.329-4.333 4.323 4.323 0 0 1-4.329 4.316v.017Z" fill="#000"></path><circle cx="10.595" cy="5.225" r="3.325" fill="#965EEB"></circle><circle cx="22.245" cy="7.235" r="7.235" fill="#0AF"></circle><circle cx="8.9" cy="18.6" r="8.9" fill="#04E061"></circle><circle cx="24.325" cy="21.005" r="5.375" fill="#FF4053"></circle></svg>
                </SVGIcon>

                <ButtonUI
                    fn={() => dispatch(changeRubricator())}
                    size='md'
                    icon={!rubricator ? <SearchIcon /> : <CloseIcon />}
                    hover={{
                        background: '#0783c5'
                    }}
                >
                    Все категории
                </ButtonUI>

                <InputGroup size='md'>
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
                        placeholder='Поиск по объявлениям'
                    />
                    <InputRightElement width='4.5rem'>
                        <ButtonUI
                            hover={{
                                background: '#0783c5'
                            }}
                            size='sm'
                        >
                            Найти
                        </ButtonUI>
                    </InputRightElement>
                </InputGroup>
            </SecondFrame>
        </GeneralFrame>
    )
}