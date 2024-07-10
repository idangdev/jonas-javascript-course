const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/*
/////////////////////////////////////
// Destructuring Arrays

const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
*/

/*
/////////////////////////////////////
// Destructuring Objects

const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
*/

/*
/////////////////////////////////////
// The Spread Operator

const bookAuthor = [...books[0].author, ...books[1].author];
console.log(bookAuthor);

function spellWord(word) {
  console.log(...word);
}

spellWord('JavaScript');
*/

/*
/////////////////////////////////////
// Rest Pattern and Parameters

const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher);
console.log(restOfTheBook);

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length}`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/

/*
/////////////////////////////////////
// Short Circuiting (&& and ||)

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}

console.log(hasExamplesInJava(books[1]));

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
  console.log(`"${books[i].title}" provides online content`);
}
  */

/*
/////////////////////////////////////
// The Nullish Coalescing Operator (??)


for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
  console.log(`${books[i].title} provides no data about its online content`);
}
*/

/*
/////////////////////////////////////
// Logical Assignments Operators


for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}



// Some of the book objects from the books array have the highlighted property, which by default is set to true. 
// Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, 
// reassign it with false.

Use the &&= operator (tip: you may also need the ! operator)



for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

console.log(books);
*/

/*
/////////////////////////////////////
// Looping Arrays: The for-of Loop


// 1.
let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

// 2.
const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

console.log(allAuthors);

// 3.
for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}

*/

/*
/////////////////////////////////////
// Enhanced Object Literals



// 1.
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

//2.

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);

*/

/*
/////////////////////////////////////
// Optional Chaining (?.)


function getFirstKeyword(book) {
  return book.keywords?.[0];
}

console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));

*/

/*
/////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

const entries = [];

// 1.

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// console.log(entries);

// 2.
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

// console.log(entries);

// 3.
const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 4.
console.log(entries);
console.log(entries2);

*/

/////////////////////////////////////
// Sets

/*
// 1.

const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

// 2.
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// 3.
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);

// 4.
uniqueKeywords.delete('business');
console.log(uniqueKeywords);

// 5.
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// 6.
uniqueKeywords.clear();
console.log(uniqueKeywords);

*/

/////////////////////////////////////
// Maps: Fundamentals
/*
// 1.
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

console.log(bookMap);

// 2.
bookMap.set('pages', 464);
console.log(bookMap);

// 3.
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// 4.
console.log(bookMap.size);

if (bookMap.has('author')) console.log('The author of the book is known');

*/

/////////////////////////////////////
// Maps: Iteration
/*
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}
*/

/////////////////////////////////////
// Working with Strings - Part 1

/*

//1. Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

//1. Ambil properti ISBN book pertama dari array books, dan log ke karakter konsol pada indeks 6, 4, 9 dan 8. Gunakan notasi tanda kurung untuk mengakses karakter individual.

console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8]
);

// 2. Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

// 2. Di bawah ini adalah variabel kutipan yang menyimpan string. Temukan indeks kata 'catur', dan catat ke konsol.

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess'));

// 3. Extract the word "boxing" from the same quote string, and log it to the console.
// 3. Ekstrak kata "boxing" dari string kutipan yang sama, dan catat ke konsol.

console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// 4. Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

// 4. Beberapa penulis dicatat sebagai "(Kontributor)", misalnya "Julie Sussman (Kontributor)". Buat fungsi bernama isContributor yang menggunakan nama penulis sebagai argumen, dan mengembalikan nilai true (jika dia adalah kontributor) atau false (jika dia bukan kontributor). String "(Kontributor)" selalu menjadi bagian terakhir dari string nama penulis.

const isContributor = function (author) {
  return author.lastIndexOf('(Contributor)') !== -1;
};

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));

*/

/////////////////////////////////////
// Working with Strings - Part 2

// 1. Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces

// 1. Tulis fungsi bernama normalizeAuthorName yang mengambil nama pengarang (string) sebagai argumen, dan mengembalikan string yang sama, tetapi nama depan dan nama belakang ditulis dengan huruf kapital, dan bagian "(Kontributor)" dihapus (jika ada).

// Anda dapat memastikan bahwa nama pengarang selalu terdiri dari dua kata yang dipisahkan oleh spasi, dan mungkin diakhiri dengan "(Kontributor)". String tersebut juga dapat berisi spasi tambahan

const normalizeAuthorName = function (author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));

  let lastName = '';
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
  }

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + ' ' + capitalizedLastName;
};

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// 2. Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

// 2. Ambil judul books kedua (books[1]) dari array books, dan ganti kata "Programs" dengan "Software". Tetapkan string baru ke variabel newBookTitle.

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

// 3. Write a function called logBookTheme that takes book's title (string), and logs to the console:

// "This book is about computers" if the title starts with the word "computer",

// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

// and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

// The title may contain both small and capital letters.

// 3. Tulis fungsi bernama logBookTheme yang mengambil judul buku (string), dan mencatatnya ke konsol:

// "Buku ini tentang komputer" jika judulnya dimulai dengan kata "komputer",

// "Buku ini tentang algoritma dan struktur data" jika judulnya menyertakan kata "algoritma" dan "struktur",

// dan, "Buku ini tentang beberapa sistem, tetapi jelas bukan tentang sistem operasi" jika judulnya diakhiri dengan kata "sistem" atau "sistem-sistem", tetapi tidak menyertakan kata "operasi".

// Judul dapat berisi huruf kecil dan huruf kapital.

const logBookTheme = function (title) {
  title = title.toLowerCase();

  if (title.startsWith('Computer')) {
    console.log('This book is about computers');
  } else if (title.includes('algorithms') && title.includes('structures')) {
    console.log('This book is about algorithms and data structures');
  } else if (
    (title.endsWith('system') || title.endsWith('systems')) &&
    !title.includes('operating')
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
};
