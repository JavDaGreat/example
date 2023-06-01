
describe('Booking Page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173/')
    cy.wait(500)
  })


  it('Should be an date and time input and possible to fill', () => {
    cy.get('[name="when"]').type('2021-01-20').should('be.visible')
    cy.get('[name="time"]').type('18:00').should('be.visible')
  })


  it(' There should be an players and lanes input filed and possible to fill and a button to book', () => {
    cy.get('[name="people"]').type('4').should('be.visible')
    cy.get('[name="lanes"]').type('2').should('be.visible')
    cy.get('[class="button booking__button"]').should('exist')

  })




  it('Should be able to fill an completed booking', () => {
    cy.get('[name="when"]').type('2021-01-20')
    cy.get('[name="time"]').type('18:00')
    cy.get('[name="people"]').type('4')
    cy.get('[name="lanes"]').type('2')
    cy.get('[class="button booking__button"]')
  })

})
