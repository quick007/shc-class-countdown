export default function f60BD(props: { shType: any }) {
    //the "b2" is a placeholder, not the actual block. It just makes it esier to organize in my head
    const founders = "9:00 - 10:00";
    const b1 = "10:10 - 11:15";
    const b2 = "12:10 - 1:15";
    const b3 = "1:25 - 2:30";
    return (
      <>
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
          <div className="flex">
            <h2 className="font-semibold">Founders Period:</h2> 
              {founders}
          </div>
        </div>
        <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
          <div className="flex">
            <h2 className="font-semibold">Block {props.shType.shift()}:</h2> 
              {b1}
          </div>
        </div>
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