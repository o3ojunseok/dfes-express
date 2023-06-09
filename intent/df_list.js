const { IntentsClient } = require("@google-cloud/dialogflow").v2;

function main(name) {
  let privateKey = "";
  let clientEmail = "";

  let config = {
    credentials: {
      private_key: privateKey,
      client_email: clientEmail,
    },
  };

  const dialogflowClient = new IntentsClient(config);

  async function callGetIntent() {
    const request = {
      parent: name,
    };

    const iterable = await dialogflowClient.listIntents(request);
    console.log(iterable[0][2].messages);
  }

  callGetIntent();
}

main("");
