
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');
            let isValid = true;
            
            if (name.value.trim() === '') {
                showError(name, 'Пожалуйста, введите ваше имя');
                isValid = false;
            } else {
                clearError(name);
            }
            
            if (email.value.trim() === '') {
                showError(email, 'Пожалуйста, введите ваш email');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Пожалуйста, введите корректный email');
                isValid = false;
            } else {
                clearError(email);
            }
            
            if (message.value.trim() === '') {
                showError(message, 'Пожалуйста, введите ваше сообщение');
                isValid = false;
            } else {
                clearError(message);
            }
            
            if (isValid) {
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Отправка...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время. Мяу! 🐾');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
        
        function showError(input, message) {
            clearError(input);
            input.style.borderColor = '#e74c3c';
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#e74c3c';
            errorDiv.style.fontSize = '0.85rem';
            errorDiv.style.marginTop = '-0.5rem';
            errorDiv.style.marginBottom = '1rem';
            errorDiv.textContent = message;
            
            input.parentNode.insertBefore(errorDiv, input.nextSibling);
        }
        
        function clearError(input) {
            input.style.borderColor = '#e9ecef';
            const error = input.parentNode.querySelector('.error-message');
            if (error) {
                error.remove();
            }
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
    }
});