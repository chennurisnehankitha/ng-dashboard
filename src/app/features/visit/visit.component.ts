import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/app.const';
import { CarService } from 'src/app/car.service';

@Component({
    selector: 'visit',
    templateUrl: 'visit.component.html',
    styleUrls: ['visit.component.scss']
})



export class VisitComponent implements OnInit{
    cars: Car[] = [{
        vin: 'version1', 
        brand: 'BWM',
        year: 2020,
        color: 'red'
    }];

    constructor(private carService: CarService){

    }
    ngOnInit(): void {
        this.carService.getCarsSmall().subscribe(cars => {
            this.cars = cars
            console.log(new Date(), 'do you see me??');
        });
    }
}
