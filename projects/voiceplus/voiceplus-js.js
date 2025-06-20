$(document).ready(function () {
	$('.expandable-header').on('click', function () {
		const content = $(this).next('.expandable-content');
		const icon = $(this).find('.expandable-icon');
		
		content.slideToggle(300);
		
		$(this).toggleClass('expanded');
	});
});





 function showTab(event, tabName) {
            // Hide all tab panes
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
            });

            // Remove active class from all tab buttons
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Show the selected tab pane
            document.getElementById(tabName).classList.add('active');

            // Add active class to the clicked button
            event.currentTarget.classList.add('active');
        }

        // Optional: Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                const activeButton = document.querySelector('.tab-button.active');
                const buttons = Array.from(document.querySelectorAll('.tab-button'));
                const currentIndex = buttons.indexOf(activeButton);
                
                let newIndex;
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
                } else {
                    newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
                }
                
                buttons[newIndex].click();
            }
        });