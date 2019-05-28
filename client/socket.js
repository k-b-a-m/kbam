import listeners from './listeners/index';
const socket = io(window.location.origin);

export const initializeSocket = () => {
  socket.on('connect', () => {
    console.log('connected to server');

    listeners(socket);
  });
};

export default socket;
