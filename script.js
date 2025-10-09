// Hello World JavaScript functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World page loaded successfully!');
    
    // Get DOM elements
    const helloBtn = document.getElementById('helloBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const messageDiv = document.getElementById('message');
    
    // Array of hello messages
    const helloMessages = [
        'Hello World!',
        'Welcome to HTML!',
        'Hello from JavaScript!',
        'Nice to meet you!',
        'Hello, Developer!',
        'Welcome to the web!'
    ];
    
    // Array of colors for background changes
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    
    let messageIndex = 0;
    let colorIndex = 0;
    
    // Hello button functionality
    helloBtn.addEventListener('click', function() {
        const randomMessage = helloMessages[messageIndex % helloMessages.length];
        messageDiv.textContent = randomMessage;
        messageDiv.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
        messageDiv.style.color = 'white';
        messageDiv.style.opacity = '0';
        
        // Animate the message appearance
        setTimeout(() => {
            messageDiv.style.opacity = '1';
            messageDiv.style.transition = 'opacity 0.5s ease';
        }, 100);
        
        messageIndex++;
        
        // Add some fun animation
        helloBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            helloBtn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Change color button functionality
    changeColorBtn.addEventListener('click', function() {
        const newColor = colors[colorIndex % colors.length];
        document.body.style.background = newColor;
        colorIndex++;
        
        // Show feedback message
        messageDiv.textContent = `Background changed to color ${colorIndex}!`;
        messageDiv.style.background = '#fff';
        messageDiv.style.color = '#333';
        messageDiv.style.border = '2px solid #667eea';
        
        // Animate the message
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.style.opacity = '1';
        }, 100);
        
        // Add button animation
        changeColorBtn.style.transform = 'rotate(5deg)';
        setTimeout(() => {
            changeColorBtn.style.transform = 'rotate(0deg)';
        }, 200);
    });
    
    // Add some interactive hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add a welcome message on page load
    setTimeout(() => {
        messageDiv.textContent = 'Click the buttons above to interact!';
        messageDiv.style.background = '#e8f4f8';
        messageDiv.style.color = '#333';
        messageDiv.style.border = '2px dashed #667eea';
        messageDiv.style.opacity = '1';
    }, 1000);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.key === 'h' || event.key === 'H') {
            helloBtn.click();
        } else if (event.key === 'c' || event.key === 'C') {
            changeColorBtn.click();
        }
    });
    
    // Display keyboard shortcuts info
    setTimeout(() => {
        const shortcutsInfo = document.createElement('div');
        shortcutsInfo.innerHTML = '<small>💡 Tip: Press "H" for Hello, "C" for Color change</small>';
        shortcutsInfo.style.textAlign = 'center';
        shortcutsInfo.style.marginTop = '10px';
        shortcutsInfo.style.color = '#666';
        shortcutsInfo.style.fontStyle = 'italic';
        
        const container = document.querySelector('.container');
        container.appendChild(shortcutsInfo);
    }, 2000);
});
