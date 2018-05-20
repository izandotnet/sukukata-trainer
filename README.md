# sukukata-trainer
Sebuah aplikasi untuk menyediakan entri polaSukukata dan Unit Test untuk library [sukukata](https://github.com/izandotnet/sukukata/)

## Cara guna
```
$ git clone https://github.com/izandotnet/sukukata-trainer.git
$ cd sukukata-trainer
$ npm install
```

1. Sebelum memulakan aplikasi ini, cari dan *copy* beberapa contoh karangan panjang dan *paste* ke dalam fail *karangan.txt*
2. Untuk memulakan aplikasi ini, taip *command* seperti di bawah:

```
npm start
```
3. Aplikasi ini akan membuat sebuah fail *result.txt*

### Result.txt
#### Result
Semak bahagian <b>Result</b> untuk setiap ayat yang telah diproses. Sila laporkan ketidaktepatan yang dijumpai [di sini](https://github.com/izandotnet/sukukata/issues/new)
#### Unit test
Bahagian <b>Unit Test</b> boleh digunakan untuk menambahkan aturan di [index.test.js](https://github.com/izandotnet/sukukata/blob/master/__tests__/index.test.js)

#### polaSukukata
Bahagian <b>polaSukukata</b> boleh digunakan untuk menambahkan aturan di [polaSukukata.js](https://github.com/izandotnet/sukukata/blob/master/polaSukukata.js)
1. Gabungkan polaSukukata yang lama dan baru ke dalam *pola.txt*
2. Taip *command* berikut untuk menyusun polaSukukata
```
npm run sort
```
3. *Copy* hasil *polaSukukata.txt* dan *paste* ke fail [polaSukukata.js](https://github.com/izandotnet/sukukata/blob/master/polaSukukata.js)
## Sumbangan
Sila teliti aturan di [https://github.com/izandotnet/sukukata](https://github.com/izandotnet/sukukata) untuk membuat sebarang sumbangan.

## Penulis
[izandotnet](https://github.com/izandotnet)