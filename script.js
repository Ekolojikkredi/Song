// Kayıt butonlarına tıklama olayları
document.getElementById("registerBtn").addEventListener("click", function() {
    document.getElementById("register-section").classList.remove("hidden");
    document.getElementById("main-content").classList.add("hidden");
});

document.getElementById("studentRegisterBtn").addEventListener("click", function() {
    document.getElementById("student-register").classList.remove("hidden");
    document.getElementById("register-section").classList.add("hidden");
});

document.getElementById("schoolRegisterBtn").addEventListener("click", function() {
    document.getElementById("school-register").classList.remove("hidden");
    document.getElementById("register-section").classList.add("hidden");
});

// Öğrenci Kaydını Tamamlama
document.getElementById("student-register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Öğrenci kaydınız başarıyla tamamlandı!");
    document.getElementById("student-register").classList.add("hidden");
    document.getElementById("waste-entry").classList.remove("hidden");
});

// Okul Kaydını Tamamlama
document.getElementById("school-register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Okul kaydınız başarıyla tamamlandı!");
    document.getElementById("school-register").classList.add("hidden");
    document.getElementById("student-register").classList.remove("hidden");
});

// Veri Girişi ve Kaydetme
document.getElementById("waste-entry-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Atık türü ve miktarını al
    let wasteType = document.getElementById("wasteType").value;
    let wasteAmount = document.getElementById("wasteAmount").value;

    // Örnek puan hesaplaması: Atık türüne göre puan ekleyebilirsiniz
    let points = calculatePoints(wasteType, wasteAmount);

    // Verileri kaydetme (localStorage örneği)
    let studentData = {
        name: document.getElementById("studentName").value,
        wasteType: wasteType,
        wasteAmount: wasteAmount,
        points: points
    };

    localStorage.setItem("studentData", JSON.stringify(studentData));

    // Öğrenciye başarı mesajı göster
    alert("Veri başarıyla kaydedildi!");

    // Veri giriş ekranını gizle, öğrenci verilerini görüntüle
    document.getElementById("waste-entry").classList.add("hidden");
    document.getElementById("student-data").classList.remove("hidden");

    // Öğrenci verilerini görüntüle
    displayStudentData();
});

// Öğrenci verilerini görüntüleme
function displayStudentData() {
    let studentData = JSON.parse(localStorage.getItem("studentData"));

    if (studentData) {
        document.getElementById("totalWaste").innerText = "Toplam Atık: " + studentData.wasteAmount + " kg";
        document.getElementById("totalPoints").innerText = "Toplam Puan: " + studentData.points;
        document.getElementById("wasteTypes").innerText = "Atık Türü: " + studentData.wasteType;
    }
}

// Atık türüne göre puan hesaplama
function calculatePoints(wasteType, wasteAmount) {
    let points = 0;

    // Atık türüne göre puan belirleme
    switch (wasteType.toLowerCase()) {
        case "plastik":
            points = wasteAmount * 5;
            break;
        case "kağıt":
            points = wasteAmount * 3;
            break;
        case "cam":
            points = wasteAmount * 4;
            break;
        case "metal":
            points = wasteAmount * 6;
            break;
        case "elektronik":
            points = wasteAmount * 10;
            break;
        case "yağ":
            points = wasteAmount * 7;
            break;
        case "tekstil":
            points = wasteAmount * 2;
            break;
        case "pil":
            points = wasteAmount * 8;
            break;
        default:
            points = wasteAmount * 1;
            break;
    }

    return points;
}

// Veri Görüntüleme Butonu
document.getElementById("viewDataBtn").addEventListener("click", function() {
    let studentData = JSON.parse(localStorage.getItem("studentData"));

    if (studentData) {
        document.getElementById("totalWaste").innerText = "Toplam Atık: " + studentData.wasteAmount + " kg";
        document.getElementById("totalPoints").innerText = "Toplam Puan: " + studentData.points;
        document.getElementById("wasteTypes").innerText = "Atık Türü: " + studentData.wasteType;
    } else {
        alert("Henüz veri girilmemiş.");
    }

    document.getElementById("student-data").classList.remove("hidden");
    document.getElementById("main-content").classList.add("hidden");
});

// Ana Sayfaya Dönme
document.getElementById("backBtn").addEventListener("click", function() {
    document.getElementById("main-content").classList.remove("hidden");
    document.getElementById("student-data").classList.add("hidden");
});
