/** 
 * No need to convert dates to the "js" way of doing things- the program does it for you
 * If theres a number before a class (Like 2Green) that number is the first number it starts with. 
 * If theres no number, then it will default to 1
 * 
 * For the other types of schedules, heres how they work:
 * 1: Type of rotation, the number is the first class that day (ex. 2, 3, etc. There can be none here.)
 * 2: Type of day, determines wether its a green or blue day (like G or B)
 * 3: Type of day, most likley a founders day (ex. F30 or F60)
 * 4: If theres multiple types of the schedule, then we add a tag like "MM" (ex. {BD: Beggining of Day}, {MM: Mid-Morning}, {ED: End of Day}, {SP: Split})
 * 
 * Types of schedules: [1, 2, 3], [2, 3, 1], [3, 1, 2]
**/

export default function helloAPI(req, res) {
	res.status(200).json(
		{
			//september
			"9/14": "Green", //month then date
			"9/15": "F30",
			"9/16": "Green",
			"9/20": "2Blue",
			"9/21": "2Green",
			"9/22": "2BF60MM",
			"9/23": "2Green",
			"9/24": "2Blue",
			"9/28": "2Green",
			"9/29": "2Blue",
			"9/30": "2Green",
		},
	)
}