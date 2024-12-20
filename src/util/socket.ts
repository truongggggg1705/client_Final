import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket'],
  auth: {
    token: localStorage.getItem('accessToken'), 
  },
});

export default socket;