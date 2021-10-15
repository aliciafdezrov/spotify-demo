describe('Login tests', () => {
    it('App navigates to /catalog if API auth call works', () => {
        cy.visit('/', {
            onBeforeLoad(win: Cypress.AUTWindow) {
                win.sessionStorage.clear()
            }
        });
        let loginButton = cy.get('#login-button');
        loginButton.click();
        cy.url().should('include', '/catalog')
    })

    it('App should not navigate /catalog if auth call fails', () => {
        cy.intercept('POST', 'https://accounts.spotify.com/api/token', {
            body: {error: "invalid_client"},
            statusCode: 400
        })
        cy.visit('/', {
            onBeforeLoad(win: Cypress.AUTWindow) {
                win.sessionStorage.clear()
            }
        });
        let loginButton = cy.get('#login-button');
        loginButton.click();
        cy.url().should('not.include', '/catalog')
    })
})
