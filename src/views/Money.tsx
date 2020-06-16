import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagsSection = styled.section`
    > ol {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;
        height: 250px;
        overflow: scroll;
        > li {
            background: #fff;
            &: hover {
                background: #fed55f;
            }
            border: 2px solid black;
            border-radius: 34px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4px 12px;
            margin: 10px 5px;
            font-size: 14px;
            .icon {
                width: 36px;
                height: 36px;
            }
        }
    }
    > button {
        background: none;
        border: none;
    }
`

const NotesSection = styled.section`
    padding: 0 25px;
    font-size: 14px;
    > label {
        display: flex;
        align-items: center;
        > span {
            margin-right: 16px;
            white-space: nowrap;
        }
        > input {
            display: block;
            width: 100%;
            height: 72px;
            background: none;
            border: none;
        }
    }
`

const CategorySection = styled.section`
    font-size: 20px;
    > ul {
        display: flex;
        background: #FFc824;
        background-image:url('${require('../icons/background1.png')}');
        padding: 0 100px;
        > li {
            width: 50%;
            text-align: center;
            padding: 14px 0;
            position: relative;
            &.selected::after {
                content: '';
                display: block;
                height: 2px;
                background: #fed55f;
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
            }
        }
    }
`

const NumberPadSection = styled.section`

`

const TagList = styled.ol`
    
`


function Money() {
    return (
        <Layout>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <TagsSection>
                <ol>
                    <li>
                        <Icon name="clothes"></Icon>
                        衣服
                    </li>
                    <li>
                        <Icon name="pizza"></Icon>
                        餐食
                    </li>
                    <li>
                        <Icon name="heart"></Icon>
                        房租
                    </li>
                    <li>
                        <Icon name="surf-van"></Icon>
                        打车
                    </li>
                    <li>
                        <Icon name="entertainment"></Icon>
                        娱乐
                    </li>
                    <li>
                        <Icon name="fruit"></Icon>
                        水果
                    </li>
                    <li>
                        <Icon name="sweet"></Icon>
                        冷饮
                    </li>
                    <li>
                        <Icon name="coconut"></Icon>
                        饮品
                    </li>
                    <li>
                        <Icon name="kebab"></Icon>
                        烧烤
                    </li>
                    <li>
                        <Icon name="tissue-paper"></Icon>
                        日用
                    </li>
                    <li>
                        <Icon name="beer"></Icon>
                        酒水
                    </li>
                    <li>
                        <Icon name="plus"></Icon>
                        添加
                    </li>
                </ol>
                {/* <button>新增标签</button> */}
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="写点备注吧~"/>
                </label>
            </NotesSection>
            <NumberPadSection>
                <div>
                    100
                </div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export default Money;