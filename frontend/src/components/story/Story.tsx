import React from 'react';
import {CurrentStory, IconClose, Img, StoryBlock, StoryFrame, Text} from "@/components/story/story.styles";
import Image from "next/image";
import {arrayStories} from "@/moc/data";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import {useAppDispatch, useAppSelector} from "@/services/redux/hooks";
import { changeStory } from '@/services/redux/slices/UISlice';
import {OverlayFrame} from "@/components/home/home.styles";
import {ButtonUI} from "@/components/UI/Button";
import {CloseIcon} from "@chakra-ui/icons";

const Story = () => {

    const dispatch = useAppDispatch()
    const {story} = useAppSelector(state => state.UIReducer)

      const handleClick = (event: any) => {
        if(event.target.getAttribute('data-close') == 'true') {
            dispatch(changeStory())
        }
    };

    return (
        <>
                    <StoryBlock>
                        {
                            story ? (
                                <OverlayFrame data-close={true} onClick={handleClick}>
                                <CurrentStory>
                                    <Image
                                        src='/ping.png'
                                        width={900}
                                        height={900}
                                        alt='pic'
                                    />
                                    <div>
                                        Как сэкономить 1 млн ₽ на капремонте в старом фонде
                                    </div>
                                    <span>
Капитальный ремонт в старом фонде — непростая задача даже для тех, кто разбирается в теме.
                        </span>
                                    <a target='_blank' href="https://www.avito.ru/journal/articles/kak-sekonomit-na-kapremonte-v-starom-dome?context=H4sIAAAAAAAA_0q0MrSqLraysFJKK8rPDUhMT1WyLrYyNLRSKi7JL6qMtzAxtTJQsq4FBAAA___jGMEeKAAAAA">
                                        <ButtonUI
                                            size='md'
                                            hover={{
                                                background: '#0783c5'
                                            }}
                                        >
                                            Читать статью
                                        </ButtonUI>
                                    </a>
                                    <IconClose onClick={() => dispatch(changeStory())}>
                                        <CloseIcon color={'#fff'} _hover={{
                                            color: '#a2a1a1'
                                        }} />
                                    </IconClose>
                                </CurrentStory>
                                </OverlayFrame>
                            ) : null
                        }
                        <Swiper
                            slidesPerView={9.5}
                        >
                            {
                                arrayStories.map((item, index) => (
                                    <SwiperSlide key={index + 1}>
                                        <StoryFrame onClick={() => dispatch(changeStory())}>
                                            <Img>
                                                <Image
                                                    src='https://60.img.avito.st/image/1/1.g9hPC7ax5U37eC_j-xTckEonLDP5qik1.x2iuC5nXyRlm6AODIcK3_dqtcIov3Oufw1AOcfKgY3s'
                                                    width={100}
                                                    height={100}
                                                    alt="Picture of the author"
                                                />
                                            </Img>
                                            <Text>
                                                {item.text}
                                            </Text>
                                        </StoryFrame>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </StoryBlock>
        </>
    );
};

export default Story;
