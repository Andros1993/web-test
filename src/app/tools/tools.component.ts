import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  buf: string = '';

  constructor() {
  }

  ngOnInit() {

  }

  transformJson() {
    let datainput = document.getElementById('jsoninput');
    let jsonData = JSON.parse(datainput['value']);

    jsonData.captionList.forEach((value, index) => {
      this.buf = this.buf + (index + 1) + '\n';
      this.buf = this.buf + value.startTime + ' --> ' + value.endTime + '\n';
      this.buf = this.buf + value.subPro + '\n';
      this.buf = this.buf + '\n';
    });
    document.getElementById('jsonoutput')['value'] = this.buf;
  }

  transformSrt() {
    let initIndex = 2;
    const step = 4;
    let outputData = '';
    let datainput = document.getElementById('srtinput');
    let srt = datainput['value'];
    let inputList = srt.split('\n');

    for (let i = 0; i < ((inputList.length / 4) + 1); i++) {
      outputData = outputData + inputList[initIndex];
      initIndex = initIndex + 4;
    }

    console.log(inputList);
    // jsonData.captionList.forEach((value, index) => {
    //   this.buf = this.buf + (index + 1) + '\n'
    //   this.buf = this.buf + value.startTime + ' --> ' + value.endTime + '\n'
    //   this.buf = this.buf + value.subPro + '\n'
    //   this.buf = this.buf + '\n'
    // })
    document.getElementById('srtoutput')['value'] = outputData;
  }

  transformAuto() {
    let initIndex = 2;
    const step = 4;
    let outputData = [];
    let datainput = document.getElementById('autoinput');
    let srt = datainput['value'];
    let inputList = srt.split('\n');

    inputList = inputList.filter(function (value) {
      if (value.trim().length <= 0) {
        // Remove ''
        return false;
      } else if (parseInt(value.trim())) {
        // Remove number
        return false;
      } else if (value.indexOf('-->') > -1) {
        // Remove -->
        return false;
      } else {
        return true;
      }
    });

    inputList.forEach(function (value) {
      if (outputData.indexOf(value) === -1) {
        outputData.push(value);
      }
    });

    console.log(outputData);
    document.getElementById('autooutput')['value'] = outputData.join(' ');
  }

  transformAuto2() {
    let initIndex = 2;
    const step = 4;
    let outputData = [];
    let datainput = document.getElementById('autoinput2');
    let srt = datainput['value'];
    let inputList = srt.split('\n');

    inputList = inputList.filter(function (value) {
      if (value.trim().length <= 0) {
        // Remove ''
        return false;
      } else if (parseInt(value.trim())) {
        // Remove number
        return false;
      } else {
        return true;
      }
    });

    inputList.forEach(function (value, index) {
      if (outputData.indexOf(value) === -1) {
        outputData.push(value);
        if (value.indexOf('-->') === -1 && outputData[outputData.length - 1].trim().length > 1) {
          console.log(value)
          outputData.push('');
        }
      }
    });

    // let dataBuf = []
    // dataBuf.push(outputData[0])
    // dataBuf.push(outputData[1])
    // for(let i = 2; i < outputData.length - 2; ) {
    //   console.log(i)
    //   if (!(outputData[i].indexOf('-->') > -1 && outputData[i+1].indexOf('-->') > -1)) {
    //     dataBuf.push(outputData[i])
    //   }
    //   dataBuf.push(outputData[i+1])
    //   dataBuf.push(outputData[i+2])
    //   i = i + 3
    // }
    // outputData = dataBuf

    console.log(inputList);
    document.getElementById('autooutput2')['value'] = outputData.join('\n');
  }
}
