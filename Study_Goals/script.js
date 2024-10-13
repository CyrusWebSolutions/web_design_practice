document.addEventListener('DOMContentLoaded', () => {
    const createGoalBtn = document.getElementById('createGoalBtn');
    const goalModal = document.getElementById('goalModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalBackground = document.getElementById('modalBackground');

    // Show modal and immediately display form without animation
    createGoalBtn.onclick = () => {
        goalModal.style.display = 'block';
        modalBackground.style.animation = 'growBackground 0.3s forwards ease-out'; // Shorten animation to 0.3s
    };

    // Close modal with animation for background and content
    closeModalBtn.onclick = () => {
        // Start shrinking animation for background
        modalBackground.style.animation = 'shrinkBackground 0.3s forwards ease-in'; // Shorten animation to 0.3s

        // Delay the closing of the modal until the background animation completes
        setTimeout(() => {
            goalModal.style.display = 'none';
        }, 300); // Shorten timeout to 300ms
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == goalModal) {
            modalBackground.style.animation = 'shrinkBackground 0.3s forwards ease-in'; // Shorten animation to 0.3s
            setTimeout(() => {
                goalModal.style.display = 'none';
            }, 300); // Shorten timeout to 300ms
        }
    };
});
