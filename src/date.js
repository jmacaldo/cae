//Converts UNIX Epoch time to a human readable format.

export function dateConvert(epoch){
      if (epoch){
        let date = new Date(epoch);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
}

//Converts 24-hour to 12-hour time.
export function timeConvert(time){
  // Check correct time format and split into components
 time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

 if (time.length > 1) { // If time format correct
   time = time.slice (1);  // Remove full string match value
   time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
   time[0] = +time[0] % 12 || 12; // Adjust hours
 }
 return time.join (''); // return adjusted time or original string
}
