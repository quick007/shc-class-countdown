export default function f30(props: { shType: Array<number> }) {
	//the "b2" is a placeholder, not the actual block. It just makes it esier to organize in my head
	const b1 = "9:00 - 9:55";
	const founders = "10:05 - 11:35";
	const b2 = "12:30 - 1:25";
	const b3 = "1:35 - 2:30";
	return (
		<>
			<div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
				<div className="flex">
					<h2 className="font-semibold">Block {props.shType.shift()}:</h2> 
						{b1}
				</div>
			</div>
			<div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
				<div className="flex">
					<h2 className="font-semibold">Founders Period:</h2> 
						{founders}
				</div>
			</div>
			<div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
				<div className="flex">
					<h2 className="font-semibold">Block {props.shType.shift()}:</h2> 
						{b2}
				</div>
			</div>
			<div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"><h2 className="font-semibold">Lunch</h2></div>
			<div className="rounded-md bg-gray-200 p-4 my-4 flex justify-between"> 
				<div className="flex">
					<h2 className="font-semibold">Block {props.shType.shift()}:</h2> 
						{b3}
				</div>
			</div>
		</>
	);
}