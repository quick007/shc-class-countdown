export default function helloAPI(req, res) {
	res.status(200).json(
		{
			//september
			"9-14": "Green", //month then date
			"9-15": "F30",
			"9-16": "Green",
			"9-20": "Blue",
			"9-21": "Green",
			"9-22": "F60MM",
			"9-23": "Green",
			"9-24": "Blue",
			"9-28": "Green",
			"9-29": "Blue",
			"9-30": "Green",
		}
	)
}