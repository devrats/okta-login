import { Injectable } from '@angular/core';
import OktaAuth from '@okta/okta-auth-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
}

export const oktaAuth = new OktaAuth({
  issuer: 'https://dev-31586241.okta.com/oauth2/default',
  clientId: '0oa8x26lo31ts0lyO5d7',
  redirectUri: window.location.origin + '/signin/callback'
});