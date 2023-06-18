'use client'
import { PropsWithChildren } from 'react';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import { store } from "@/services/redux/store";
import { SocketContext, socket } from '@/utils/context/SocketContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SocketContext.Provider value={socket}>
            <Provider store={store}>
                <CacheProvider>
                    <ChakraProvider>
                        {children}
                    </ChakraProvider>
                </CacheProvider>
            </Provider>
        </SocketContext.Provider >
    )
}