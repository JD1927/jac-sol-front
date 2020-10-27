import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CONTACT_NUMBER } from 'src/app/shared/global/global.constants';
import { ContactNumber } from 'src/app/shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ContactNumberService {

  constructor(private http: HttpClient) { }

  addContactNumber(contactNumber: ContactNumber): Observable<ContactNumber> {
    return this.http.post<ContactNumber>(URL_CONTACT_NUMBER, { ...contactNumber });
  }

  getContactNumberList(personId: number): Observable<ContactNumber[]> {
    return this.http.get<ContactNumber[]>(`${URL_CONTACT_NUMBER}/${personId}`);
  }
  deleteContactNumber(personId: number, contactNumber: string): Observable<void> {
    return this.http.delete<void>(`${URL_CONTACT_NUMBER}/${personId}/${contactNumber}`);
  }
}
