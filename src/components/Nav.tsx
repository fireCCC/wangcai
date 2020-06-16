import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: #e8ae02;
          .icon {
            fill: #FFC824;
          }
        }
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                    <Icon name="tag"></Icon>
                    标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                    <Icon name="money"></Icon>
                    记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                    <Icon name="chart"></Icon>
                    统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;