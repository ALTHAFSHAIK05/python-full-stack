let registerform=document.getElementById("registerform")
if (registerform){
    registerform.addeventlisterner("submit",function(event){
        event.preventdefault();
        console.log(event);
        let name=document,getelementbyid("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let date=document.getElementById("date").value;
        let male=document.getelementbyid("male").checked;
        let female=document.getElementById("female").checked;
        let course=document.quertselector('input[name="course"]:checked').value;
        let gender="";
        if(male){
            gender="male"
        }else if(female){
            gender="female"
        }
        if (name == "" || email == "" || password == "" || date == || gender == || course == "" ) {
            SpeechRecognitionAlternative("please fill all the fields");
        } else {
            alart ("registration successful");
        }
        }
)
}
let loginform = document.getElementById("loginform")
if(logibform){
    loginform.addeventlisterner("submimt",function(event)
    {
        event.preventdefault();
        console.log(event);
        let email-document
}

