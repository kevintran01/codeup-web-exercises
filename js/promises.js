// let wait = ms => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("we're done")
//         }, ms)
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// fetch(url, {headers: {'Authorization': 'f3dacfeb499f2c78609ee23a79d6bb725e3ab7f2'}});

const getLastCommitDate = (username => {
    const url = `https://api.github.com/users/${username}/events`;
    fetch(url, {token: "token cbdcb988ace31b45f76fd6b8f1efa17ec07e2c92"})
        .then(data => {
            if (data.ok) {
                let events = data.json()
                let pushEvents = events.filter(event => event.type === "PushEvent");
                return pushEvents[0].created_at;
            }else{
                console.log("Something went wrong:");
            }
        })
        .catch(err => console.log("Something went wrong: " + err))
});

getLastCommitDate("kevintran01");