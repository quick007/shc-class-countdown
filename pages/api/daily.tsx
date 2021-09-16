export default function helloAPI(req, res) {
	res.status(200).json(
		{
			"9-14": "Green", //month then date
			M9D15: "F30",
		}
	)
}