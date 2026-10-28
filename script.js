// تشغيل تأثير الكتابة التلقائية بطابع الهاكر
const message = ">> أهلاً بك في موقع Hafed الذكي. نظام الحماية والذكاء يعمل بكفاءة عالية.";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        document.getElementById("hacker-box").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// تشغيل الدالة أول ما تفتح الصفحة
window.onload = function() {
    typeWriter();
};