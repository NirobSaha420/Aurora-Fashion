Shery.mouseFollower();
Shery.makeMagnet(".magnet")

// AI created color options
document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
        });
    });
});
// AI created color options