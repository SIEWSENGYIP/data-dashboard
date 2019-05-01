import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  chartType = "bar"
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

    let monthlyLikes = {}

    for( let months of data){
      let monthIndex = this.monthLookup(months)

      if(!monthlyLikes[monthIndex]){
        monthlyLikes[monthIndex] = {}
      }

      for (let tag of months.tags ) {
        if(!monthlyLikes[monthIndex][tag]){
          monthlyLikes[monthIndex][tag] = 0
        }
        monthlyLikes[monthIndex][tag] += months.likes
      }
    }
    console.log(monthlyLikes)

    let aggregateTagLikes = {}

    this.chartLabels = Object.keys(monthlyLikes)
    for(let month of Object.keys(monthlyLikes)){
      for(let tag in monthlyLikes[month]){
        if(!aggregateTagLikes[tag]){
          aggregateTagLikes[tag] = []
        }
        aggregateTagLikes[tag].push(monthlyLikes[month][tag])
      }
    }

    let dataset = []

    for(let tag in aggregateTagLikes){
      dataset.push({
        data: aggregateTagLikes[tag],
        label: tag
      })
    }

    this.chartData = dataset
  }

  monthLookup(Object) : number {
    let monthIndex : number
    let months = 
    ['Jan','Feb','Mar',
    'Apr','May','Jun',
    'Jul','Aug','Sep',
    'Oct','Nov','Dec']

    for (let i=0;i<months.length;i++){
      if(Object.dateAdded.includes(months[i])){
        monthIndex = i
      }
    }

    return monthIndex
  }

}
