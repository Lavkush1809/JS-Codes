// working with filter methods

const myBooks = [
    {title: "Book one", genre: 'Fiction', publish: 1981, edition : 2004},
    {title: "Book two", genre: 'History', publish: 1995, edition : 2006},
    {title: "Book three", genre: 'Non-Fiction', publish: 2000, edition : 2008},
    {title: "Book four", genre: 'Science', publish: 2004, edition : 2014},
    {title: "Book five", genre: 'Fiction', publish: 1998, edition : 2005},
    {title: "Book six", genre: 'Non-Fiction', publish: 2010, edition : 2018},
    {title: "Book seven", genre: 'History', publish: 2015, edition : 2022},
    {title: "Book eight", genre: 'Fiction', publish: 1987, edition : 1998},
    {title: "Book nine", genre: 'Drama', publish: 1999, edition : 2007},
    {title: "Book ten", genre: 'Non-Fiction', publish: 1995, edition : 2008}
]

//const bookValues = myBooks.filter( (bk) => bk.genre === 'History')
const bookValues = myBooks.filter( (bk) => bk.publish >= 2000)
console.log(bookValues);
