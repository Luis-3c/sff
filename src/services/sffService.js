const ENDPOINT = 'http://localhost:3000/'


//VIDEOS SERVICES   
export function getVideosHome(){
    return fetch(ENDPOINT + 'videos/index');
}

export function getVideo(id){
    return fetch(ENDPOINT + 'video/' + id)
}

export function getVideosRecommend(){
    return fetch(ENDPOINT + 'videos/recommend')
}