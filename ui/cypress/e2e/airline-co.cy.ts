const chatObj = require('../fixtures/chat')
const messages = require('../fixtures/messages')

describe('Airline Co.', {viewportWidth: 1520, viewportHeight: 800}, () => {
  beforeEach(() => {
    cy.intercept('POST', '/chat', chatObj).as('chatResponse')
    cy.visit('/')
    cy.wait('@chatResponse')

    cy.contains('h2', 'Available Agents')
      .should('be.visible')
      .next()
      .as('agents')
      .find('div:contains(C3PO)')
      .should('be.visible')
      .and('contains.text', 'Active')

    cy.contains('h2', 'Customer View')
      .should('be.visible')
      .parent()
      .next()
      .as('chatHistory')
      .find('div:contains(Hey, there! How can I help you?)')
      .should('be.visible')
  })

  it('gets an answer right after asking a question to the active agent', () => {
    const updatedChat = {
      ...chatObj,
      messages
    }
    cy.intercept('POST', '/chat', updatedChat).as('chatResponse2')
    cy.get('textarea[placeholder="Message..."]')
      .type('What is your next available flight to NY?')
    cy.get('button').click()
    cy.wait('@chatResponse2')

    cy.get('@chatHistory')
      .find('div:contains(We have one tomorrow at 3pm.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Does that work for you?)')
      .should('be.visible')
  })

  it('hides and shows the agents', () => {
    cy.get('.lucide-chevron-down')
      .first()
      .click()

    cy.get('@agents').should('not.exist')

    cy.get('.lucide-chevron-right').click()

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(C3PO)')
      .should('be.visible')
      .and('contains.text', 'Active')

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(R2D2)')
      .should('be.visible')

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(BB8)')
      .should('be.visible')
  })

  it('hides and shows the conversation context', () => {
    cy.get('.lucide-chevron-down')
      .eq(2)
      .click()

    cy.contains('h2', 'Conversation Context')
      .should('be.visible')
      .next()
      .should('not.exist')

    cy.get('.lucide-chevron-right').click()

    cy.contains('h2', 'Conversation Context')
      .should('be.visible')
      .next()
      .as('context')
      .should('be.visible')
      .find('div:contains(passenger_name: Byro)')
      .should('be.visible')

    cy.get('@context')
      .should('be.visible')
      .find('div:contains(account_number: 442679)')
      .should('be.visible')
  })
})
