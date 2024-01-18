export default {
	searchData: [],

	onItemClicked(item){
		let navLink = item.APP_LINK;
		showAlert(navLink);
		if(!navLink) {
			showAlert("Not Found: " + navLink);
			return;
		}

		if(navLink.startsWith("http")){
			navigateTo("Dokumentanzeige", {"url": navLink});
		}
		else {
			navigateTo(navLink);
		}
		/*
		if(item.TYP == "Amt"){
			//navigateTo('Amt_Info');
		}
		else if(item.TYP == "Vorgang"){
			//navigateTo('Vorgang');
		}
		else if(item.TYP == "Online-Dokument"){
			//navigateTo('Formular');
		}
		else {
			showAlert('Not Found!');
		}*/
	},
	filterData(item) {
		return item.NAME.toLowerCase().includes(SearchBar.text.toLowerCase()) 
		|| item.TYP.toLowerCase().includes(SearchBar.text.toLowerCase()) 
		|| item.BESCHREIBUNG.toLowerCase().includes(SearchBar.text.toLowerCase());
	},

	//Funktion wird initial beim starten ausgeführt, damit 'searchData' gesetzt ist
	//Immer wenn dann die suche geupdated werden soll muss 'updateSearchResults' aufgerufen werden
	async initUpdateSearchResults(){
		while(!CoreData.data){
			showAlert("Retry");
			await setTimeout(() => {}, 2000);
		}

		FilterPageFunctions.updateSearchResults();
	},

	updateSearchResults() {
		let searchInput = SearchBar.text;
		let filteredArray = CoreData.data.filter(FilterPageFunctions.filterData);

		//console.log(SearchBar);

		let sortedArray;

		let sortOption = SelectFilterSort.selectedOptionLabel;
		if(sortOption === "Relevanz"){
			//Don't sort anything
			FilterPageFunctions.searchData = filteredArray;
		}
		else {
			sortOption = sortOption.toUpperCase();

			showAlert("Sort: " + sortOption);
			FilterPageFunctions.searchData = filteredArray.sort((i1, i2) => {
				//showAlert("sort: " + i1 + " - " + i1[sortOption] + " - " + i1.NAME);
				return ('' + i1[sortOption]).localeCompare(i2[sortOption]);
			});
		}
	},
}