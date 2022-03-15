export function FormatTime(seconds: number){
    function pad(s: number){
      return (s < 10 ? '0' : '') + s;
    }
    let hours = Math.floor(seconds / (60*60));
    let minutes = Math.floor(seconds % (60*60) / 60);
        seconds = Math.floor(seconds % 60);
  
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }