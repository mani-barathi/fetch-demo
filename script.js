// returns promise
// takes some time
//  resolve
//  reject
// then() way of writing

function getUser1() {
  const response = fetch("https://randomuser.me/api/")
    .then((response) => {
      // console.log(response.text());
      return response.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err);
    });
}

// async/await sytax
async function getData() {
  try {
    const response = await fetch("https://randomuser.me/api");
    const text = await response.json();
    console.log(text);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

async function getFromOurApi() {
  const response = await fetch("http://127.0.0.1:5000/data/get");
  const data = await response.json();
  console.log(data);
}

async function sendToApi() {
  const person = { name: "mani", age: "21" };

  const response = await fetch("http://127.0.0.1:5000/data/post", {
    method: "POST",
    body: JSON.stringify(person),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

// getData();
// getFromOurApi();
sendToApi();
