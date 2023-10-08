// if else input data mahasiswa
alert("Selamat datang Mahasiswa");
var nama = prompt("Masukkan Nama: ");
while (nama == "") {
    nama = prompt("Masukkan Nama: ");
    }
var nim = prompt("Masukkan NIM: ");
while (nim == "") {
    nim = prompt("Masukkan NIM: ");
    }
var Prodi = prompt("Masukkan Program Studi: ");
while (Prodi == "") {
    Prodi = prompt("Masukkan Program Studi: ");
    }
var angkatan = prompt("Masukkan Angkatan: ");
while (angkatan == "") {
    angkatan = prompt("Masukkan Angkatan: ");
    }
alert("Data berhasil disimpan");

var nilai = prompt("Masukkan nilai akhir (hanya berlaku angka): ");
var grade = "";
while (isNaN(nilai)) {
    nilai = prompt("Masukkan nilai akhir (hanya berlaku angka): ");
    }

switch (true) {
    case (nilai >= 90):
        grade = "A";
        break;
    case (nilai >= 80):
        grade = "B+";
        break;
    case (nilai >= 70):
        grade = "B";
        break;
    case (nilai >= 60):
        grade = "C+";
        break;
    case (nilai >= 50):
        grade = "C";
        break;
    case (nilai >= 40):
        grade = "D";
        break;
    default:
        grade = "E";
    }

alert("Grade anda: " + grade);
alert("Nama: " + nama + "\nNIM: " + nim + "\nProgram Studi: " + Prodi + "\nAngkatan: " + angkatan + "\nNilai Akhir: " + nilai + "\nGrade: " + grade);
alert("Terima kasih telah menggunakan aplikasi ini");

console.log("Nama: " + nama);
console.log("NIM: " + nim);
console.log("Program Studi: " + Prodi);
console.log("Angkatan: " + angkatan);
console.log("Nilai Akhir: " + nilai);
console.log("Grade: " + grade);
console.log("Terima kasih telah menggunakan aplikasi ini");

// Function
function getNamaBulan(indeks) {
    var months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
  
    if (indeks >= 1 && indeks <= 12) {
      return months[indeks - 1];
    } else {
      return "Indeks bulan tidak valid";
    }
  }
  
  var indeksBulan = 1;
  var namaBulan = getNamaBulan(indeksBulan);
  console.log("Bulan dengan indeks " + indeksBulan + " adalah " + namaBulan);

//   For Statement

var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];
  
  for (var i = 0; i < months.length; i++) {
    var message = "Bulan ke-" + (i + 1) + ": " + months[i];
    alert(message);
  }

//   Switch Case

// switch case hari
var hari = prompt('masukkan nama hari! untuk mendapatkan kata-kata hari ini');
var hari = hari.toLowerCase();

switch (hari) {
    case 'senin':
        alert('Menemukan cinta sejati barangkali menjadi impian bagi semua orang yang mendambakan pujaan hati. Namun, quotes dari petikan lirik lagu Used to Be di atas mengajarkan bahwa orang yang benar-benar tulus bisa menjadi sosok cinta sejati. Kata-kata indie keren untuk caption romantis di atas bisa kamu kirimkan kepada sang gebetan.');
        break;
    case 'selasa':
        alert('Tak semua orang akan menyetujui segala pilihan yang kamu ambil, termasuk dalam urusan percintaan sekalipun. Kutipan dari lirik lagu Contaminated yang dinyanyikan oleh Banks di atas bisa menjadi pesan pengingat bahwa kamulah yang bertanggung jawab atas semua keputusanmu, bukan mereka.');
        break;
    case 'rabu':
        alert('Meski sudah berusaha menguatkan diri, berpisah dengan orang yang berarti dalam hidup akan selalu menyisakan kesedihan di hati. Bila ingin menyampaikan isi hati, kata-kata indie keren yang diambil dari lirik lagu Sampai Jumpa tersebut bisa menjadi pesan yang tepat.');
        break;
    case 'kamis':
        alert('Terkadang kamu mungkin membutuhkan waktu luang untuk bisa bernapas sejenak di tengah cepatnya dunia berjalan dalam hidupmu. Menikmati momen untuk bisa istirahat dan menghabiskan waktu dengan orang tercinta bisa menyeimbangkan kesehatan jiwa dan fisik. Kegundahan hati yang sama juga disampaikan Snow Patrol dalam quotes di atas.');
        break;
    case 'jum\'at':
        alert('Kesunyian yang kamu rasakan ketika hujan turun barangkali akan mengingatkanmu akan seseorang yang dulunya pernah mengisi hatimu. Jika ingin mengirimkan doa yang baik untuknya, kata-kata indie keren tentang hujan di atas bisa menjadi pilihan yang tepat.');
        break;
    case 'sabtu':
        alert('Meskipun cintamu padanya tidak berbalas, kamu mungkin masih merasa bahagia tiap kali berjumpa dengan sang pujaan hati. Perasaan yang sama juga disampaikan oleh Kaloka dalam petikan lirik lagu Begini Cinta tersebut.');
        break;
    case 'minggu':
        alert('besok hari senin! HAHAHAHA');
        break;
    default:
        alert('hari yang anda masukkan salah');
}

