import axios from 'axios'

export const getBanners = () =>
    axios.get('https://www.fastmock.site/mock/d561e8a3e79db6ef8c66099546e04efa/qidian/banners')
export const getNavbars = () =>
    axios.get('https://www.fastmock.site/mock/d561e8a3e79db6ef8c66099546e04efa/qidian/navbars')
export const getBestsellers = () =>
    axios.get('https://www.fastmock.site/mock/d561e8a3e79db6ef8c66099546e04efa/qidian/bestsellers')
export const getRecommend = () =>
    axios.get('https://www.fastmock.site/mock/d561e8a3e79db6ef8c66099546e04efa/qidian/recommend')
export const getMore = () =>
    axios.get('https://www.fastmock.site/mock/d561e8a3e79db6ef8c66099546e04efa/qidian/more')