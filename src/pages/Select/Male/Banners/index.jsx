import React, { useEffect } from 'react'
import { BannersWrapper } from './style'
import propTypes from 'prop-types'
import Swiper from 'swiper'
import { NavLink } from 'react-router-dom'

export default function Banners({ banners }) {
    // let swiper = null;
    useEffect(() => {
        // if (swiper) {
        //     return
        // }
        new Swiper('.btn-banners', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination'
            }

        })
    })
    // const renderBtnBannersPage1 = () => {
    //     return 
    //         return (

    //         )
    //     })
    // }

    return (
        <BannersWrapper>
            <div className="btn-banners swiper-container">
                <div className="swiper-wrapper" >
                    {banners.map(item =>
                    (
                        <div className="swiper-slide" key={item.id}>
                            <NavLink
                                to="/eleme/all"
                                className="swiper-item"
                            >
                                <img src={item.img} alt="" width="100%" />
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination">
                </div>
                <div className="swiper-pagination-bullet-active"></div>
            </div>
        </BannersWrapper>
    )
}

Banners.propTypes = {
    banners: propTypes.array.isRequired
}