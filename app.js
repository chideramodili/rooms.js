const http = require("http");
const server = http.createServer((req, res) => {
 

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));

const rooms = require("./rooms");

function getRoom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(rooms);
    }, 6000);
  });
}
function getSpecificRoom(rooms, roomId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let idToremove = prompt("pls enter room ID to find");
      console.log(rooms[roomId - 1]);
    }, 4000);
  });
}
function deleteroom(rooms, deleteId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //let idToremove = prompt("pls enter room ID to find")
      const deletedRoom = rooms.findIndex(deleteId => rooms.id === deleteId);
      if (deletedRoom > -1) {
        return rooms;
      }
      console.log(deletedRoom);
    }, 4000);
  });
}

async function myRoom() {
  try {
    let theRoom = await getRoom();
    let specificRoom = await getSpecificRoom(8);
    let deleted = deleteroom(rooms, 6);
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}
myRoom();



    
