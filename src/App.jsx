import { useEffect, useState } from "react";
import client from "./mqttClient";

function App() {
  const [statusBroker, setStatusBroker] = useState("Teste Funcionando");
  const [lampadaSala, setLampadaSala] = useState("OFF");
  const [temperatura, setTemperatura] = useState("--");

  useEffect(() => {
    const inscreverTopicos = () => {
      client.subscribe("casa/sala/lampada/status");
      client.subscribe("casa/sensores/temperatura");
    };

    if (client.connected) {
      setStatusBroker("Conectado");
      inscreverTopicos();
    }

    client.on("connect", () => {
      setStatusBroker("Conectado");
      inscreverTopicos();
    });

    client.on("message", (topic, payload) => {
      const msg = payload.toString();

      if (topic === "casa/sala/lampada/status") {
        setLampadaSala(msg);
      }

      if (topic === "casa/sensores/temperatura") {
        setTemperatura(msg);
      }
    });

    client.on("error", () => {
      setStatusBroker("Erro na conexão");
    });

    client.on("close", () => {
      setStatusBroker("Desconectado");
    });
  }, []);

  const ligarLampada = () => {
    client.publish("casa/sala/lampada/comando", "ON");
  };

  const desligarLampada = () => {
    client.publish("casa/sala/lampada/comando", "OFF");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🏠 Casa Inteligente MQTT</h1>

      <h3>Corretor: {statusBroker}</h3>

      <hr />

      <h2>💡 Lâmpada Sala</h2>
      <p>Status: {lampadaSala}</p>

      <button onClick={ligarLampada}>Ligar</button>

      <button onClick={desligarLampada} style={{ marginLeft: "10px" }}>
        Desligar
      </button>

      <hr />

      <h2>🌡 Temperatura</h2>
      <p>{temperatura} °C</p>
    </div>
  );
}

export default App;