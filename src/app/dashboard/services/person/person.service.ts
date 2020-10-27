import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, PersonHobby, PersonProfession } from 'src/app/shared/models/person.model';
import { URL_PERSON } from './../../../shared/global/global.constants';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAllPeopleList(): Observable<Person[]> {
    return this.http.get<Person[]>(URL_PERSON);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(URL_PERSON, { ...person });
  }

  updatePerson(person: Person): Observable<Person> {
    const { id } = person;
    return this.http.patch<Person>(`${URL_PERSON}/${id}`, { ...person });
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${URL_PERSON}/${id}`);
  }

  getPersonHobbyList(personId: number): Observable<PersonHobby[]> {
    return this.http.get<PersonHobby[]>(`${URL_PERSON}/hobby/list/${personId}`);
  }

  addPersonHobby(personHobby: PersonHobby): Observable<PersonHobby> {
    return this.http.post<PersonHobby>(`${URL_PERSON}/hobby`, { ...personHobby });
  }

  deletePersonHobby(personId: number, hobbyId: number): Observable<void> {
    return this.http.delete<void>(`${URL_PERSON}/hobby/${personId}/${hobbyId}`);
  }

  getPersonProfessionList(personId: number): Observable<PersonProfession[]> {
    return this.http.get<PersonProfession[]>(`${URL_PERSON}/profession/list/${personId}`);
  }

  addPersonProfession(personProfession: PersonProfession): Observable<PersonProfession> {
    return this.http.post<PersonProfession>(`${URL_PERSON}/profession`, { ...personProfession });
  }

  deletePersonProfession(personId: number, professionId: number): Observable<void> {
    return this.http.delete<void>(`${URL_PERSON}/profession/${personId}/${professionId}`);
  }
}
