import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-proba',
  templateUrl: './proba.component.html',
  styleUrls: ['./proba.component.scss']
})
export class ProbaComponent implements OnInit {
  private _baseUrl = `${environment.baseUrl}/auth`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  test() {
    const email: string = 'test@test.com';
    const password: string = 'testtest';

    this.http.post(`${this._baseUrl}/login`, { email, password }).subscribe(
      console.log
    );
  }
}
