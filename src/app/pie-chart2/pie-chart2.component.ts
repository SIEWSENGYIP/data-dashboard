import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component implements OnInit {

  chartType = "pie"
  chartData = []
  chartLabels = []

  //data = {
  //  "albumId":1,
  //  "id":1,
  //  "title":"accusamus beatae ad facilis cum similique qui sunt",
  //  "url":"https://via.placeholder.com/600/92c952",
  //  "thumbnailUrl":"https://via.placeholder.com/150/92c952",
  //  "dateAdded":"Sat May 19 2018 18:46:20 GMT+0800 (Malaysia Time)",
  //  "tags":["fails","news","sad"],
  //  "likes":38}

  constructor() { }

  ngOnInit() {
    
    let imagePerTag = {}

    let dataset = []
    for( let tags of data){
      for (let tag of tags.tags ) {
        if(!imagePerTag[tag]){
          imagePerTag[tag] = 0
        }
        imagePerTag[tag] += 1
      }
    }

    console.log(imagePerTag)

    this.chartLabels = Object.keys(imagePerTag)
    for( let tag of Object.keys(imagePerTag)){
      dataset.push(imagePerTag[tag])
    }
    this.chartData.push({data: dataset
    })
  }

}
