'use client'

import {Providers} from "@/app/providers";
import {Avito, GlobalAppStyle} from "@/app/project-styles";

export default function RegisterLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
       <div>
           {children}
       </div>
    )
}