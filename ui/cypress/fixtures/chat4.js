module.exports = {
  conversation_id: "e0f1a2b3-c4d5-6e7f-8a9b-0c1d2e3f4a5b",
  current_agent: "R2D2",
  messages: [
    {
      id: "123ABC",
      content: "Hey Byro, I'm R2D2 and I'll book your flight to NY tomorrow at 3pm.",
      role: "assistant",
      agent: "R2D2",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Can you please send your your passport number?",
      role: "assistant",
      agent: "R2D2",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    }
  ]
  ,
  events: [
    {
      id: "f6a7b8c9-d0e1-4234-9e5f-6a7b8c9d0e1f",
      type: "handoffs",
      agent: "C3PO",
      content: "",
      timestamp: "Tue Jun 24 2025 00:16:13 GMT+0200 (Central European Summer Time)",
      metadata: {
        source_agent: "string",
        target_agent: "string",
        tool_name: "string",
        tool_args: ["Record<string, any>"],
        tool_result: "any",
        context_key: "string",
        context_value: "any",
        changes: "Record<string, any>"
      }
    },
    {
      id: "a1b2c3d4-e5f6-4789-8a1b-2c3d4e5f6a7b",
      type: "context_update",
      agent: "R2D2",
      content: "Client Byro wants to schedule a flight to NY for tomorrow at 3pm.",
      timestamp: "Tue Jun 24 2025 00:16:13 GMT+0200 (Central European Summer Time)",
      metadata: {
        source_agent: "string",
        target_agent: "string",
        tool_name: "string",
        tool_args: ["Record<string, any>"],
        tool_result: "any",
        context_key: "string",
        context_value: "any",
        changes: ""
      }
    }
  ],
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
      id: "b3c4d5e6-f7a8-4901-9b2c-3d4e5f6a7b8c",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "c4d5e6f7-a8b9-4012-9c3d-4e5f6a7b8c9d",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
