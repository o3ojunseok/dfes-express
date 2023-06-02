function main(intent) {
  const { IntentsClient } = require("@google-cloud/dialogflow").v2;

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
      intent,
    };

    const response = await dialogflowClient.updateIntent(request);
    console.log(response);
  }

  callGetIntent();
}

process.on("unhandledRejection", (err) => {
  console.error(err.message[0]);
  process.exitCode = 1;
});

main({
  name: "",
  displayName: "테스트",
  messages: [
    {
      payload: {
        fields: {
          object: {
            structValue: { fields: { text: { stringValue: "안녕" } } },
          },
        },
      },
      message: "payload",
    },
  ],
});
