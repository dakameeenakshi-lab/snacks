// =====================================================
// LAY'S
// =====================================================

import lays from "../images/lays.jpg";
import classicSalted from "../images/Classic Salted.png";
import magicMasala from "../images/Magic Masala.jpg";
import creamOnion from "../images/American Style Cream & Onion.jpg";
import spanishTomato from "../images/Spanish Tomato Tango.jpg";
import chileLimon from "../images/Chile Limon.jpg";


// =====================================================
// KURKURE
// =====================================================

import kurkure from "../images/kurkure.jpg";
import masalaMunch from "../images/Masala Munch.jpg";
import chilliChatka from "../images/chilliChatka.jpg";
import greenChutney from "../images/greenChutney.jpg";
import hyderabadiHungama from "../images/hyderabadiHungama.jpg";
import puffcorn from "../images/puffcorn.jpg";


// =====================================================
// BINGO
// =====================================================

import bingo from "../images/bingo.jpg";
import tedheMedhe from "../images/tedheMedhe.jpg";
import madAngles from "../images/Mad Angles.jpg";
import nachos from "../images/nachos.jpg";


// =====================================================
// HALDIRAM'S
// =====================================================

import haldirams from "../images/Haldiram's.jpg";
import alooBhujia from "../images/Aloo Bhujia.jpg";
import bhujiaSev from "../images/Bhujia Sev.jpg";
import allRounder from "../images/allRounder.jpg";
import navrattan from "../images/Navrattan.jpg";
import moongDal from "../images/Moong Dal.jpg";


// =====================================================
// HAPPILO
// =====================================================

import happilo from "../images/happilo.png";
import happiloAlmonds from "../images/happiloAlmonds.jpg";
import happiloCashews from "../images/happiloCashews.jpg";
import happiloPistachios from "../images/happiloPistachios.jpg";
import happiloMixed from "../images/happiloMixed.jpg";


// =====================================================
// YOGA BAR
// =====================================================

import yogabar from "../images/yogabar.png";
import yogabarChocolate from "../images/yogabarChocolate.jpg";
import yogabarPeanut from "../images/yogabarPeanut.jpg";
import yogabarAlmond from "../images/yogabarAlmond.jpg";
import yogabarProtein from "../images/yogabarProtein.jpg";


// =====================================================
// OREO
// =====================================================

import oreo from "../images/oreo.jpg";
import oreoOriginal from "../images/oreoOriginal.png";
import oreoChocolate from "../images/oreoChocolate.jpg";
import oreoStrawberry from "../images/oreoStrawberry.jpg";
import oreoVanilla from "../images/oreoVanilla.jpg";


// =====================================================
// PARLE
// =====================================================

import parle from "../images/Parle.jpg";
import parleG from "../images/parleG.jpg";
import hideSeek from "../images/hideSeek.jpg";
import krackJack from "../images/krackJack.jpg";
import monaco from "../images/monaco.jpg";


// =====================================================
// BRITANNIA
// =====================================================

import britannia from "../images/britannia.jpg";
import goodDay from "../images/goodDay.jpg";
import bourbon from "../images/bourbon.jpg";
import marieGold from "../images/marieGold.jpg";
import marieLight from "../images/marieLight.jpg";


// =====================================================
// SUNFEAST
// =====================================================

import sunfeast from "../images/sunfeast.jpg";
import darkFantasy from "../images/darkFantasy.jpg";
import treat from "../images/treat.png";


// =====================================================
// CADBURY
// =====================================================

import cadbury from "../images/cadbury.jpg";
import dairyMilk from "../images/dairyMilk.jpg";
import dairyMilkSilk from "../images/dairyMilkSilk.jpg";
import fiveStar from "../images/fiveStar.jpg";
import perk from "../images/perk.jpg";


// =====================================================
// NESTLE
// =====================================================

import nestle from "../images/nestle.png";
import kitkat from "../images/kitkat.jpg";
import munch from "../images/munch.jpg";
import milkybar from "../images/milkybar.jpg";
import kitkatDark from "../images/kitkatDark.jpg";


// =====================================================
// DRINKS
// =====================================================

import drinks from "../images/drinks.jpg";

import cocaCola from "../images/cocaCola.jpg";
import cocaColaDiet from "../images/cocaColaDiet.png";
import cocaColaZero from "../images/cocaColaZero.jpg";

