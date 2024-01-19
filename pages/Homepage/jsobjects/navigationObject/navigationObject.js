export default {
	navigateToPage: (eventData) => {
		if(eventData.isInternalPage){
			navigateTo(eventData.link);
		}else{
			navigateTo("Dokumentenanzeige", {"url":eventData.link});
		}
	},

	search: () =>{
		return searchInput.text;
	},

	formNavigation(){
		for (let i = 0; i < getFormulareinBearbeitung.data.length; i++) {
			if (getFormulareinBearbeitung.data[i].name === List1.selectedItem.name) {
				if(getFormulareinBearbeitung.data[i].link_page != ""){
					navigateTo(getFormulareinBearbeitung.data[i].link_page);
				}
			}
		}
	}
}