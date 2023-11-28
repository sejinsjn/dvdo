export default {
	ticketData: [
{
"id": 1,
"name":"Beantragung Kindergeld",
"beantragungsdatum": "2023-09-01",
"status":"offen"
},
{
"id": 2,
"name":"Beantragung Arbeitslosengeld",
"beantragungsdatum": "2023-10-11",
"status":"bei Sachbearbeiter"
},
{
"id": 3,
"name":"Änderung Adresse",
"beantragungsdatum": "2022-07-25",
"status":"offen"
}
],
	sortDataByDate () {
		return this.ticketData.sort((a,b)=>a.beantragungsdatum.localeCompare(b.beantragungsdatum))
	}
}