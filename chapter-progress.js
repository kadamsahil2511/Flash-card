function initializeProgressBars() {
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    progressCircles.forEach(circle => {
        const progress = parseInt(circle.dataset.progress);
        circle.style.setProperty('--progress', progress);
        circle.style.setProperty('--progress-color', 
            progress < 30 ? '#ff4444' :
            progress < 70 ? '#ffbb33' : '#00C851'
        );
    });
}

document.addEventListener('DOMContentLoaded', initializeProgressBars);
