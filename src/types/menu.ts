export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

/*
export type Menu = {...}: Ini adalah definisi tipe Menu. Dengan pendeklarasian ini, Anda membuat sebuah tipe baru yang memiliki struktur yang telah ditentukan. Tipe Menu memiliki properti-properti seperti id, title, path, newTab, dan submenu. Dengan mendefinisikan tipe ini, Anda memberikan kejelasan mengenai struktur data apa yang diharapkan untuk digunakan di berbagai bagian kode Anda. Penggunaan tipe ini juga memungkinkan Anda untuk mendeteksi kesalahan saat kompilasi jika terjadi kesalahan dalam penggunaan data dengan tipe yang tidak sesuai.
*/
