import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SignUpModel} from '../models';
import {SendRequestService} from './send-request.service';

@Injectable({
  providedIn: 'root',
})
export class FetchUserDataService {
  constructor(private http: HttpClient) {
  }

  public signUpSubmit(user: SignUpModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
      }),
    };
    return this.http.post<any>(
      'https://songs.code-star.ir/user/register',
      JSON.stringify(user),
      options
    );
  }

  public signInSubmit<T>(user: T) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
      }),
    };
    return this.http.post<any>(
      'https://songs.code-star.ir/user/login',
      JSON.stringify(user),
      options
    );
  }

  async fetchUsername(id: number) {
    const {user} = await SendRequestService.sendRequest(
      `https://songs.code-star.ir/user/one/${id}`, true
    );
    localStorage.setItem("user", JSON.stringify(user));
  }

  async fetchAlterProfile(base64: any) {
    const details = {
      token: localStorage.getItem('token'),
      avatar: base64,
    };
    await SendRequestService.sendRequest(
      'https://songs.code-star.ir/user/alter', false,
      details
    );
  }
}
