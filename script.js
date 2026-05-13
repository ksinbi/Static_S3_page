document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const cards = document.querySelectorAll('.card');

    // CTA 버튼 클릭 이벤트
    ctaButton.addEventListener('click', () => {
        alert('AI NEXA 베타 서비스 신청이 완료되었습니다!');
        ctaButton.innerText = '신청 완료';
        ctaButton.style.backgroundColor = '#4facfe';
    });

    // 스크롤 애니메이션 (간단한 등장 효과)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});