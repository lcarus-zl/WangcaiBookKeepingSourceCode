import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import Icon from 'components/Icon'




const NavWrapper = styled.div`
background: #fff;
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul{
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      > a{
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: #909399;
          .icon{

          }
        }
      }
    } 
  }
`
const Nav = ()=>{
  return(
    <NavWrapper>
          <ul>
            <li>
              <NavLink to="/tags" activeClassName='selected'>
              <Icon name='tag'></Icon>
                标签页
                </NavLink>
            </li>
            <li>
              <NavLink to="/money">
              <Icon name='money'></Icon>
                记账页
                </NavLink>
            </li>
            <li>
              <NavLink to="/statistics">
              <Icon name='chart'></Icon>
                统计页
                </NavLink>
            </li>
          </ul>
    </NavWrapper>

  )
}

export default Nav