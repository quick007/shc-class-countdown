export default function blue(props: { ll: boolean, shType: any }) {
    const founders = "9:00 - 10:05?10:15 - 11:20";
    const b1 = "9:00 - 10:05?10:15 - 11:20";
    const b2 = "11:50 - 1:05?11:05-12:20";
    const b3 = "1:15 - 2:30";
    return (
      <>
        {props.ll ? <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> <div className="flex"><h2 className="font-semibold">Founders Period:</h2> 
              {b1.split("?").shift()}</div></div> : ""}
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
          <div className="flex">
            <h2 className="font-semibold">Block {props.shType.shift()}:</h2> 
              {!props.ll ? b1.split("?").shift() : b1.split("?").pop()}
          </div>
        </div>
        {props.ll ? "" : <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> <div className="flex"><h2 className="font-semibold">Founders Period:</h2> 
              {b1.split("?").pop()}</div></div>}
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div>
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
          <div className="flex">
            <h2 className="font-semibold">Block {props.shType.shift()}:</h2> 
              {b2}
          </div>
        </div>
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
          <div className="flex">
            <h2 className="font-semibold">Block {props.shType.shift()}:</h2> 
              {b3}
          </div>
        </div>
        

      </>
    );
  }