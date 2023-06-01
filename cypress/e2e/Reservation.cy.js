describe('Reservation  Page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173/')
    cy.wait(500)
  })
  it('Should be able to fill all field and book without any error', () => {
    cy.get('[name="when"]').type('2021-01-20')
    cy.get('[name="time"]').type('18:00')
    cy.get('[name="people"]').type('4')
    cy.get('[name="lanes"]').type('2')
    cy.get('.shoes__button').click().click().click().click()
    cy.get('.input__field.shoes__input').eq(0).type('38')
    cy.get('.input__field.shoes__input').eq(1).type('39')
    cy.get('.input__field.shoes__input').eq(2).type('42')
    cy.get('.input__field.shoes__input').eq(3).type('47')
    cy.get('[class="button booking__button"]').click()
  })
  it('Should be able to see the reservation id and correct total amount', () => {
    cy.get('[name="when"]').type('2021-01-20')
    cy.get('[name="time"]').type('18:00')
    cy.get('[name="people"]').type('4')
    cy.get('[name="lanes"]').type('2')
    cy.get('.shoes__button').click().click().click().click()
    cy.get('.input__field.shoes__input').eq(0).type('38')
    cy.get('.input__field.shoes__input').eq(1).type('39')
    cy.get('.input__field.shoes__input').eq(2).type('42')
    cy.get('.input__field.shoes__input').eq(3).type('47')
    cy.get('[class="button booking__button"]').click()
    cy.get("[class='input__field confirmation__input']").eq(0).should('have.value','2021-01-20 18:00')
    cy.get("[class='input__field confirmation__input']").eq(3).invoke('val').should('not.be.empty')
    cy.get("[class='confirmation__price'] p:nth-child(2)").should('have.text','680 sek')

  })

  it('Should be able to navigate between booking page and reservation page', () => {
    cy.get("[class='navigation__icon']").should('be.visible').click()
    cy.get(".navigation__link").eq(1).should('be.visible').click()
    cy.wait(500)
    cy.get("[class='navigation__icon']").should('be.visible').click()
    cy.get(".navigation__link").eq(0).should('be.visible').click()


})
})

