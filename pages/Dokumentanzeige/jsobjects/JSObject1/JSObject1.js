export default {
	myFun1 () {
		switch(appsmith.URL.queryParams["document"]){
			case "formlos":
				return "https://www.stwdo.de/fileadmin/downloads/pdf/bafoeg/formulare/Formloser_Antrag_auf_Ausbildungsfoerderung_22.08.2023_n.pdf";
			default:
				return "https://www.xn--bafg-7qa.de/bafoeg/shareddocs/downloads/formblaetter/v2022/formblatt_1.pdf?__blob=publicationFile&v=2";
		}
	}
}
