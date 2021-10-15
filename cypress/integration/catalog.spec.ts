import {SPOTIFY_API_CODE} from "../../src/core/const";

describe('Catalog tests', () => {
    it('App render catalog if search request retrieves data', () => {
        // Real login call to get credentials
        cy.visit('/', {
            onBeforeLoad(win: Cypress.AUTWindow) {
                win.sessionStorage.clear()
            }
        });
        let loginButton = cy.get('#login-button');
        loginButton.click();

        // Section headers appears
        cy.get('#search-input').type("coldplay");
        cy.get('#category-header-albums').should('be.visible');
        cy.get('#category-header-artists').should('be.visible');
        cy.get('#category-header-tracks').should('be.visible');

        // Catalogs are fulfilled
        cy.get('#catalog-items-albums > :nth-child(1)').should('be.visible')
        cy.get('#catalog-items-artists > :nth-child(1)').should('be.visible')
        cy.get('#catalog-items-tracks > :nth-child(1)').should('be.visible')
    })

    it('Logout redirect user to /', () => {
        cy.visit('/catalog', {
            onBeforeLoad(win: Cypress.AUTWindow) {
                win.sessionStorage.setItem(SPOTIFY_API_CODE, win.btoa(JSON.stringify({
                    "accessToken": "wgvrwhe3he4he4",
                    "tokenType": "Bearer",
                    "expiresIn": 3600
                })))
            }
        });
        cy.url().should('include', '/catalog');
        cy.get('#logout-button').click();
        cy.url().should('eq', Cypress.config().baseUrl);
    })

    it('If credentials are empty user is redirected to login on search', () => {
        cy.visit('/catalog', {
            onBeforeLoad(win: Cypress.AUTWindow) {
                win.sessionStorage.setItem(SPOTIFY_API_CODE, win.btoa(JSON.stringify({
                    "accessToken": "",
                    "tokenType": "",
                    "expiresIn": 0
                })))
            }
        });
        cy.url().should('include', '/catalog');
        cy.get('#search-input').type("coldplay");
        cy.url().should('eq', Cypress.config().baseUrl);
    })
})