import fanta from "../images/fanta.jpg";
import fantaGrape from "../images/fantaGrape.jpg";
import fantaOrange from "../images/fantaOrange.jpg";

import pepsiBlack from "../images/pepsiBlack.png";
import pepsiDiet from "../images/pepsiDiet.jpg";

import sprite from "../images/sprite.jpg";
import spriteZero from "../images/spriteZero.png";

import maaza from "../images/maaza.jpg";
import maazaMango from "../images/maazaMango.jpg";
import maazaTropical from "../images/maazaTropical.jpg";

import sting from "../images/sting.jpg";
import stingBerry from "../images/stingBerry.jpg";


// =====================================================
// PRODUCTS
// =====================================================

const products = [

  // =====================================================
  // 1. LAY'S
  // =====================================================

  {
    id: 1,
    brand: "Lay's",
    name: "Potato Chips",
    category: "Chips",
    image: lays,
    description: "Crispy and delicious Lay's potato chips.",

    variants: [

      {
        id: 101,
        name: "Classic Salted",
        grams: "50g",
        price: 20,
        image: classicSalted,
      },

      {
        id: 102,
        name: "Magic Masala",
        grams: "50g",
        price: 20,
        image: magicMasala,
      },

      {
        id: 103,
        name: "American Style Cream & Onion",
        grams: "50g",
        price: 20,
        image: creamOnion,
      },

      {
        id: 104,
        name: "Spanish Tomato Tango",
        grams: "50g",
        price: 20,
        image: spanishTomato,
      },

      {
        id: 105,
        name: "Chile Limon",
        grams: "50g",
        price: 20,
        image: chileLimon,
      },

    ],
  },


  // =====================================================
  // 2. KURKURE
  // =====================================================

  {
    id: 2,
    brand: "Kurkure",
    name: "Kurkure Snacks",
    category: "Chips",
    image: kurkure,
    description: "Crunchy and spicy Kurkure snacks.",

    variants: [

      {
        id: 201,
        name: "Masala Munch",
        grams: "90g",
        price: 20,
        image: masalaMunch,
      },

      {
        id: 202,
        name: "Chilli Chatka",
        grams: "90g",
        price: 20,
        image: chilliChatka,
      },

      {
        id: 203,
        name: "Green Chutney",
        grams: "90g",
        price: 20,
        image: greenChutney,
      },

      {
        id: 204,
        name: "Hyderabadi Hungama",
        grams: "90g",
        price: 20,
        image: hyderabadiHungama,
      },

      {
        id: 205,
        name: "Puffcorn",
        grams: "55g",
        price: 20,
        image: puffcorn,
      },

    ],
  },


  // =====================================================
  // 3. BINGO
  // =====================================================

  {
    id: 3,
    brand: "Bingo!",
    name: "Bingo! Snacks",
    category: "Chips",
    image: bingo,
    description: "Crunchy and tasty Bingo! snacks.",

    variants: [

      {
        id: 301,
        name: "Tedhe Medhe",
        grams: "90g",
        price: 20,
        image: tedheMedhe,
      },

      {
        id: 302,
        name: "Mad Angles",
        grams: "90g",
        price: 20,
        image: madAngles,
      },

      {
        id: 303,
        name: "Nachos",
        grams: "80g",
        price: 20,
        image: nachos,
      },

    ],
  },


  // =====================================================
  // 4. HALDIRAM'S
  // =====================================================

  {
    id: 4,
    brand: "Haldiram's",
    name: "Indian Snacks",
    category: "Indian Snacks",
    image: haldirams,
    description: "Traditional Indian snacks from Haldiram's.",

    variants: [

      {
        id: 401,
        name: "Aloo Bhujia",
        grams: "200g",
        price: 85,
        image: alooBhujia,
      },

      {
        id: 402,
        name: "Bhujia Sev",
        grams: "200g",
        price: 85,
        image: bhujiaSev,
      },

      {
        id: 403,
        name: "All Rounder",
        grams: "200g",
        price: 90,
        image: allRounder,
      },

      {
        id: 404,
        name: "Navrattan",
        grams: "200g",
        price: 90,
        image: navrattan,
      },

      {
        id: 405,
        name: "Moong Dal",
        grams: "200g",
        price: 90,
        image: moongDal,
      },

    ],
  },


  // =====================================================
  // 5. HAPPILO
  // =====================================================

  {
    id: 5,
    brand: "Happilo",
    name: "Healthy Dry Fruits",
    category: "Healthy Snacks",
    image: happilo,
    description: "Healthy and delicious dry fruits for everyday snacking.",

    variants: [

      {
        id: 501,
        name: "Almonds",
        grams: "100g",
        price: 150,
        image: happiloAlmonds,
      },

      {
        id: 502,
        name: "Cashews",
        grams: "100g",
        price: 180,
        image: happiloCashews,
      },

      {
        id: 503,
        name: "Pistachios",
        grams: "100g",
        price: 200,
        image: happiloPistachios,
      },

      {
        id: 504,
        name: "Mixed Dry Fruits",
        grams: "200g",
        price: 320,
        image: happiloMixed,
      },

    ],
  },


  // =====================================================
  // 6. YOGA BAR
  // =====================================================

  {
    id: 6,
    brand: "Yoga Bar",
    name: "Healthy Snack Bars",
    category: "Healthy Snacks",
    image: yogabar,
    description: "Tasty snack bars made for a quick and healthy bite.",

    variants: [

      {
        id: 601,
        name: "Chocolate Chunk",
        grams: "50g",
        price: 50,
        image: yogabarChocolate,
      },

      {
        id: 602,
        name: "Peanut Butter",
        grams: "50g",
        price: 50,
        image: yogabarPeanut,
      },

      {
        id: 603,
        name: "Almond Fudge",
        grams: "50g",
        price: 55,
        image: yogabarAlmond,
      },

      {
        id: 604,
        name: "Protein Bar",
        grams: "60g",
        price: 70,
        image: yogabarProtein,
      },

    ],
  },


  // =====================================================
  // 7. OREO
  // =====================================================

  {
    id: 7,
    brand: "Oreo",
    name: "Oreo Cookies",
    category: "Cookies",
    image: oreo,
    description: "Classic sandwich cookies with delicious fillings.",

    variants: [

      {
        id: 701,
        name: "Original Oreo",
        grams: "120g",
        price: 40,
        image: oreoOriginal,
      },

      {
        id: 702,
        name: "Oreo Chocolate",
        grams: "120g",
        price: 45,
        image: oreoChocolate,
      },

      {
        id: 703,
        name: "Oreo Strawberry",
        grams: "120g",
        price: 45,
        image: oreoStrawberry,
      },

      {
        id: 704,
        name: "Oreo Vanilla",
        grams: "120g",
        price: 45,
        image: oreoVanilla,
      },

    ],
  },


  // =====================================================
  // 8. PARLE
  // =====================================================

  {
    id: 8,
    brand: "Parle",
    name: "Parle Biscuits",
    category: "Cookies",
    image: parle,
    description: "Popular and delicious Parle biscuits.",

    variants: [

      {
        id: 801,
        name: "Parle-G",
        grams: "100g",
        price: 10,
        image: parleG,
      },

      {
        id: 802,
        name: "Hide & Seek",
        grams: "100g",
        price: 30,
        image: hideSeek,
      },

      {
        id: 803,
        name: "KrackJack",
        grams: "100g",
        price: 25,
        image: krackJack,
      },

      {
        id: 804,
        name: "Monaco",
        grams: "100g",
        price: 25,
        image: monaco,
      },

    ],
  },


  // =====================================================
  // 9. BRITANNIA
  // =====================================================

  {
    id: 9,
    brand: "Britannia",
    name: "Britannia Biscuits",
    category: "Cookies",
    image: britannia,
    description: "Classic biscuits and cookies from Britannia.",

    variants: [

      {
        id: 901,
        name: "Good Day",
        grams: "100g",
        price: 30,
        image: goodDay,
      },

      {
        id: 902,
        name: "Bourbon",
        grams: "100g",
        price: 30,
        image: bourbon,
      },

      {
        id: 903,
        name: "Marie Gold",
        grams: "100g",
        price: 25,
        image: marieGold,
      },

      {
        id: 904,
        name: "Marie Light",
        grams: "100g",
        price: 25,
        image: marieLight,
      },

    ],
  },


  // =====================================================
  // 10. SUNFEAST
  // =====================================================

  {
    id: 10,
    brand: "Sunfeast",
    name: "Sunfeast Cookies",
    category: "Cookies",
    image: sunfeast,
    description: "Delicious cookies from Sunfeast.",

    variants: [

      {
        id: 1001,
        name: "Dark Fantasy",
        grams: "75g",
        price: 40,
        image: darkFantasy,
      },

      {
        id: 1002,
        name: "Treat",
        grams: "100g",
        price: 30,
        image: treat,
      },

    ],
  },


  // =====================================================
  // 11. CADBURY
  // =====================================================

  {
    id: 11,
    brand: "Cadbury",
    name: "Cadbury Chocolates",
    category: "Chocolates",
    image: cadbury,
    description: "Classic Cadbury chocolates for every chocolate lover.",

    variants: [

      {
        id: 1101,
        name: "Dairy Milk",
        grams: "40g",
        price: 45,
        image: dairyMilk,
      },

      {
        id: 1102,
        name: "Dairy Milk Silk",
        grams: "60g",
        price: 80,
        image: dairyMilkSilk,
      },

      {
        id: 1103,
        name: "5 Star",
        grams: "40g",
        price: 40,
        image: fiveStar,
      },

      {
        id: 1104,
        name: "Perk",
        grams: "35g",
        price: 30,
        image: perk,
      },

    ],
  },


  // =====================================================
  // 12. NESTLE
  // =====================================================

  {
    id: 12,
    brand: "Nestlé",
    name: "Nestlé Chocolates",
    category: "Chocolates",
    image: nestle,
    description: "Delicious chocolate treats from Nestlé.",

    variants: [

      {
        id: 1201,
        name: "KitKat",
        grams: "41g",
        price: 50,
        image: kitkat,
      },

      {
        id: 1202,
        name: "Munch",
        grams: "32g",
        price: 30,
        image: munch,
      },

      {
        id: 1203,
        name: "Milkybar",
        grams: "40g",
        price: 40,
        image: milkybar,
      },

      {
        id: 1204,
        name: "KitKat Dark",
        grams: "50g",
        price: 70,
        image: kitkatDark,
      },

    ],
  },


  // =====================================================
  // 13. DRINKS
  // =====================================================

  {
    id: 13,
    brand: "Drinks",
    name: "Cold Drinks & Beverages",
    category: "Drinks",
    image: drinks,
    description: "Refreshing cold drinks and beverages.",

    variants: [

      {
        id: 1301,
        name: "Coca-Cola",
        grams: "500ml",
        price: 40,
        image: cocaCola,
      },

      {
        id: 1302,
        name: "Coca-Cola Diet",
        grams: "500ml",
        price: 45,
        image: cocaColaDiet,
      },

      {
        id: 1303,
        name: "Coca-Cola Zero",
        grams: "500ml",
        price: 45,
        image: cocaColaZero,
      },

      {
        id: 1304,
        name: "Fanta",
        grams: "500ml",
        price: 40,
        image: fanta,
      },

      {
        id: 1305,
        name: "Fanta Grape",
        grams: "500ml",
        price: 40,
        image: fantaGrape,
      },

      {
        id: 1306,
        name: "Fanta Orange",
        grams: "500ml",
        price: 40,
        image: fantaOrange,
      },

      {
        id: 1307,
        name: "Pepsi Black",
        grams: "500ml",
        price: 45,
        image: pepsiBlack,
      },

      {
        id: 1308,
        name: "Pepsi Diet",
        grams: "500ml",
        price: 45,
        image: pepsiDiet,
      },

      {
        id: 1309,
        name: "Sprite",
        grams: "500ml",
        price: 40,
        image: sprite,
      },

      {
        id: 1310,
        name: "Sprite Zero",
        grams: "500ml",
        price: 45,
        image: spriteZero,
      },

      {
        id: 1311,
        name: "Maaza",
        grams: "600ml",
        price: 40,
        image: maaza,
      },

      {
        id: 1312,
        name: "Maaza Mango",
        grams: "600ml",
        price: 40,
        image: maazaMango,
      },

      {
        id: 1313,
        name: "Maaza Tropical",
        grams: "600ml",
        price: 40,
        image: maazaTropical,
      },

      {
        id: 1314,
        name: "Sting",
        grams: "250ml",
        price: 30,
        image: sting,
      },

      {
        id: 1315,
        name: "Sting Berry",
        grams: "250ml",
        price: 30,
        image: stingBerry,
      },

    ],
  },

];


// =====================================================
// EXPORT
// =====================================================

export default products;