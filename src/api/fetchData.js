import { axiosClient } from "./axiosClient" ;

export const category = {
    movie : 'movie',
    tv : 'tv',
    person : 'person',
}
// id
export const specified_Tv = {
    popular : 'popular',
    top_rated : 'top_rated',
    airing_today : 'airing_today',
    on_the_air : 'on_the_air',
}

export const specified_Movie = {
    popular : 'popular',
    top_rated : 'top_rated',
    now_playing : 'now_playing',
    upcoming : 'upcoming',
}

const fetchData = {
    getMovieList : (specify, params) => {
        const url = 'movie/' + specified_Movie[specify] ;
        return axiosClient.get(url, params) ;
    },
    getTvList : (specify, params) => {
        const url = 'tv/' + specified_Tv[specify] ;
        return axiosClient.get(url, params) ;
    },
    getDetail : (cate, id, params) => {
        const url = category[cate] + '/' + id ;
        return axiosClient.get(url, params) ;
    },
    getVideo : (cate, id) => {
        const url = category[cate] + '/' + id + '/videos' ; // id is film's https://api.themoviedb.org/3/movie/90521/videos?api_key=fb3060d281e998809345ea7bc75170b1
        return axiosClient.get(url, { params: {}}) ;
    },
    search : (cate, params) => {
        const url = 'search/' + category[cate] ; // search/movie?api_key={api_key}&query=jisd
        return axiosClient.get(url, params) ;
    },
    credits : (cate, id) => {
        const url = category[cate] + '/' + id + '/credits' ; //https://api.themoviedb.org/3/movie/507086/credits?api_key=fb3060d281e998809345ea7bc75170b1
        return axiosClient.get(url, {params:{}}) ;
    },
    similar : (cate, id) => {
        const url = category[cate] + '/' + id + '/similar' ;
        return axiosClient.get(url, {params:{}}) ;
    },
    getCastList : (params) => {
        const url = 'person/popular';
        return axiosClient.get(url,params);
    },
    getDetailPerson : (id) => {
        const url = 'person/' + id;
        return axiosClient.get(url,{params:{}})
    }
}

export default fetchData;