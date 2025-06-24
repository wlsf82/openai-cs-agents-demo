module.exports = {
  conversation_id: "c8f7e6d5-4c3b-2a1f-9e8d-7c6b5a4e3d2f",
  current_agent: "C3PO",
  messages: [
    {
      id: "123ABC",
      content: "We have one tomorrow at 3pm.",
      role: "assistant",
      agent: "C3PO",
      timestamp: "Tue Jun 24 2025 00:17:13 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Does that work for you?",
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
      id: "b2c3d4e5-f6a7-4890-9a1b-2c3d4e5f6a7b",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "c3d4e5f6-a7b8-4901-9b2c-3d4e5f6a7b8c",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
