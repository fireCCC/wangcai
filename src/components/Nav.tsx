import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Icon from './Icon';

const NavWrapper = styled.nav`
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
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                  <Link to="/tags">
                  <Icon name="tag"></Icon>
                  标签
                  </Link>
                </li>
                <li>
                  <Link to="/money">
                  <Icon name="money"></Icon>
                  记账
                  </Link>
                </li>
                <li>
                  <Link to="/statistics">
                  <Icon name="chart"></Icon>
                  统计
                  </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;