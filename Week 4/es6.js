//Bagian 1
const mahasiswa = {
    nama: "Fajar",
    jurusan: "Sistem Informasi",
    ipk: 3.8,
    hobi: ["Sepak Bola", "Membaca", "Coding"]
};

const { nama, jurusan, ipk } = mahasiswa;
const [hobiPertama, hobiKedua, hobiKetiga] = mahasiswa.hobi;
console.log(mahasiswa);
console.log(hobiPertama);

//Bagian 2
const nilaiUjian = [75, 90, 60, 85, 95, 70, 55, 88, 92, 65];

const nilaiLulus = nilaiUjian.filter(n => n >= 70);
console.log(nilaiLulus);

const tampilLulus = nilaiLulus.map(n => `Nilai:  ${n} ✅`);
console.log("Nilai: " + tampilLulus);

const totalNilai = nilaiUjian.reduce((total, n) => total + n, 0);
console.log("Total Nilai: " + totalNilai);

const cariNilaiPertama = nilaiUjian.find(n => n > 80);
console.log("Nilai pertama yang lebih dari 80: " + cariNilaiPertama);

//Bagian 3
const dataPribadi = { nama: "Fajar", umur: 27 };
const dataAkademik = { jurusan: "Sistem Informasi", ipk: 3.8 };
const lengkap = { ...dataPribadi, ...dataAkademik };
console.log(lengkap);
const dataBaru = { ...dataPribadi, kota: "Tangerang" };
console.log(dataBaru);