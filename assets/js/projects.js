projects = {
    'finance-tracker':'https://github.com/Walson124/finance_tracking',
    'ai-wardrobe': 'https://github.com/Walson124/ai_wardrobe',
    'senior-design-project':'https://github.com/sdp-team-22/website',
    'bubble-shooter':'https://github.com/Walson124/bubble-shooter',
    'chess':'',
}

projectClickable();

function projectClickable() {
    for (let i = 0; i < Object.keys(projects).length; i++) {
        if (projects[Object.keys(projects)[i]]) {
            project = document.getElementById(Object.keys(projects)[i]);
            project.addEventListener('click', function() {
                console.log('clicked');
                window.open(projects[Object.keys(projects)[i]], '_blank');
            });
        }
    }
}