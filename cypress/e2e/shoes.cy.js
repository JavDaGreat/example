describe('Booking Page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173/')
    cy.wait(500)
  })
  it('Should be able to add shoes and fill shoe size', () => {

  cy.get('.shoes__button').click().click().click().click()
  cy.get('.input__field.shoes__input').eq(0).type('38').should('be.visible')
  cy.get('.input__field.shoes__input').eq(1).type('39').should('be.visible')
  cy.get('.input__field.shoes__input').eq(2).type('42').should('be.visible')
  cy.get('.input__field.shoes__input').eq(3).type('47').should('be.visible')
})

it('Should be able to delete if you clicked more shoes than it necessary', () => {
  cy.get('.shoes__button').click().click().click()
  cy.get('.input__field.shoes__input').eq(0).type('38')
  cy.get('.input__field.shoes__input').eq(1).type('39')
  cy.get("[class='shoes__button shoes__button--small']").eq(2).should('be.visible').click()


})



})