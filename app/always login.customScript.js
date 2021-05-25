if(AppClient.getUserType()=="guest"){
    application.setDefaultLoginView("LoginWizardForm");
    application.login(function(wizard){
        
    });
}