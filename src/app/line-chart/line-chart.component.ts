import { Component, OnInit } from '@angular/core';
import data from '../../data'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartType = "line"
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

    let imagePerMonth = {}

    let dataset = []
    for( let months of data){
      let monthIndex = this.monthLookup(months)
      
      if(!imagePerMonth[monthIndex]){
          imagePerMonth[monthIndex] = 0
      }
      
      imagePerMonth[monthIndex] += 1
    }
    console.log(imagePerMonth)

    this.chartLabels = Object.keys(imagePerMonth)
    for( let image of Object.keys(imagePerMonth)){
      dataset.push(imagePerMonth[image])
    }
    this.chartData.push({data: dataset
    })
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
