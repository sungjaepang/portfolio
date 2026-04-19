const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
    projects.forEach(project => {
        const position = project.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            project.style.opacity = 1;
            project.style.transform = "translateY(0)";
        }
    });
});