document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.bar span');

    const skillOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const handleSkillIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    };

    const skillObserver = new IntersectionObserver(handleSkillIntersect, skillOptions);

    skills.forEach(skill => {
        skill.style.animationPlayState = 'paused';
        skillObserver.observe(skill);
    });

    const containers = document.querySelectorAll('.education .container');
    const timelineLine = document.querySelector('.timeline-line');

    const eduOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleEduIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    };

    const eduObserver = new IntersectionObserver(handleEduIntersect, eduOptions);

    containers.forEach(container => {
        container.style.animationPlayState = 'paused';
        eduObserver.observe(container);
    });

    const handleLineIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineLine.style.animationPlayState = 'running';
            }
        });
    };

    const lineObserver = new IntersectionObserver(handleLineIntersect, eduOptions);
    lineObserver.observe(document.querySelector('.timeline'));
});
