import store from '../redux/store';
import {getLobby, addNewLobby} from '../redux/actions/lobbyActions';

export default socket => {
  socket.on('newLobby', newLobby => {
    console.log('socket new lobby');
    store.dispatch(getLobby(newLobby));
  });
  socket.on('addNewLobby', newLobby => {
    console.log('add new lobby');
    store.dispatch(addNewLobby(newLobby));
  });
};
