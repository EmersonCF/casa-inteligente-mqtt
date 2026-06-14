import mqtt from "mqtt";

const options = {
  username: "emerson",
  password: "Emerson123",
  clean: true,
  connectTimeout: 4000,
};

const client = mqtt.connect(
  "wss://17cad28371b94249bcb23f241be4f351.s1.eu.hivemq.cloud:8884/mqtt",
  options
);

export default client;