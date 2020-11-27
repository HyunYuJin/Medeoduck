document.addEventListener("DOMContentLoaded", () => {
    // 유사 배열 객체나 반복 가능한 객체를 얕게 복사해서 새로운 Array를 만든다.
    const images = Array.from(document.querySelectorAll("img.lazy-load"));

    // IntersectionObserver: Target Element가 화면에 노출되었는지 여부를 간단하게 구독할 수 있는 API다.
    // scroll이 일어날 때마다 특정 Element가 화면에 존재 여부를 계속 계산
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;

                    // 각 이미지 표시 사이의 지연(ms)
                    setTimeout(() => img.classList.add("loaded"), 75 * (i - 1));
                    imageObserver.unobserve(img);
                }
            })
        });

        images.forEach((img) => imageObserver.observe(img));
    } else {
        images.forEach((img) => {
            img.src = img.dataset.src;
            img.classList.add("loaded");
        });
    }
});