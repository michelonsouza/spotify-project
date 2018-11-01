import { Client } from "spotify-sdk";

const client = Client.instance;

client.settings = {
  clientId: "INSERIR_SEU_CLIENT_ID",
  secretId: "INSERIR_SUA_SECRET_ID",
  scopes: [
    "user-follow-modify user-follow-read user-library-read user-top-read"
  ],
  redirect_uri: process.env.VUE_APP_REDIRECT_URI
};

export default client;
