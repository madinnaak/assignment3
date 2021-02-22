function calculate() {
    var Initial = 500;
    var EducationLevelValue = document.getElementById("educationlevel").value;
    var FamilyNetValue = document.getElementById("familynet").value;
    var SkillsValue = 0;
        for (i = 0; i < document.skills.number.length; i++){
            if(document.skills.number[i].checked == true){
                SkillsValue += document.skills.number[i].value;
            }
        }
    var AgeValue = 1;
        for (i = 0; i < document.agevalue.option.length; i++){
            if(document.agevalue.option[i].checked == true){
                AgeValue = document.agevalue.option[i].value);
                break;
            }
        }
    var final = (((Initial * EducaionLevelValue * FamilyNetValue) + SkillsValue) * AgeValue);
        if(document.reputation.option[0].checked == true){
            final *= document.reputation.option[0].value;
        }
        if(document.reputation.option[1].checked == true){
            final *= document.reputation.option[1].value;
        }
        if(document.reputation.option[2].checked == true){
            final -= document.reputation.option[2].value;
        }
    alert(final + "$");
}