'use client'

import React from 'react'
import {CardBlock, CardFrame} from "@/components/card/card.styles"
import Image from 'next/image'
import {arrayCard} from "@/moc/data";

const Card = () => {

    return (
        <CardBlock>
            {
                arrayCard.map((item, index) => (
                    <CardFrame key={index + 1}>
                        <div>{item.name}</div>
                        <Image
                            src={item.img}
                            width={100}
                            height={60}
                            alt="Picture of the author"
                        />
                    </CardFrame>
                ))
            }
        </CardBlock>
    )
}

export default Card
