export default function green(props: { ll: boolean }) {
    const blue = ["8:00 - 9:15|8", "9:30 - 10:55|4", "11:50 - 1:05?11:05-12:20|5", "1:15 - 2:30|6"]
    var output = []
    blue.forEach(element => {
      const sp = element.split("|")
      const block = sp.pop()
      if (!(block == "5")) {
        output.push(
          <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
            <div className="flex">
              <h2 className="font-semibold">Block {block}:</h2> 
              {sp.shift()}
            </div>
            <div>
            {block == "4" ? <div className="rounded bg-blue-500 px-1 font-medium text-gray-50 nightwind-prevent">Announcements</div> : ""}
            </div>
          </div>
        )
      } else {
        if (props.ll == true) {
          var time = sp.shift().split("?").shift()
        } else {
          var time = sp.shift().split("?").pop()
        }
          output.push(
            <>
              {props.ll ? <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div> : ""}
              <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
                <div className="flex">
                  <h2 className="font-semibold">Block {block}:</h2> 
                  {time}
                </div>
              </div>
              {props.ll ? "" : <div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div>}
            </>
          )
        
      }
    })
    return (output);
  }