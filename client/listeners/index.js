import store from '../redux/store';
import {
  getLobby,
  addNewLobby,
  removeOneLobby,
  toggleReady,
} from '../redux/actions/lobbyActions';

export default socket => {
  //when a player join a new lobby
  socket.on('newLobby', newLobby => {
    store.dispatch(getLobby(newLobby));
  });
  //other players update when a new l=player join lobby
  socket.on('addNewLobby', newLobby => {
    store.dispatch(addNewLobby(newLobby));
  });
  //when a player disconnect from the lobby
  socket.on('removeOneLobby', id => {
    store.dispatch(removeOneLobby(id));
  });
  //when a player hit ready
  socket.on('toggleReady', id => {
    store.dispatch(toggleReady(id));
  });
  //update other players when a player hit ready
  socket.on('newPlayerReady', id => {
    store.dispatch(toggleReady(id));
  });
};
