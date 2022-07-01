import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isHomeClicked = 'default';

  handleHomeClickEvent(value: string) {
    this.isHomeClicked = value;
  }

  ngOnInit(): void {
    console.log('names: ', this.sampleMethod());
  }
 
  
  sampleMethod() {
    // let  name: string[] = [];
    let persons = [{
      name: 'nitish',
      age: 32,
      gender: 'M'
    }, {
      name: 'sneha',
      age: 26,
      gender: 'F'
    }, {
      name: 'satish',
      age: 34,
      gender: 'M'
    }, {
      name: 'Amulya',
      age: 28,
      gender: 'F'
    }];
    // for (let i = 0; i < persons.length; i++) {
    //   let x: any = {};
    //   x.name = persons[i].name;
    //   x.gender = persons[i].gender;
    //  name.push(x);
    // }
    // persons.forEach(person => {
    //   name.push(person.name);
    // });
    // name = persons.map(person => {
    //   let x: any = {};
    //   x.name = person.name;
    //   x.gender = person.gender;
    //   return x
    // })
    // return name;
    for(let person of persons) {
      console.log('for each ', person);
      
    }
    let result:any[]= [];
    persons.forEach(person=>{
      if(person.gender=='F'){
        result.push(person.age);
        
      }

    })

    return persons.find(x=> x.age === 32);


    // return result;

  }
}
