import React from 'react';
import {
    Item,
    RubricatorBlock,
    RubricatorLeft, RubricatorOverlay,
    RubricatorRight
} from "@/components/rubricator/rubricator.styles";
import Image from "next/image";
import {useAppDispatch} from "@/services/redux/hooks";
import {changeRubricator} from "@/services/redux/slices/UISlice";

const Rubricator = () => {
    const dispatch = useAppDispatch()

    const handleClick = (event: any) => {
        if(event.target.getAttribute('data-close') == 'true') {
            dispatch(changeRubricator())
        }
    };

    return (
        <>
            <RubricatorOverlay data-close={true} onClick={handleClick}>
                <RubricatorBlock>
                    <RubricatorLeft>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item> <Item>
                        <div>
                            <Image
                                src='/item1.png'
                                width={28}
                                height={25}
                                alt='item1'
                            />
                            Транспорт
                        </div>
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                    </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                        <Item>
                            <div>
                                <Image
                                    src='/item1.png'
                                    width={28}
                                    height={25}
                                    alt='item1'
                                />
                                Транспорт
                            </div>
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.163 4.22a.946.946 0 0 0 0 1.06L11.659 10l-3.496 4.72a.945.945 0 0 0 0 1.06c.217.293.568.293.785 0l3.89-5.25a.946.946 0 0 0 0-1.06l-3.89-5.25c-.217-.293-.568-.293-.785 0Z" fill="#000"></path></svg>
                        </Item>
                    </RubricatorLeft>
                    <RubricatorRight>

                    </RubricatorRight>
                </RubricatorBlock>
            </RubricatorOverlay>
        </>
    );
};

export default Rubricator;
