import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/user.model';
@Injectable()
export class GithubService {
    private url = 'https://api.github.com/users/';
    constructor(private http: HttpClient) {
    }
    /**
     * @param username describe the name of field in the research
     * getUser return user with different information
     */
    getUser(username): Observable<UserDTO> {
      return this.http.get<UserDTO>(this.url + username);
    }
}
