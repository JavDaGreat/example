
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



    //  cy.wait(500)
    //  cy.get("[class='shoes__button shoes__button--small']").eq(4).click()
    // cy.wait(200)
    // cy.get('[class="button booking__button"]').click()
    // cy.wait(1000)
    // cy.get("[class='input__field confirmation__input']").eq(0).should('have.value','2021-01-20 18:00')
    // cy.get("[class='input__field confirmation__input']").eq(3).invoke('val').should('not.be.empty')
    // cy.get("[class='confirmation__price'] p:nth-child(2)").should('have.text','680 sek')
    // cy.get("[class='navigation__icon']").click()
    // cy.wait(100)
    // cy.get(".navigation__link").eq(0).click()
    
    // cy.wait(1000)
    // cy.get("[class='navigation__icon']").click()
    // cy.get(".navigation__link").eq(1).click()




    
