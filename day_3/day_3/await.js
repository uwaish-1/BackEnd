
// function roll(num, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("roll no. ", +num);
//             resolve("succesfully done");
//         }, delay)

//     })
// }

// roll(121, 1000).then(() => {
//     roll(123, 2000).then(() => {
//         roll(124, 3000).then(() => {
//             console.log("viva completed")
//         })
//     })
// })


// function getRoll(num, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("roll no. ", +num);
//             resolve("succesfully done");
//         }, delay);

//     });
// }

// getRoll(1, 1000).then(() => {
//     getRoll(2, 2000).then(() => {
//         getRoll(3, 3000);
//     });
// });




// function getRoll(num, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("roll no. ", +num);
//             resolve("succesfully done");
//         }, delay);

//     });
// }
// async function printRollnumbers() {
//     await getRoll(121, 1000);
//     await getRoll(122, 2000);
//     await getRoll(123, 3000);

// }

// printRollnumbers();


// let url='https://github.com/uwaish-1/fsd_99.git'
// let b = fetch(url);
// b.then((data) =>{
//     console.log(data)
//     return data.json();
// }).then((data) =>{
//     console.log(data);
// }).catch(() =>{
//     console.log("error")
// }).finally(() =>{
//     console.log("first")
// })


                        async function fetchGitHubData(username) {
            const url = 'https://github.com/uwaish-1/fsd_99.git';

                        try {
                const response = await fetch(url);

                        if (!response.ok) {
                    throw new Error("User not found");
                }

                        const data = await response.json();


                        document.getElementById('name').textContent = data.login;
                        document.getElementById('bio').textContent = data.bio || "No bio available";
                        document.getElementById('repos').textContent = data.public_repos;
                        document.getElementById('followers').textContent = data.followers;
                        document.getElementById('avatar').src = data.avatar_url;


                        document.getElementById('userDetails').style.display = 'block';

            } catch (error) {
                            alert("Error: " + error.message);
                        document.getElementById('userDetails').style.display = 'none';
            }
        }


                        document.getElementById('clickButton').addEventListener('click', function() {
            const username = document.getElementById('username').value;
                        if (username) {
                            fetchGitHubData(username);
            } else {
                            alert("Please enter a GitHub username.");
            }
        });
                    