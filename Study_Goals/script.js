document.addEventListener('DOMContentLoaded', () => {
    const createGoalBtn = document.getElementById('createGoalBtn');
    const goalModal = document.getElementById('goalModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalBackground = document.getElementById('modalBackground');

    // Show modal and start the background animation
    createGoalBtn.onclick = () => {
        goalModal.style.display = 'block';
        modalBackground.style.animation = 'growBackground 0.6s forwards ease-out'; // Trigger animation
    };

    // Close modal
    closeModalBtn.onclick = () => {
        goalModal.style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == goalModal) {
            goalModal.style.display = 'none';
        }
    };
});
