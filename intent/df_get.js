const { IntentsClient } = require("@google-cloud/dialogflow").v2;

function main(name) {
  let privateKey = ""
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
      name,
    };

    const response = await dialogflowClient.getIntent(request);
    console.log(response[0].messages[0]);
    console.log('response',response)
    console.log('messages', response[0].messages)
  }

  callGetIntent();
}

process.on("unhandledRejection", (err) => {
  console.error(err.message);
  process.exitCode = 1;
});

main(
  ""
);
