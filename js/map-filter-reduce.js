const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

console.log('Users that know at least 3 languages');
console.log(users.filter(user => user.languages.length >= 3));

console.log('All the emails');
console.log(users.map(user => user.email));

const result = users.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
}, {});
console.log(result);

const total = [1, 2, 3, 4].reduce((accumulator, current) => {
    // console.log(accumulator);
    // console.log(current);
    return accumulator + current;
}, '');
console.log(total);

const users1 = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

console.log('Users that know at least 3 languages');
console.log(users1.filter(user => user.languages.length >= 3));

console.log('All the emails');
console.log(users1.map(user => user.email));

const result1 = users1.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
}, {});
console.log(result1);

const total1 = [1, 2, 3, 4].reduce((accumulator, current) => {
    // console.log(accumulator);
    // console.log(current);
    return accumulator + current;
}, '');
console.log(total1);