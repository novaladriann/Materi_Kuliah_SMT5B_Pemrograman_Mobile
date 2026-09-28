# Praktikum 4: React Native Navigation

## Tujuan pembelajaran

Mahasiswa Mampu:

1. Merancang dan menerapkan navigasi antar layar (screen) pada aplikasi React Native
2. Menggunakan Library React Navigation (Stack Navigation, Tab Navigation, Drawer Navigation)

## Alur Praktikum

### Langkah 1: Inisialisasi Proyek dan instalasi Dependencies React Native

1. Buka terminal atau cmd
2. Ubah directori ke Folder Pertemuan 4( cd "Materi_Kuliah_SMT5B_Pemrograman_Mobile\Pertemuan-4")
3. Buat proyek baru menggunakan perintah berikut: `npx create-expo-app pertemuan4 --template blank`
4. Masuk ke dalam folder proyek menggunakan perintah berikutL `cd pertemuan4`
5. Install core navigation library (npm install @react-navigation/native)
6. Install dependensi pendukung (wajib untuk Expo) (npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated)

### Langkah 2: Membuat Stack Navigation

1. Instalasi Pustaka Stack : `npm install @react-navigation/native-stack`
2. Membuat File Layar (Screens)
3. Di dalam screens buat 2 file dengan nama Login.js dan Signup.js
4. Masukan kode sesuai pada modul praktikum 4
5. Sesuaikan file App.js
6. Simpan dan Install dependensi untuk web `npx expo install react-dom react-native-web`
7. Jalankan perintah `npx expo start --web`
8. Konfirmasi Bukti

<img src="Bukti Screen Record Pertemuan4 Langkah 2.gif" width="25%">

### Langkah 3: Membuat Bottom Tab Navigation

1. Instalasi Pustaka Bottom Tabs `npm install @react-navigation/bottom-tabs`
2. Membuat HomeScreen.js dan ProfileScreen.js di dalam folder screens
3. Konfigurasi Tab di App.js dan Ubah isi App.js.

<img src="Bukti Screen Record Pertemuan4 Langkah 3.gif" width="25%">

### Langkah 4: Membuat Drawer Navigation

1. Instalasi Pustaka Drawer `npm install @react-navigation/drawer` . Pastikan juga plugin reanimated sudah terinstall dan dikonfigurasi di babel.config.js jika diperlukan
2. Konfigurasi Drawer di App.js, lalu Ubah kembali file App.js untuk mencoba Drawer Navigation menggunakan layar Home dan Profile yang sudah dibuat sebelumnya

<img src="Bukti Screen Record Pertemuan4 Langkah 4.gif" width="25%">