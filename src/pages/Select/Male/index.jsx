import React, { useEffect, useState } from 'react'
import { getBanners, getNavbars, getBestsellers } from '@/api/request'
import { Wrapper } from './style'
import Banners from './Banners'
import Navbars from './Navbars'
import Bestsellers from './Bestsellers'
import Recommend from './Recommend'
import { getRecommend } from '../../../api/request'

export default function Male() {
    const [banners, setBanners] = useState([])
    const [navbars, setNavbars] = useState([])
    const [bestsellers, setBestsellers] = useState([])
    const [recommend, setRecommend] = useState([])
    useEffect(() => {
        (async () => {
            let { data: bannerData } = await getBanners()
            let { data: navbarData } = await getNavbars()
            let { data: bestsellerData } = await getBestsellers()
            let { data: recommendData } = await getRecommend()
            setBanners(bannerData)
            setNavbars(navbarData)
            setBestsellers(bestsellerData)
            setRecommend(recommendData)
            // console.log(bannerData);
        })()
    }, [])
    return (
        <Wrapper>
            <Banners banners={banners} />
            <Navbars navbars={navbars} />
            <Bestsellers bestsellers={bestsellers} />
            <Recommend recommend={recommend} />
            <Recommend recommend={recommend} />
        </Wrapper>
    )
}
