import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/app.const';
import { AppUtil } from 'src/app/app.util';
import { CarService } from 'src/app/car.service';

@Component({
    selector: 'visit',
    templateUrl: 'visit.component.html',
    styleUrls: ['visit.component.scss']
})



export class VisitComponent implements OnInit, OnDestroy{
    cars: Car[] = [{
        vin: 'version1', 
        brand: 'BWM',
        year: 2020,
        color: 'red'
    }];
    subs: any;

    constructor(private carService: CarService, private appUtil: AppUtil){

    }
    ngOnInit(): void {
        this.subs = this.appUtil.getIntelligentItem$().subscribe((x) => {
            console.log(x, ' :Visit: ', Math.random());
          });
        this.carService.getCarsSmall().subscribe(cars => {
            this.cars = cars
            console.log(new Date(), 'do you see me??');
        });
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
