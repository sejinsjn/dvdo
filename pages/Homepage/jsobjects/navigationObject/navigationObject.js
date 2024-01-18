export default {
	navigateToPage: (eventData) => {
		if(eventData.isInternalPage){
			navigateTo(eventData.link);
		}else{
			navigateTo("Dokumentanzeige", {"url":eventData.link});
		}
	},
	
	search: () =>{
		return searchInput.text;
	}
}