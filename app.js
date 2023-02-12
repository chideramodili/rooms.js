/*const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('content.type', 'text/html')
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));*/

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
    //let theRoom = await getRoom();
    //let specificRoom = await getSpecificRoom(8);
    let deleted = deleteroom(rooms, 6);
  } catch (error) {
    console.log("error");
  }
}
myRoom();

/*function getRoom(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`here is your data`);
      resolve({ userEmail: email });
    }, 3000);
  });
}
function getVideo(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(["vid 1", "vid 2", "vid 3", "vid 4"]);
      resolve(["vid 1", "vid 2", "vid 3", "vid 4"]);
    }, 5000);
  });
}
async function mom() {
  try {
    let myRoom = await getRoom("dandelion@gmail.com", 123456789);
    let myVid = await getVideo(getRoom.userEmail);
  } catch (error) {
    console.log("error ");
  }
}
mom();
/*const user = getRoom("dandelion@gmail.com", 123456, user => {

  console.log(user);
  getVideo(user.userEmail, videos => {
    console.log(videos );
  });
});

console.log("finish");
//console.log(room);

/*let promise = new Promise(resolve => {
  setTimeout(() => {
    console.log("get the user");
    resolve(["vid 1", "vid 2", "vid 3"]);
  }, 5000);
});
let my = new Promise(resolve => {
  setTimeout(() => {
    console.log("get the user");
    resolve({ user: "eddi" });
  }, 5000);
});
Promise.all([promise, my]).then(result => console.log(result));*/
