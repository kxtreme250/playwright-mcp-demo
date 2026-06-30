export const testUsers = {
  valid: {
    userName: 'TestUser2024',
    password: 'Test@12345!',
  },
  invalid: {
    userName: 'invaliduser',
    password: 'wrongpassword',
  },
};

export const knownBooks = {
  gitPocketGuide: {
    isbn: '9781449325862',
    title: 'Git Pocket Guide',
    author: 'Richard E. Silverman',
  },
  learningJavaScript: {
    isbn: '9781449365035',
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
  },
  designingWebApis: {
    isbn: '9781449337711',
    title: 'Designing Evolvable Web APIs with ASP.NET',
    author: 'Glenn Block et al.',
  },
  speakingJavaScript: {
    isbn: '9781449365035',
    title: 'Speaking JavaScript',
    author: 'Axel Rauschmayer',
  },
};

export const apiEndpoints = {
  account: {
    generateToken: '/Account/v1/GenerateToken',
    user: '/Account/v1/User',
    authorized: '/Account/v1/Authorized',
  },
  bookStore: {
    books: '/BookStore/v1/Books',
    book: '/BookStore/v1/Book',
  },
};
