import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  buf: string = ""
  constructor() { }

  ngOnInit() {

  }

  transformJson() {
    let datainput = document.getElementById('jsoninput')
    let jsonData = JSON.parse(datainput['value'])

    jsonData.captionList.forEach((value, index) => {
      this.buf = this.buf + (index + 1) + '\n'
      this.buf = this.buf + value.startTime + ' --> ' + value.endTime + '\n'
      this.buf = this.buf + value.subPro + '\n'
      this.buf = this.buf + '\n'
    })
    document.getElementById('jsonoutput')['value'] = this.buf
  }

  transformSrt() {
    let initIndex = 2
    const step = 4
    let outputData = ""
    let datainput = document.getElementById('srtinput')
    let srt = datainput['value']
    let inputList = srt.split('\n')

    for(let i = 0;i < ((inputList.length / 4) + 1); i ++) {
      outputData = outputData + inputList[initIndex]
      initIndex = initIndex + 4
    }

    console.log(inputList)
    // jsonData.captionList.forEach((value, index) => {
    //   this.buf = this.buf + (index + 1) + '\n'
    //   this.buf = this.buf + value.startTime + ' --> ' + value.endTime + '\n'
    //   this.buf = this.buf + value.subPro + '\n'
    //   this.buf = this.buf + '\n'
    // })
    document.getElementById('srtoutput')['value'] = outputData
  }
}
