document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.circle');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    circles.forEach((circle) => {
        const circleX = circle.offsetLeft + circle.offsetWidth / 2;
        const circleY = circle.offsetTop + circle.offsetHeight / 2;

        const deltaX = (mouseX - circleX) * 0.02;
        const deltaY = (mouseY - circleY) * 0.02;

        circle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
});