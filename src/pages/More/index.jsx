import React, { useEffect, useState } from 'react'
import { getMore } from '@/api/request'
import { NavLink, Link } from 'react-router-dom'
import { Wrapper } from './style'

export default function More() {
    const [more, setMore] = useState([])
    useEffect(() => {
        (async () => {
            let { data: moreData } = await getMore()
            setMore(moreData)
            console.log(more);
        })()
    }, [])
    const renderBtnBannersPage1 = () => {
        // console.log(bestsellers)
        return more.map(item => {
            return (
                <li key={item.id}>
                    <NavLink
                        to="/eleme/all"
                        key={item.id}
                    >
                        <div className="item">
                            <p><img src={item.img} /></p>
                            <div className="content">
                                <p className='title'>{item.title}</p>
                                <p className='text'> {item.content}</p>
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
            <div className='module'>
                <div className="module-header">
                    <div className="nav">
                        <div className="icon">
                            <Link to='/select/male'>
                                <i className='iconfont icon-fanhui' ></i>
                            </Link>
                        </div>
                        <h2 className='title'>畅销精选·起点中文网</h2>
                    </div>
                    <div className="bar">
                        <div className="icon1">
                            <i className='iconfont icon-suosou'></i>
                        </div>
                        <div className="icon2">
                            <i className='iconfont icon-gengduo1'></i>
                        </div>
                    </div>
                </div>
                <ol className='book'>
                    {renderBtnBannersPage1()}
                </ol>
            </div>
        </Wrapper>
    )
}

