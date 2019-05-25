import store from '../redux/store';
import {getLobby} from '../redux/actions/lobbyActions';

export default socket => {
  socket.on('newLobby', names => {
    console.log('socket new lobby')
    store.dispatch(getLobby(names));
  });
};
