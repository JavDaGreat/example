describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.wait(500)
    cy.get('[name="when"]').type('2021-01-20')
    cy.get('[name="time"]').type('18:00')
    cy.get('[name="people"]').type('4')
    cy.get('[name="lanes"]').type('2')
    cy.wait(100)
    cy.get('.shoes__button').click().click().click().click().click()
    cy.get('.input__field.shoes__input').eq(0).type('38')
    cy.get('.input__field.shoes__input').eq(1).type('39')
    cy.get('.input__field.shoes__input').eq(2).type('42')
    cy.get('.input__field.shoes__input').eq(3).type('47')
     cy.wait(500)
     cy.get("[class='shoes__button shoes__button--small']").eq(4).click()
    cy.wait(200)
    cy.get('[class="button booking__button"]').click()
    cy.wait(1000)
    cy.get("[class='input__field confirmation__input']").eq(0).should('have.value','2021-01-20 18:00')
    cy.get("[class='input__field confirmation__input']").eq(3).invoke('val').should('not.be.empty')
    cy.get("[class='confirmation__price'] p:nth-child(2)").should('have.text','680 sek')
    cy.get("[class='navigation__icon']").click()
    cy.wait(100)
    cy.get(".navigation__link").eq(0).click()
    
    cy.wait(1000)
    cy.get("[class='navigation__icon']").click()
    cy.get(".navigation__link").eq(1).click()




    
  })
})
