import{s,r as l,g as t,j as e,a as r,L as o,N as c}from"./index.e2a3ca5b.js";const m=s.div`
    .module {
       
        .module-header{
            padding:0.62rem 0.5rem 0.56rem 0.5rem;
            border: 0 0 1px 0;
            display:flex;
            justify-content: space-between;
            /* width:20.72rem; */
            /* height:1.24rem; */
            .nav{

                display: flex;
                .icon  {
                    
                    margin:0.05rem 1rem 0 0;
                    i{
                        font-size:0.9rem;
                    }
                }
                .title {
                    color:33373D;
                    font-size:0.78rem;
                }
            }
            .bar{
                display:flex;
                .icon1{
                    margin:0 0.25rem;
                    i{
                        font-size:1rem;
                    }
                }
                .icon2{
                    margin:0 0.5rem;
                    i {
                        font-size:0.9rem;
                    }
                }
            }
        }
        .book {
            li{ 
                .item {
                    margin:0 0.3rem 0.3rem 0.3rem;
                    display:flex;
                    border: 0 0 1px 0 ;
                    p{
                        margin: 0 0.4rem 0 0;
                        img{
                        width: 3.71rem;
                        height: 4.95rem;
                        }                          
                    }
                    .content {
                            .title{
                                color:#33373D;
                                font-size:0.8rem;
                                font-weight:bold;
                                text-align:left;
                            }
                            .text{
                                margin: 0.5rem 0 0 0;
                                color: #969BA3;
                                font-size:0.78rem;
                                display: -webkit-box;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                            }
                            .label{
                                margin: 0.5rem 0 0.2rem 0;
                                display:flex;
                                .mear{
                                    text-align:left;
                                    flex:1;
                                    color: #969BA3;
                                    font-size:0.73rem;
                                    }
                                .type{
                                    color: #969BA3;
                                    font-size:0.73rem;
                                }
                            }
                           
                        }
                }
                    
            }
        }
    }
`;function f(){const[a,n]=l.exports.useState([]);return l.exports.useEffect(()=>{(async()=>{let{data:i}=await t();n(i),console.log(a)})()},[]),e(m,{children:r("div",{className:"module",children:[r("div",{className:"module-header",children:[r("div",{className:"nav",children:[e("div",{className:"icon",children:e(o,{to:"/select/male",children:e("i",{className:"iconfont icon-fanhui"})})}),e("h2",{className:"title",children:"\u7545\u9500\u7CBE\u9009\xB7\u8D77\u70B9\u4E2D\u6587\u7F51"})]}),r("div",{className:"bar",children:[e("div",{className:"icon1",children:e("i",{className:"iconfont icon-suosou"})}),e("div",{className:"icon2",children:e("i",{className:"iconfont icon-gengduo1"})})]})]}),e("ol",{className:"book",children:(()=>a.map(i=>e("li",{children:e(c,{to:"/eleme/all",children:r("div",{className:"item",children:[e("p",{children:e("img",{src:i.img})}),r("div",{className:"content",children:[e("p",{className:"title",children:i.title}),r("p",{className:"text",children:[" ",i.content]}),r("div",{className:"label",children:[e("p",{className:"mear",children:i.mear}),e("p",{className:"type",children:i.type})]})]})]})},i.id)},i.id)))()})]})})}export{f as default};
