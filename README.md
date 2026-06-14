# 🏠 Casa Inteligente MQTT

## 📖 Sobre o Projeto

O Casa Inteligente MQTT é uma aplicação distribuída desenvolvida para demonstrar conceitos de Internet das Coisas (IoT), sistemas distribuídos e comunicação assíncrona utilizando o protocolo MQTT.

O sistema permite o controle remoto de dispositivos e o monitoramento de sensores em tempo real através de uma interface web desenvolvida em React, integrada a um broker MQTT na nuvem (HiveMQ Cloud) e a um dispositivo ESP32 simulado no Wokwi.

A comunicação entre os componentes ocorre através do modelo Publish/Subscribe, onde os dispositivos trocam informações sem comunicação direta, tornando a arquitetura escalável e desacoplada.

---

## 🎯 Objetivos

- Demonstrar o funcionamento do protocolo MQTT.
- Aplicar conceitos de sistemas distribuídos.
- Simular um ambiente de automação residencial.
- Integrar uma interface web com dispositivos IoT.
- Utilizar comunicação em tempo real baseada em eventos.

---

## 🏗️ Arquitetura do Sistema

```text
Usuário
   │
   ▼
Frontend React
   │
   │ MQTT
   ▼
HiveMQ Cloud
   ▲
   │ MQTT
   │
ESP32 (Wokwi)
```

O broker MQTT atua como intermediário responsável por receber e distribuir mensagens entre os clientes conectados.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React
- Vite
- JavaScript
- MQTT.js

### Broker MQTT
- HiveMQ Cloud

### Dispositivo IoT
- ESP32 Simulado
- Wokwi

### Comunicação
- MQTT (Message Queuing Telemetry Transport)

---

## 📡 Tópicos MQTT Utilizados

| Tópico | Descrição |
|----------|------------|
| casa/sala/lampada/comando | Envio de comandos para a lâmpada |
| casa/sala/lampada/status | Estado atual da lâmpada |
| casa/sensores/temperatura | Publicação da temperatura |
| casa/dispositivo/status | Status de conexão do dispositivo |

---

## ⚙️ Funcionalidades

### Controle da Lâmpada
- Ligar lâmpada
- Desligar lâmpada
- Atualização de status em tempo real

### Monitoramento de Temperatura
- Simulação automática de sensor
- Atualização periódica dos dados
- Exibição em tempo real na interface

### Comunicação MQTT
- Publicação de mensagens (Publish)
- Assinatura de tópicos (Subscribe)
- Comunicação assíncrona
- Atualização instantânea dos dispositivos

---

## 🔄 Fluxo de Funcionamento

### Acionamento da Lâmpada

1. Usuário clica em "Ligar" ou "Desligar".
2. React publica uma mensagem MQTT.
3. HiveMQ recebe a mensagem.
4. ESP32 recebe o comando.
5. ESP32 altera o estado da lâmpada.
6. ESP32 publica o novo status.
7. React recebe e atualiza a interface.

### Monitoramento de Temperatura

1. ESP32 gera uma temperatura simulada.
2. Publica o valor no broker MQTT.
3. HiveMQ distribui a mensagem.
4. React recebe o valor.
5. Interface é atualizada automaticamente.

---

## 🚀 Como Executar

### Frontend

Instalar dependências:

```bash
npm install
```

Executar projeto:

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

---

## 📚 Conceitos Aplicados

- Sistemas Distribuídos
- Comunicação Assíncrona
- Internet das Coisas (IoT)
- Arquitetura Publish/Subscribe
- MQTT
- Computação em Nuvem
- Integração Frontend e Dispositivos Embarcados

---

## 👨‍💻 Autor

**Emerson Cardoso Fialho**

Projeto desenvolvido para a disciplina de Aplicações Distribuídas, demonstrando a implementação de uma solução IoT baseada em MQTT utilizando React, HiveMQ Cloud e ESP32.
