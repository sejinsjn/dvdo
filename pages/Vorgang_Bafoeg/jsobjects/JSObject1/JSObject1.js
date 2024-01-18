export default {
	currentForm: 0,
	enabled: false,
	rowIndex: 0,
	numSteps: 5,
	formArray: ["Form1", "Form2", "End", "Form3", "Form4", "Form5"],
	myFun1 () {
		return GetFormData.data;
	},

	progressbar() {
		this.progressbarChange(1);
	},

	back() {
		this.progressbarChange(-1);
	},

	progressbarChange(sign) {
		let formObjectArray = [
			Formblatt1, Formblatt2, Formblatt3, Formblatt4, Formblatt5, End
		];


		if(this.currentForm + sign < 0 || this.currentForm + sign >= formObjectArray.length) return;

		this.currentForm += sign;

		for(let i=0;i<formObjectArray.length;i++){
			let formObject = formObjectArray[i];
			if(this.currentForm == i) {
				formObject.setVisibility(true);
			}
			else {
				formObject.setVisibility(false);
			}
		}

		let stepSize = 100.0 / this.numSteps;
		Progress1.setProgress(Progress1.progress + stepSize * sign);

		if(this.currentForm == formObjectArray.length - 1){
			setTimeout(() => {
				navigateTo('Homepage');
			}, 5000);
		}
	},
	enableForm(){
		this.enabled = !this.enabled;
	}
}