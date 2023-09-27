class railwayForm {

    submit(){
        console.log(this.name + " : Your Form submitted forn train No. " + this.trainNo);
    }
    cancel(){
        console.log(this.name +" : Your Form cancelled forn train No. " + this.trainNo);
    }
    fill(givenname, trainNo){
      this.name = givenname;
      this.trainNo = trainNo;
      
    }

}

// new form created for varun from railway form template;
let varun = new railwayForm();
// filling the details in the form by fill method ;
varun.fill("Varun", 12213);
// your form is submitted through submit method of form submit method;
varun.submit();
varun.cancel();


