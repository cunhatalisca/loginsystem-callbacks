const loginUser = (email, password, onSucess, onError) => {
    setTimeout(() => {
            const error = false;
            if (error) {
                return onError(new Error('error on login!'));
            }
        
        console.log("user logged!");
        onSucess({email: email});
    }, 1500)
}

const getUserDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: 'video-tile' })
    })
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback('Videos de futebol', 'Videos de culinária')
    }, 2000)
}

const user = loginUser(
    'gabrielvlog11@gmail.com',
    '1234567',
    (user) => {  // valida o usuário através do onSucess()
        getUserVideos(user.email, (videos) => {
            console.log({videos});
            getUserDetails(videos[0], (videoDetails) => {
                console.log({videoDetails})
            })

        })
    }, 
    (error) => { // exibe o 'error' caso a const error = true através do onError()
    console.log({error});
})
