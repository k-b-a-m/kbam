import store from '../redux/store';
import {
  getLobby,
  addNewLobby,
  removeOneLobby,
} from '../redux/actions/lobbyActions';

export default socket => {
  socket.on('newLobby', newLobby => {
    store.dispatch(getLobby(newLobby));
  });
  socket.on('addNewLobby', newLobby => {
    store.dispatch(addNewLobby(newLobby));
  });
  socket.on('removeOneLobby', id => {
    store.dispatch(removeOneLobby(id));
  });
};
