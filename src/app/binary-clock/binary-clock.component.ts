import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

interface TimeSegment {
  value: number;
  size: number;
}

type TimeArray = Array<Array<TimeSegment>>;

@Component({
  selector: 'app-binary-clock',
  templateUrl: './binary-clock.component.html',
  styleUrls: ['./binary-clock.component.css'],
})
export class BinaryClockComponent implements OnInit {
  clockData: { value: number[]; binaryRepresentation: number[][] }[] = [];

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock = () => {
    const timeArray = this.getTimeArray();
    const clockArray = this.getClockArray(timeArray);
    this.clockData = clockArray;
  };

  private getTimeArray = (): TimeArray => {
    const currentTime = moment();
    const [hours, minutes, seconds] = [
      currentTime.format('HH'),
      currentTime.format('mm'),
      currentTime.format('ss'),
    ];

    return [
      this.getTimeSegmentArray(hours, 3, 4),
      this.getTimeSegmentArray(minutes, 3, 4),
      this.getTimeSegmentArray(seconds, 3, 4),
    ];
  };

  private getTimeSegmentArray = (
    timeString: string,
    highDigitSize: number,
    lowDigitSize: number
  ): Array<TimeSegment> => {
    const digits = timeString.split('').map((value) => parseInt(value));

    return [
      { value: digits[0], size: highDigitSize },
      { value: digits[1], size: lowDigitSize },
    ];
  };

  private getClockArray = (
    timeArray: TimeArray
  ): { value: number[]; binaryRepresentation: number[][] }[] =>
    timeArray.map((timeSegment) => ({
      value: timeSegment.map((digit) => digit.value),
      binaryRepresentation: timeSegment.map((digit) =>
        this.getBinaryRepresentation(digit)
      ),
    }));

  private getBinaryRepresentation = (digit: TimeSegment): number[] => {
    const binaryDigits = [];
    for (let i = 0; i < digit.size; i++) {
      binaryDigits.push(digit.value >= Math.pow(2, digit.size - 1 - i) ? 1 : 0);
      digit.value -= Math.pow(2, digit.size - 1 - i) * binaryDigits[i];
    }
    return binaryDigits;
  };
}
