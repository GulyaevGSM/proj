import React from 'react';
import {
    AdsBackground,
    AdsBlock,
    AdsDate,
    AdsFrame,
    AdsGeo,
    AdsImage,
    AdsInfo,
    AdsPrice,
    AdsTitle,
    Title
} from "@/components/ads/Ads,styles";
import Image from "next/image";
import {GrFavorite} from "react-icons/gr";

const Ads = () => {
    return (
        <AdsBackground>
            <Title>
                Рекомендации для вас
            </Title>

            <AdsFrame>
                {
                    [1, 2, 3, 4, 5, 4, 5, 4, 5, 4].map(item => (
                        <AdsBlock>
                            <AdsImage>
                                <Image
                                    src='/ads.jpg'
                                    width={240}
                                    height={1}
                                    alt='ads pic'
                                />
                            </AdsImage>
                            <AdsInfo>
                                <div>
                                    <AdsTitle>
                                        Билеты в Московский планетарий Лунариум
                                    </AdsTitle>
                                    <AdsPrice>
                                        250 ₽
                                    </AdsPrice>
                                    <AdsGeo>
                                        Москва, Баррикадная
                                    </AdsGeo>
                                    <AdsDate>
                                        22 мая 14:03
                                    </AdsDate>
                                </div>

                                <GrFavorite size={25} />
                            </AdsInfo>
                        </AdsBlock>
                    ))
                }
            </AdsFrame>
        </AdsBackground>
    );
};

export default Ads;
