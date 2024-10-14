const navbarlink = document.querySelector(".navbarlink");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburger = document.querySelector(".humburger");
const primarycontaint = document.querySelector(".primary-containt");
const linksInPrimaryContaint = primarycontaint.querySelectorAll("a");

humburger.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbarlink.classList.toggle("active");

  if (navbarlink.classList.contains("active")) {
    linksInPrimaryContaint.forEach((link) => {
      link.style.zIndex = "-1"; // تعيين z-index إلى -1 إذا كانت القائمة نشطة
    });
  } else {
    linksInPrimaryContaint.forEach((link) => {
      link.style.zIndex = "10"; // إعادة z-index إلى القيمة الأصلية أو القيمة المرغوبة عند إلغاء النشاط
    });
  }

  // if (navbarlink) {
  // }
  // linksInPrimaryContaint.forEach((link) => {
  //   if (link.style.zIndex === "10") {
  //     link.style.zIndex = "-1"; // إعادة z-index إلى القيمة الأصلية أو أقل
  //   } else {
  //     link.style.zIndex = "-1"; // تعيين z-index 2
  //   }
  // });

  // linksInPrimaryContaint.setAttribute("background-color,#000");
  // navbarlink.setAttribute("z-index", "10");
  // if (primarycontaint.getAttribute("tabindex") != "10") {
  //   primarycontaint.setAttribute("tabindex", "-1");
  //   humburger.setAttribute("tabindex", "10"); // إزالة التركيز القابل للوحة المفاتيح
  // } else {
  //   primarycontaint.setAttribute("tabindex", "10"); // تعيين tabindex 2
  // }
});
