import {Button} from "@chakra-ui/react";
import React from "react";

export const ButtonUI = ({children, size, icon, hover, style, fn}: { children: React.ReactNode, size?: string, icon?: any, hover?: object, style?: any, fn?: any }) => {
    return (
        <Button
            onClick={fn}
            style={style}
            leftIcon={icon}
            size={size}
            _hover={hover}
        >
            {children}
        </Button>
    )
}
