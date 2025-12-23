// استيراد Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCj2KcKS_lHIC1SA3l98veS76RK4v36aAQ",
  authDomain: "github-site-ad4f9.firebaseapp.com",
  projectId: "github-site-ad4f9",
  storageBucket: "github-site-ad4f9.firebasestorage.app",
  messagingSenderId: "517023471780",
  appId: "1:517023471780:web:6624bc6c18b8ce44a8ee31",
  measurementId: "G-4LRT4X7GGC"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // تهيئة Firebase Authentication
const analytics = getAnalytics(app); // تهيئة التحليلات

// تحديد الأصوات
const loginSound = document.getElementById('loginSound');
const clickSound = document.getElementById('clickSound');

// التعامل مع نموذج التسجيل
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // تشغيل الصوت عند تسجيل الدخول
    loginSound.play();

    // إنشاء مستخدم جديد باستخدام Firebase Auth
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`تم التسجيل بنجاح! أهلاً بك, ${username}`);

            // إظهار صفحة المستخدم بعد التسجيل
            document.getElementById('userDashboard').classList.remove('hidden');
            document.getElementById('userName').innerText = username;

            // إخفاء نموذج التسجيل
            document.querySelector('.signup-form').style.display = 'none';
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`خطأ في التسجيل: ${errorMessage}`);
        });
});

// التعامل مع الخيارات بعد التسجيل
document.getElementById('viewProfile').addEventListener('click', function () {
    // تشغيل الصوت عند النقر
    clickSound.play();
    alert('عرض الملف الشخصي');
    // هنا يمكنك إضافة كود لعرض بيانات المستخدم أو توجيه المستخدم إلى صفحة ملفه الشخصي
});

document.getElementById('changeSettings').addEventListener('click', function () {
    // تشغيل الصوت عند النقر
    clickSound.play();
    document.getElementById('settingsModal').classList.toggle('hidden');
    // هنا يمكنك إضافة كود لتمكين المستخدم من تغيير الإعدادات مثل تغيير كلمة المرور أو البريد الإلكتروني
});

document.getElementById('logout').addEventListener('click', function () {
    // تشغيل الصوت عند النقر
    clickSound