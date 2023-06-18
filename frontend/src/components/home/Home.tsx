import React, {useState} from 'react';
import {
    CacheAd, CacheAdPrice,
    CacheAdTitle, CacheBlock,
    CacheTitle,
    FirstHomeFrame,
    HomeFrame,
    SecondHomeFrame
} from "@/components/home/home.styles";
import Card from "@/components/card/Card";
import Story from "@/components/story/Story";
import Ads from "@/components/ads/Ads";
import Image from "next/image";
import Rubricator from "@/components/rubricator/Rubricator";

const Home = () => {


    return (
        <HomeFrame>

            <FirstHomeFrame>
                <Card/>
                <Story />
                <Ads />
            </FirstHomeFrame>
            <SecondHomeFrame>
                <CacheTitle>Вы смотрели</CacheTitle>

                <CacheAd>
                    <CacheBlock>
                        <div>
                            <Image
                                src='/pic.jpg'
                                width={100}
                                height={75}
                                alt='ad-pic'
                            />
                        </div>

                        <div>
                            <CacheAdTitle>
                                Могитор acer 27 G276HL
                            </CacheAdTitle>
                            <CacheAdPrice>
                                5 000 ₽
                            </CacheAdPrice>
                        </div>
                    </CacheBlock>

                    <CacheBlock>
                        <div>
                            <Image
                                src='/pic.jpg'
                                width={100}
                                height={75}
                                alt='ad-pic'
                            />
                        </div>

                        <div>
                            <CacheAdTitle>
                                Могитор acer 27 G276HL
                            </CacheAdTitle>
                            <CacheAdPrice>
                                5 000 ₽
                            </CacheAdPrice>
                        </div>
                    </CacheBlock>

                    <CacheBlock>
                        <div>
                            <Image
                                src='/pic.jpg'
                                width={100}
                                height={75}
                                alt='ad-pic'
                            />
                        </div>

                        <div>
                            <CacheAdTitle>
                                Могитор acer 27 G276HL
                            </CacheAdTitle>
                            <CacheAdPrice>
                                5 000 ₽
                            </CacheAdPrice>
                        </div>
                    </CacheBlock>
                </CacheAd>
            </SecondHomeFrame>
        </HomeFrame>
    );
};

export default Home;
