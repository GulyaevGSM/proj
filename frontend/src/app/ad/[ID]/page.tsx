'use client'

import React from 'react';
import {
    AdDescription,
    AdFrame,
    AdImage, AdInfoOption,
    AdOptions,
    AdTitle,
    FirstBlock, Info,
    OtherAds,
    SecondBlock
} from "@/app/ad/[ID]/ad.styles";
import {MdFavorite} from 'react-icons/md'
import {GoGitCompare} from 'react-icons/go'
import {FaStickyNote} from 'react-icons/fa'
import {ButtonUI} from "@/components/UI/Button";
import Image from "next/image";
import {Textarea} from "@chakra-ui/react";

const Ad = ({params}: {params: any}) => {
    console.log(params)

    const arrayOption = [
        {
            text: 'Добавить в избранное',
            icon: <MdFavorite />
        },
        {
            text: 'Сравнить',
            icon: <GoGitCompare />
        },
        {
            text: 'Добавить заметку',
            icon: <FaStickyNote />
        }
    ]

    return (
        <AdFrame>
            <FirstBlock>
                <AdTitle>
                    Гидравлический трубогиб Rothenberger robull
                </AdTitle>
                <AdOptions>
                    {
                        arrayOption.map(item => (
                            <ButtonUI
                                icon={item.icon}
                            >
                                {item.text}
                            </ButtonUI>
                        ))
                    }
                </AdOptions>
                <AdImage>
                    <Image
                        src={'/kv.jpg'}
                        alt='ad'
                        width={630}
                        height={1}
                    />
                </AdImage>
                <AdDescription>
                    <div>
                        <AdTitle>Адрес</AdTitle>
                        <Info>Москва, Симферопольский б-р, 11</Info>
                    </div>

                    <div>
                        <AdTitle>Описание</AdTitle>
                        <Info>
                            Гидравлический трубогиб Rothenberger ROBULL тип E с открытой рамой - используют для многократного загиба труб под различными углами. Работает с трубами из углеродистой стали диаметром 3/8 – 2". Инструмент гнет трубы на угол до 90°. Гидравлическая система дает максимальную выталкивающую силу поршня до 150 kH. Возвратная пружина увеличивает точность гибки и контроль хода поршня. Инструмент прекрасно подходит как для работы в маленьких помещениях, так и в больших производственных цехах при монтаже систем газо- и водоснабжения, отопления и т.д. Для удобства в работе может устанавливаться на треногу.


                            Особенности:

                            Точная гибка благодаря шкале с указанием угла на упорах.

                            Сокращается количество мест сварки.

                            Отпадает необходимость нагрева трубы.

                            Отпадает необходимость в отводах.

                            Эффективная, высокопроизводительная работа благодаря мощности поршня 150 кН.

                            Легкое и простое управление.

                            Моноблочная закрытая гидравлическая система, требующая минимального технического ухода, с быстрым автоматическим обратным ходом поршня.

                            Приспособления легко и удобно обслуживать.



                            Комплектация:


                            Гидравлический трубогиб ROBULL (арт. 057950X)

                            Открытая гибочная рама (арт. 57981)

                            2 фиксирующих штыря (арт. 57979)

                            Упор (арт. 57983)

                            Упор с транспортиром (арт. 57982)

                            Гибочные сегменты типа Standard 90° 3/8”, 1/2”, 3/4", 1", 1.1/4", 1.1/2", 2"

                            Стальной чемодан (арт. 58206)

                            Тренога


                            💥ToolMarket

                            Ваши преимущества при покупке техники в нашем магазине 💥ToolMarket 💥

                            ⭐️Фирменный магазин с выставкой продукции, где вы сможете посмотреть технику в живую и получить подробную консультацию и техническое обслуживание.

                            ⭐️Мы регулярно проводим АКЦИИ совместно с представителями компаний в России.

                            ⭐️Мы предоставляем официальную гарантию производителя (на новый инструмент)

                            ⭐️С данной гарантией Вы можете обратиться в любой авторизованный сервисный центр

                            ⭐️Доставка по Москве и Московской области осуществляется курьерскими службами «Достависта»,«Яндекс Доставка»и тп службами доставки

                            ⭐️Доставки в регионы осуществляются Транспортными компания «Сдэк»,«Деловые линии»,«ПЭК» и тп .

                            ⭐️Оплата товара принимается наличными или перевод онлайн .

                            ⭐️Оплата товара Юр.лицами с НДС обсуждается индивидуально (не все группы товаров продаются по счёту и корпоративным картам).


                            💥ToolMarket

                            Мы являемся официальными представителями торговых марок

                            ⭐️Stihl/Штиль

                            ⭐️Metabo/Метабо

                            ⭐️Hikoki/Хайкоки

                            ⭐️Makita/Макита

                            ⭐️DeWalt /ДеВолт

                            ⭐️Stanley/Стенли

                            ⭐️Gross/Гросс

                            ⭐️Kraftool/Крафтул

                            ⭐️Sturm/Штурм

                            ⭐️Bihui/Бихай

                            ⭐️Condtrol/Кондтрол

                            ⭐️Ресанта/Ресанта

                            ⭐️Вихрь/Вихрь

                            ⭐️Зубр /Зубр

                            ⭐️P.I.T/ПИТ

                            ⭐️Huter/Хютер

                            ⭐️Kapro/Капро

                            ⭐️Hilberg/Хилберг

                            ⭐️Pegas/Пегас

                            ⭐️Denzel/Дензел

                            ⭐️Champion/Чемпион
                        </Info>
                    </div>

                    <div>
                        <AdTitle>Спросите у продавца</AdTitle>
                        <Textarea resize='none' placeholder='Здравствуйте!' />
                    </div>
                </AdDescription>
                <OtherAds>
                    Другие объявления
                </OtherAds>
            </FirstBlock>

            <SecondBlock>
                <AdTitle>24 999 ₽</AdTitle>
                <AdInfoOption>
                    <ButtonUI
                        style={{
                            background: '#02d15c'
                        }}
                    >Показать телефон</ButtonUI>
                    <ButtonUI
                        style={{
                            background: '#009CF0'
                        }}
                    >Написать сообщение</ButtonUI>
                    <div>
                        Пользователь <br/>
                        Частное лицо
                    </div>
                </AdInfoOption>
            </SecondBlock>
        </AdFrame>
    );
};

export default Ad;