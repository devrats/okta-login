import { Component } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { AuthState } from '@okta/okta-auth-js';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public name$!: Observable<string>;

  constructor(private _oktaAuthStateService: OktaAuthStateService) {}

  public ngOnInit(): void {
    this.name$ = this._oktaAuthStateService.authState$.pipe(
      filter(
        (authState: AuthState) => !!authState && !!authState.isAuthenticated
      ),
      map((authState: AuthState) => authState.idToken?.claims.name ?? '')
    );
  }
}
