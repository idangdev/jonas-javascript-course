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

1. Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

=============
1. Berikut adalah allKeywords variabel yang menyimpan array kosong. Loop array books tersebut dan isi array allKeywords tersebut dengan keywords yang berasal dari properti keywords setiap objek book. Array allKeywords tersebut seharusnya hanya memiliki satu level (tanpa array bertingkat).

Gunakan loop dan metode apa pun yang Anda inginkan. Anda juga dapat menggunakan sintaksis spread. Pada akhirnya, array allKeywords akan terlihat kurang lebih seperti ini: ['computer science', 'programming', 'algorithms', 'data structures', ...].

*/

const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}

/*

2. The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

2. Array allKeyword berisi duplikat. Hapus mereka dengan membuat Set dari array itu. Tetapkan Sets yang baru dibuat ke variabel UniqueKeywords.

*/

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

/*

3. Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

3. Tambahkan dua kata kunci lagi ke kumpulan Kata Kunci unik, misalnya, 'coding' dan 'science'.

*/

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
console.log(uniqueKeywords);

/*

4. Delete 'business' from the uniqueKeywords set.

4. Delete 'business' dari set uniqueKeywords.

*/

uniqueKeywords.delete('business');
console.log(uniqueKeywords);

/*

5. Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

5. Buat array dari uniqueKeywords set, dan masukkan ke uniqueKeywordsArr variable.


*/

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

/*

6. Delete all items from the uniqueKeywords set.

6. Hapus semua item dari uniqueKeywords set.

*/

uniqueKeywords.clear();
console.log(uniqueKeywords);
