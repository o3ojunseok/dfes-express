const { IntentsClient } = require("@google-cloud/dialogflow").v2;

function main(parent, intent) {
  let privateKey = ""
  let clientEmail = "";

  let config = {
    credentials: {
      private_key: privateKey,
      client_email: clientEmail,
    },
  };

  const dialogflowClient = new IntentsClient(config);

  async function callCreateIntent() {
    const request = {
      parent,
      intent,
    };

    const response = await dialogflowClient.createIntent(request);
    console.log(JSON.stringify(response[0].messages[0].payload, null, 2));
    console.log(response);
  }

  callCreateIntent();
}

process.on("unhandledRejection", (err) => {
  console.error("err---", err.message);
  process.exitCode = 1;
});

main("projects/mango-dev-cvnd/agent", {
  displayName: "intentName",
  messages: [{ payload: {} }],
});
