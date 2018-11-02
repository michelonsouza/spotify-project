import { Client } from "spotify-sdk";

const client = Client.instance;

client.settings = {
  clientId: "63dec9595d174907b1bf785013c216f9",
  secretId: "c2d80b82224642cfa28e69fa49050cef",
  scopes: [
    "user-follow-modify user-follow-read user-library-read user-top-read"
  ],
  redirect_uri: process.env.VUE_APP_REDIRECT_URI
};

export default client;
