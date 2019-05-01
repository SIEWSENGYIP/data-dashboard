import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-pie-chart1',
  templateUrl: './pie-chart1.component.html',
  styleUrls: ['./pie-chart1.component.css']
})
export class PieChart1Component implements OnInit {

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

    let likePerTag = {}

    let dataset = []
    for( let tags of data){
      for (let tag of tags.tags ) {
        if(!likePerTag[tag]){
          likePerTag[tag] = 0
        }
        likePerTag[tag] += tags.likes
      }
    }

    console.log(likePerTag)

    this.chartLabels = Object.keys(likePerTag)
    for( let tag of Object.keys(likePerTag)){
      dataset.push(likePerTag[tag])
    }
    this.chartData.push({data: dataset
    })

  }

}
