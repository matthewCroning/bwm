import { Rental } from './rental.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RentalService {
  
  private rentals: Rental[] = [{
    id: "1",
    title: "Central Apartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "2",
    title: "Central Apartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "3",
    title: "Central Apartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 33,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "4",
    title: "Central Apartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 35,
    shared: false,
    createdAt: "24/12/2017"
  }];

  constructor() { }

  public getRentalById(rentalId: string): Observable<Rental>{
    return new Observable<Rental>((observer)=>{

      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId
        });

        observer.next(foundRental);
      }, 500);
    }
    )
  }

  public getRentals(): Observable<Rental[]>{

    return  new Observable<Rental[]>((observer) => {
      
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);

    });

  }

}
