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

export default function helloAPI(req: any, res: any) {
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
			"10/1": "2Blue",
			"10/4": "2Green",
			"10/5": "2Blue",
			"10/6": "2GF60MM",
			"10/7": "2Blue",
			"10/8": "2Green",
			"10/11": "2Blue",
			"10/12": "2Green",
			"10/14": "2Blue",
			"10/15": "2Green",
			"10/18": "2Blue",
			"10/19": "2Green",
			"10/20": "2Blue",
			"10/21": "2Green",
			"10/22": "2BF60ED",
			"10/25": "2Green",
			"10/26": "2Blue",
			"10/27": "2GF30",
			"10/28": "2Blue",
			"10/29": "2Green",
			"11/2": "3Blue",
			"11/3": "3Green",
			"11/4": "3Blue",
			"11/5": "3Green",
			"11/8": "3Blue",
			"11/9": "3Green",
			"11/10": "3BF30",
			"11/11": "3Green",
			"11/12": "3Blue",
			"11/15": "3Green",
			"11/16": "3Blue",
			"11/17": "3GF30",
			"11/18": "3Blue",
			"11/19": "3Green",
			"11/22": "3Blue",
			"11/23": "3Green",
			"11/29": "3Blue",
			"11/30": "3Green",
			"12/1": "3BF30",
			"12/2": "3Green",
			"12/3": "3Blue",
			"12/6": "3Green",
			"12/7": "3Blue",
			"12/8": "3GF90",
		},
	)
}