var ulang = confirm('ingin memasukkan hari lagi?');

while (ulang) {
    var hari = prompt('masukkan nama hari! untuk mendapatkan kata-kata hari ini');
    switch (hari) {
        case 'senin':
            alert('Menemukan cinta sejati barangkali menjadi impian bagi semua orang yang mendambakan pujaan hati. Namun, quotes dari petikan lirik lagu Used to Be di atas mengajarkan bahwa orang yang benar-benar tulus bisa menjadi sosok cinta sejati. Kata-kata indie keren untuk caption romantis di atas bisa kamu kirimkan kepada sang gebetan.');
            break;
        case 'selasa':
            alert('Tak semua orang akan menyetujui segala pilihan yang kamu ambil, termasuk dalam urusan percintaan sekalipun. Kutipan dari lirik lagu Contaminated yang dinyanyikan oleh Banks di atas bisa menjadi pesan pengingat bahwa kamulah yang bertanggung jawab atas semua keputusanmu, bukan mereka.');
            break;
        case 'rabu':
            alert('Meski sudah berusaha menguatkan diri, berpisah dengan orang yang berarti dalam hidup akan selalu menyisakan kesedihan di hati. Bila ingin menyampaikan isi hati, kata-kata indie keren yang diambil dari lirik lagu Sampai Jumpa tersebut bisa menjadi pesan yang tepat.');
            break;
        case 'kamis':
            alert('Terkadang kamu mungkin membutuhkan waktu luang untuk bisa bernapas sejenak di tengah cepatnya dunia berjalan dalam hidupmu. Menikmati momen untuk bisa istirahat dan menghabiskan waktu dengan orang tercinta bisa menyeimbangkan kesehatan jiwa dan fisik. Kegundahan hati yang sama juga disampaikan Snow Patrol dalam quotes di atas.');
            break;
        case 'jumat':
            alert('Kesunyian yang kamu rasakan ketika hujan turun barangkali akan mengingatkanmu akan seseorang yang dulunya pernah mengisi hatimu. Jika ingin mengirimkan doa yang baik untuknya, kata-kata indie keren tentang hujan di atas bisa menjadi pilihan yang tepat.');
            break;
        case 'sabtu':
            alert('Meskipun cintamu padanya tidak berbalas, kamu mungkin masih merasa bahagia tiap kali berjumpa dengan sang pujaan hati. Perasaan yang sama juga disampaikan oleh Kaloka dalam petikan lirik lagu Begini Cinta tersebut.');
            break;
        case 'minggu':
            alert('besok hari senin! HAHAHAHA');
            break;
        default:
            alert('hari yang anda masukkan salah');
    }
    var ulang = confirm('ingin memasukkan hari lagi?');
}

// While, do while

// while
var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];
  
  var i = 0;
  do {
    console.log("Bulan ke-" + (i + 1) + ": " + months[i]);
    i++;
// pertambahan do while
  } while (i < months.length);
  