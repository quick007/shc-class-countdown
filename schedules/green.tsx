export default function green(props: { ll: boolean, shType: string }) {
  if (props.shType == "2") {
    var classes = [5, 6, 4]
  } else if (props.shType == "3") {
    var classes = [6, 4, 5]
  } else {
    var classes = [4, 5, 6]
  }
  const b8 = "8:00 - 9:15";
  const b4 = "9:30 - 10:55";
  const b5 = "11:50 - 1:05?11:05-12:20";
  const b6 = "1:15 - 2:30";
  return (
    <>
      <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
        <div className="flex">
          <h2 className="font-semibold">Block 8:</h2> 
            {b8}
        </div>
      </div>
      <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
        <div className="flex">
          <h2 className="font-semibold">Block {classes.shift()}:</h2> 
            {b4}
        </div>
      <div className="rounded bg-blue-500 px-1 font-medium text-gray-50 nightwind-prevent">Announcements</div>
      </div>
      {props.ll ? <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div> : ""}
      <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
        <div className="flex">
          <h2 className="font-semibold">Block {classes.shift()}:</h2> 
            {props.ll ? b5.split("?").shift() : b5.split("?").pop()}
        </div>
      </div>
      {props.ll ? "" : <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div>}
      <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
        <div className="flex">
          <h2 className="font-semibold">Block {classes.shift()}:</h2> 
            {b6}
        </div>
      </div>
    </>
  );
}