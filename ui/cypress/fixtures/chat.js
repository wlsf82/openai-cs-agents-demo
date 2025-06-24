module.exports = {
  conversation_id: "af4a5f3e-1f3d-409b-a2f8-bc43c6669be9",
  current_agent: "C3PO",
  messages: [{
    id: "123ABC",
    content: "Hey, there! How can I help you?",
    role: "assistant",
    agent: "C3PO",
    timestamp: "Tue Jun 24 2025 00:16:13 GMT+0200 (Central European Summer Time)"
  }],
  events: [
    {
      id: "a0d6e427-342b-4dee-b7ad-10525f83350b",
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
      id: "c663ce24-45b1-4a56-9d78-8dd9936b452f",
      type: "context_update",
      agent: "R5D4",
      content: "Client Elise cancelled her flight.",
      timestamp: "Tue Jun 20 2025 01:16:13 GMT+0200 (Central European Summer Time)",
      metadata: {}
    },
    {
      id: "9729f555-902b-4a16-8ebb-52223854fb52",
      type: "tool_call",
      agent: "BB8",
      content: "Client John with problems on his mobile app.",
      timestamp: "Tue Jun 20 2025 01:23:13 GMT+0200 (Central European Summer Time)",
      metadata: {}
    },
    {
      id: "9c2eb9f3-cf5d-4bc3-95c9-79805f4e5924",
      type: "tool_output",
      agent: "BB8",
      content: "Mobile app issue fixed.",
      timestamp: "Tue Jun 2 2025 03:33:33 GMT+0200 (Central European Summer Time)",
      metadata: {}
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
      id: "2da7c108-a5f9-4b12-b616-9421f0486296",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "a0d6e427-342b-4dee-b7ad-10525f83350b",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
