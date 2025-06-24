module.exports = {
  conversation_id: "f1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c",
  current_agent: "R2D2",
  messages: [
    {
      id: "123ABC",
      content: "There you go.",
      role: "assistant",
      agent: "R2D2",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "You are booked for tomorrow at 3pm for the flight number AB123 to NY.",
      role: "assistant",
      agent: "R2D2",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Your seat nuber is: 5A.",
      role: "assistant",
      agent: "R2D2",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Have a good flight!",
      role: "assistant",
      agent: "R2D2",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    }
  ]
  ,
  events: [],
  context: {
    passenger_name: "Byro",
    confirmation_number: "8875",
    seat_number: "3A",
    flight_number: "JK333",
    account_number: "442679"
  },
  agents: [
    {
      name: "C3PO",
      description: "Star Wars robot",
      handoffs: [],
      tools: [],
      input_guardrails: [
        "Relevance Guardrail",
        "Jailbreak Guardrail"
      ]
    },
    {
      name: "R2D2",
      description: "Star Wars robot",
      handoffs: [],
      tools: [],
      input_guardrails: [
        "Relevance Guardrail",
        "Jailbreak Guardrail"
      ]
    },
    {
      name: "BB8",
      description: "Star Wars robot",
      handoffs: [],
      tools: [],
      input_guardrails: ["Relevance Guardrail"]
    },
    {
      name: "R5D4",
      description: "Star Wars robot",
      handoffs: [],
      tools: [],
      input_guardrails: ["Jailbreak Guardrail"]
    },
    {
      name: "C1-10P",
      description: "Star Wars robot",
      handoffs: [],
      tools: [],
      input_guardrails: []
    }
  ],
  guardrails: [
    {
      id: "c5d6e7f8-a9b0-4123-9c4d-5e6f7a8b9c0d",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "d6e7f8a9-b0c1-4234-9d5e-6f7a8b9c0d1e",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
