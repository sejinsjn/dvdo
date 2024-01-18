export default {
	changeVonCheckboxValue () {
		if(Von03.selectedValues.length >= 2){
			Von03.setSelectedOptions(Von03.selectedValues[1]);
		}
	},

	changeErwerbCheckboxValue () {
		if(Erwerbstatig03.selectedValues.length >= 2){
			Erwerbstatig03.setSelectedOptions(Erwerbstatig03.selectedValues[1]);
		}
	}
}