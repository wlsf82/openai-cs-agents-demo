module.exports = {
  conversation_id: "d9e8f7c6-b5a4-3e2d-1c0b-9a8e7d6c5b4a",
  current_agent: "C3PO",
  messages: [
    {
      id: "123ABC",
      content: "Alright.",
      role: "assistant",
      agent: "C3PO",
      timestamp: "Tue Jun 24 2025 00:17:13 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "I'll transfer you to R2D2 so he can assit you with booking your flight, ok?",
      role: "assistant",
      agent: "C3PO",
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
      id: "d4e5f6a7-b8c9-4012-9c3d-4e5f6a7b8c9d",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "e5f6a7b8-c9d0-4123-9d4e-5f6a7b8c9d0e",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
