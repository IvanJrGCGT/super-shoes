import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import logo from  './Assets/images/super-shoes.png'

export default function App(props) {
    const [data, setData] =useState([]);
    const carousel = useRef(null);
    useEffect(() => {

      fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);

    }, []);

    const handLeLeftClick = (e) => {e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handLeRightClick = (e) => {e.preventDefault();
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    if(!data || !data.length ) return null;
  const App = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: -150px;
    .right{
                        img{
                          transform: rotate(180deg);
                        }
                      }
    .olas{transform: rotate(180deg);
                        img{
                          transform: rotate(200deg);
                        }
                      }
    .left{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .container{
      text-align: center;
      align-items: center;
      justify-content: center;
      max-width: 75vw;
        .carousel {
          width: 80vw;

          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
           .item{ 
                  background-color: #fff;
                  margin: 10px;
                  padding: 10px;
                  width: 280px;
                  border-radius: 16px;
                  flex: none;

                  
                  .image{
                    img{
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                  }
                  .info{
                    height: 140px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                      span{
                        display: block;
                        text-align: center;
                        color: #1e1e1e;
                        padding: 5px;
                        border-radius: 10px;
                      }
                      .name{
                        font-size: 1.2rem;
                        font-weight: bold;
                        margin: 10px 0;
                        color: #0a3694;
                      }
                      .oldPrice{
                        font-size: .8rem;
                        text-decoration: line-through;
                        flex-grow: 1;
                        color: #e81a5d;
                      }
                      .price{
                        margin-top: 10px;
                        font-size: 1.2rem;
                        font-weight: bold;
                        background-color: #28ff5ed8;
                      }
                  }
                  
                }
                
                  }
                  .buttons{
                    width: 100%;
                    text-align: center;
                    button{
                      background-color: transparent;
                      border: none;
                      cursor: pointer;
                      
                    }
                  }
                }
    
  `

  return(
    <App>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Super Shoes Logo" />
          </div>
          <div className="left">
          <div className="buttons">
            <button onClick={handLeLeftClick}><img className=" olas"src='/static/images/216151_right_chevron_icon.png' alt="Scroll Left" /></button>
           </div>
          <div>
          <div className="carousel" ref={carousel}>
              {data.map((item) => {
                const { id, name, price, oldPrice, image} = item;
            return(
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">{oldPrice}</span>
                <span className="price">{price}</span>
              </div>
            </div>)
            })}
          </div>
          </div>
             <div className="buttons">
            <button onClick={handLeRightClick}><img className="right"src='/static/images/216151_right_chevron_icon.png' alt="Scroll Right" /></button>
          </div>
          </div>
         
        </div>
    </App>

  )
}