//write your code here
document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.image');
    let draggedElement = null;

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggedElement = draggable;
            draggable.classList.add('selected');
        });

        draggable.addEventListener('dragend', () => {
            draggedElement = null;
            draggable.classList.remove('selected');
        });

        draggable.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        draggable.addEventListener('drop', () => {
            if (draggedElement && draggedElement !== draggable) {
                // Swap the background images
                const draggedBackground = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = draggable.style.backgroundImage;
                draggable.style.backgroundImage = draggedBackground;
            }
        });
    });
});

