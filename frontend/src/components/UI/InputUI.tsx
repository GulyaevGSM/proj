import {Input} from "@chakra-ui/react";

export const InputUI = ({hover, focus, type, placeholder}: {hover?: object, focus?: object, type?: string, placeholder?: string}) => {
    return (
        <Input
            _hover={hover}
            _focus={focus}
            type={type}
            placeholder={placeholder}
        />
    )
}