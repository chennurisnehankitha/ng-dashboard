import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppUtil } from 'src/app/app.util';

@Component({
  selector: 'request-info',
  templateUrl: 'request-info.component.html',
  styleUrls: ['request-info.component.scss'],
})
export class RequestInfoComponent implements OnInit, OnDestroy {
  selectedCountryAdvanced: any;
  lastSelectedCountry: any;
  countries: any[] = [];
  countrySuggestions: any[] = [];
  date1: any= null;
  minDate:any= null;
  maxDate: any = null;
  selectedCity1: any;
  countries1: any[]=[];
  subs: any;
  constructor(private appUtil: AppUtil) {}

  ngOnInit() {

    this.subs = this.appUtil.getIntelligentItem$().subscribe((x) => {
        console.log(x, ' :Info: ', Math.random());
      });
    this.countries1 = [
      {
        name: 'India',
        code: 'IN',
        states: [
          {
            name: 'Telangana',
            cities: [
              {cname: 'Hyderabad', Code: 'HYD'},
              {cname: 'Nizambad', code: 'nzb'},
              {cname: 'Medak', code: 'MED'}
            ]
          },
          {
            name: ' Andhra Pradesh',
            cities: [
              {cname: 'Vizag', code: 'VIZ'},
              {cname: 'Vijayawada', code: 'VJY'}
            ]
          },
          {
            name: 'Karnataka',
            Cities:[
              {cname: 'Bangalore', code: ' BANG'},
              {cname: 'Mangalore', code: 'MNG'},
              {cname:'Mysore Palace', code:'MYS'}
            ]
          },
        ]
      },
      {
        name: 'Unites states',
        code: 'USA',
        states:[
          {
            name: 'Tennesse',
            cities:[
              {cname: 'Nashville', code: 'NSH'},
              {cname: 'Memphis', code:'MEM'}
            ]
          },
          {
            name: 'Texas',
            cities: [
              {cname: 'Austin', code:'AUS'},
              {cname: 'Houston', code:'HOu'},
              {cname: 'Dallas', code:'Da'},
  
            ]
          },
        ]
      },
      {
        name: 'Canada', 
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    {cname: 'Montreal', code: 'C-MO'},
                    {cname: 'Quebec City', code: 'C-QU'}
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    {cname: 'Ottawa', code: 'C-OT'},
                    {cname: 'Toronto', code: 'C-TO'}
                ]
            },
            
        ]
    },
  
    ] 


    this.countries = [
      { label: 'Germany', value: 'ge' },
      { label: 'India', value: 'IN' },
      { label: 'USA', value: 'USA' },
      { label: 'Srilanka', value: 'SL' },
      { label: 'China', value: 'CN' },
    ];

    let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        
  }

  processOnChangeEvent(value: any){
    console.log('process on change', value);
    this.lastSelectedCountry= this.selectedCountryAdvanced;
  }

  processOnClick() {
    console.log('processOnClick');
  }
  filterCountry(event: any){
    console.log("filter country",event);
    this.countrySuggestions=[];
    // this.countrySuggestions= this.countries;
    // for (let index = 0; index < this.countries.length; index++) {
    //   const country = this.countries[index];
    //   if(country.label.toLowerCase().includes(event.query.toLowerCase())){
    //     this.countrySuggestions.push(country);
    //   }
    // }

    this.countrySuggestions = this.countries.filter(country => country.label.toLowerCase().includes(event.query.toLowerCase()));
    

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
}

  

}
