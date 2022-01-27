import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
} from "./store/conversations";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
    console.log('add online user')
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
    console.log('remove offline user')

  });
  socket.on("new-message", (data) => {
    console.log("new-message data: ", data.message);
    store.dispatch(setNewMessage(data.message, data.sender));
  });
});

export default socket;
