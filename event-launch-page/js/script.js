// main.js
// = script.js

// 스크롤 하면 제품 이미지가 살짝 확대되는 기능
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero img");
  let scroll = window.scrollY;

  console.log("스크롤작동&이미지확대");
  hero.style.transform = `scale(${1 + scroll * 0.0005})`;
});


// ------------------------------------------- ⬇️ 애플 스타일 스크롤 인터랙션 추가
// section 등장 애니메이션
/*  효과:
    스크롤⬇️⬇
    섹션이 부드럽게 올라오면서 등장
*/
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});


// Hero 이미지 확대 (애플 스타일)
/*  효과:
    스크롤하면 제품 이미지가 천천히 확대
*/
gsap.to(".hero img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


// Feature 텍스트 순차 등장
/*  효과:
    카메라 ➡️ 배터리 ➡️ 디스플레이 순서대로 등장
*/
gsap.from(".feature-item", {
  opacity: 0,
  y: 50,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".feature",
    start: "top 80%"
  }
});


// ------------------------------------------- ⬇️ 포트폴리오 랜딩페이지 실제 취업용 수준으로 업그레이드
// 패럴랙스 스크롤 추가
/*  효과:
    스크롤⬇️⬇
    이미지가 천천히 아래로 이동 (패럴랙스 효과)
*/
gsap.to(".hero img", {
  y: 200,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
// 텍스트 애니메이션 (애플 스타일)
gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3
});