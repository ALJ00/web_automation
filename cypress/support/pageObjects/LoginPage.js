export default class LoginPage {

  locators = {
    findByCP: '.checkout-shipping-address [name="zipCode"]',
    onTrust: '#onetrust-accept-btn-handler',
    emailInput: '#login-form-email',
    passwordInput: '#login-form-password',
    continueButton: '#maincontent > div.login-container.transition-u1 > div.card.login-card > div.card-body > form > button'
  };

  navigateToLoginPage() {
    cy.visit('/')
  }
}