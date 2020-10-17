import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/shared/models/person.model';
import { urlPerson } from './../../../shared/global/global.constants';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAllPeopleList(): Observable<Person[]> {
    return this.http.get<Person[]>(urlPerson);
  }

  createPerson(name: string): Observable<Person> {
    return this.http.post<Person>(urlPerson, { name });
  }

  updatePerson(item: Person): Observable<Person> {
    const { id, name } = item;
    return this.http.patch<Person>(`${urlPerson}/${id}`, { name });
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${urlPerson}/${id}`);
  }
}
