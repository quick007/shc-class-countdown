import React from "react"

/*export default function untilEnd(props) {
    const end = props.end || "2:30"
    const [time, setTime] = useState(<div>Loading...</div>)
    
    return (
        time
    )
    
}*/


export default class untilEnd extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { seconds: timeUntilEnd() };
    }
    

    tick() {
      this.setState(({
        seconds: timeUntilEnd()
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      
      return React.createElement(
        'div',
          null,
          this.state.seconds
      );
    }
  }

function timeUntilEnd() {
  const d = new Date();
  const end = "14:30"; //need to use militray time - I cba to make it convert lmao
  const mins = end.split(":").pop();
  const hrs = end.split(":").shift();

  if ((d.getMinutes() > mins && d.getHours() == hrs) || (d.getHours() > hrs)) {
    return <p>Schools Out!</p>
  } else {
    const back = [];
    back.push(hrs - d.getHours());
    back.push(" hours and ")
    back.push(mins - d.getMinutes());
    back.push(" minutes until the end of school")
    return back;
  }
}
