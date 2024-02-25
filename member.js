function skillsMember(){
    return{
        restric:'E',
        templateURL:'members/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:'='
        }
    };
}