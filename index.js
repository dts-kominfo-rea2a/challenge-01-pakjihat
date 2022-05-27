// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// User Ke-1
// cek duplikat warna
const arrFavoriteColorU1=["Yellow", "Pink", "White", "Purple"];
const FavoriteColorU1=new Set(arrFavoriteColorU1);
const backFavoriteColorU1=[...FavoriteColorU1];

// cek duplikat restorant
const arrFavoriteRestaurantU1=["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
const FavoriteRestaurantU1=new Set(arrFavoriteRestaurantU1);
const backTofavoriteRestaurantU1=[...FavoriteRestaurantU1];

// Data User Ke-1
const firstUser = {
    name:"Monica",
    gender:"Female",
    age:17,
    email:"monica@dingdong.com",
    favoriteColor:backFavoriteColorU1,
    isHavePet:"Yes",
    education:[
        {
            name:"SD 01",
            city:"Jakarta",
            graduate:2016
        },
        {
            name:"SMP 02",
            city:"Jakarta",
            graduate:2019
        },
        {
            name:"SMA 03",
            city:"Tangerang"
        }
    ],
    favoriteRestaurant:backTofavoriteRestaurantU1
    

};


// User Ke-2
// cek duplikat color
const arrFavoriteColorU2=["Blue","Black", "Grey"];
const FavoriteColorU2=new Set(arrFavoriteColorU2);
const backFavoriteColorU2=[...FavoriteColorU2];

// cek duplikat restorant
const arrFavoriteRestaurantU2=["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];
const FavoriteRestaurantU2=new Set(arrFavoriteRestaurantU2);

const backTofavoriteRestaurantU2=[...FavoriteRestaurantU2];

// Data User ke-2
const secondUser = {
    name:"Wendy",
    gender:"Male",
    age:23,
    email:"wendy@dingdong.com",
    favoriteColor:backFavoriteColorU2,
    isHavePet:"No",
    education:[
        {
            name:"SD 02",
            city:"Jakarta",
            graduate:2010
        },
        {
            name:"SMP 03",
            city:"Bogor",
            graduate:2013
        },
        {
            name:"SMA 01",
            city:"Surabaya",
            graduate:2016,
        },
        {
            name:"Universitas Maju",
            city:"Tangerang",

        }
    ],
    favoriteRestaurant:backTofavoriteRestaurantU2

};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users=[firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};

