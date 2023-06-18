import { createContext } from 'react';
import { io } from 'socket.io-client';

const REACT_APP_WEBSOCKET_URL = 'http://localhost:9000'

export const socket = io(REACT_APP_WEBSOCKET_URL!, {
    withCredentials: true,
});

export const SocketContext = createContext(socket);
