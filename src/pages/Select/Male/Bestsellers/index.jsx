import React from 'react'
import { Wrapper } from './style'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Bestsellers({ bestsellers }) {
    const renderBtnBannersPage1 = () => {
        // console.log(bestsellers)
        return bestsellers.map(item => {
            return (
                <li key={item.id}>
                    <NavLink
                        to="/eleme/all"
                        key={item.id}
                    >
                        <div className="item">
                            <p><img src={item.img} /></p>
                            <div className="content">
                                <span className='title'>{item.title}</span>
                                <p> {item.content}</p>
                                <div className="label">
                                    <p className='mear'>{item.mear}</p>
                                    <p className='type'>{item.type}</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </li>
            )
        })
    }
    return (
        <Wrapper>
            <div className="module">
                <div className="module-header">
                    <div className='nav'>
                        <h2>畅销精选</h2>
                        <NavLink className='icon' to="/more">
                            <h2>更多</h2>
                            <div >
                                <p className='iconfont icon-gengduo'></p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <ol className="book">
                    {renderBtnBannersPage1()}
                </ol>
            </div>
        </Wrapper>
    )
}

Bestsellers.propTypes = {
    bestsellers: propTypes.array.isRequired
}
