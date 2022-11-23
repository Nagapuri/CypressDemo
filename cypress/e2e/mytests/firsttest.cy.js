/// <reference types="cypress" />

describe('my 1st test', () => {

    beforeEach('Open example.cypress.io', () => {
        cy.visit('https://example.cypress.io/todo')
    })
    it('my first it test', () => {
    
        cy.get('.todo-list li').should('have.length',2)
        cy.get('.todo-list li').first().should('have.text','Pay electric bill')
        cy.get('.todo-list li').last().should('have.text','Walk the dog')

    })

    it('my 2nd test', () => {
        cy.get('.new-todo').type('Fresh cherries{enter}')
    })

    it('my 3rd test', () => {
    cy.contains('Pay electric bill')
    .parent()
    .find('input[type=checkbox]')
    .check()

    cy.contains('Pay electric bill')
    .parents('li').should('have.class','completed')
    
    })




    it('4th test', () => {
        cy.contains('Pay electric bill')
          .parents('li').should('not.have.class','completed')
          
    })

     it('my 5th test', () => {
        cy.contains('Walk the dog')
          .parent()
          .children('input')
          .check()

          cy.wait(5000)
          cy.contains('Walk the dog')
          .parents('li',{timeout: 5000})
          .should('have.class','completed')

    })

    it('6th test', () =>{
        cy.contains('Walk the dog')
          .parents('li')
          .should('not.have.class','completed')
          
    })

    it('7th tests', () =>{
        cy.get('.new-todo')
        .type('Get some coffee', {delay: 100})
        .type('{selectall}{del}')
   
    })

})