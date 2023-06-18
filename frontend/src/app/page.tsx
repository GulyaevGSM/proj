'use client'

import { NextPage } from "next"
import './globals.scss'
import Home from "@/components/home/Home";
import {Header} from "@/components/header/Header";
import {Avito, GlobalAppStyle} from "@/app/project-styles";
import Rubricator from "@/components/rubricator/Rubricator";
import {useEffect, useState} from "react";
import {useAppSelector} from "@/services/redux/hooks";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const Page: NextPage = () => {
    const {rubricator, story} = useAppSelector(state => state.UIReducer)

    useEffect(() => {
        const UIBody = document.body
        rubricator || story ? disableBodyScroll(UIBody) : enableBodyScroll(UIBody)
    }, [rubricator, story])


    return (
       <>
           <Header />

           {
               rubricator ? (
                   <Rubricator />
               ) : null
           }

           <Avito>
               <GlobalAppStyle>
                   <Home />
               </GlobalAppStyle>
           </Avito>
       </>
    )
}

export default Page