class Driver {
  constructor(name, string_date){
    this.name = name;
    this.string_date = string_date;
    this.startDate = this.startDate();
  }

  startDate() {
    let start_date = new Date(this.string_date);
    return start_date;
  }

  yearsExperienceFromBeginningOf(year) {
      return parseInt(year) - Date.prototype.getFullYear(this.startDate);
  }

}

/* class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let total = 0;
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
      ];

    total += Math.abs(beginningLocation[vertical] - endingLocation[vertical]);
    total += Math.abs((eastWest.indexOf(beginningLocation[horizontal]) + 1) - (eastWest.indexOf(beginningLocation[horizontal]) + 1));

    return total;
  }

  estimatedTime(peak = false){
    if (peak === true) {
      return blocksTravelled() % 3
    }
    else {
      return blocksTravelled() % 2
    }
  }

}
*/
