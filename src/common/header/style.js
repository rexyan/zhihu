import styled from 'styled-components';

export const AppHeader = styled.div`
	position: relative;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0px 10px 3px rgba(246, 246, 246, 1);
    background-clip: content-box;
    display: block;
    height: 50px;
`;

export const HeaderWrapper = styled.div`
    margin: 0 auto;
    width: 1000px;
    display: flex;  
	align-items: center;
`;

export const Svg = styled.svg`
	fill: #0084FF;
	height: 30px;
    width: 64px;

    &.notification{
    	fill: #76839B;
    	width: 22px;
    	height: 22px;
    	margin-left: 130px;
    }

    &.comments{
    	fill: #76839B;
    	width: 22px;
    	height: 22px;
    	margin-left: 40px;
    }
`;

export const UserImg = styled.a.attrs({
	href: '/'
})`
	height: 30px;
	width: 30px;
	top: 0;
	left: 0;
	background: url(${props =>  props.imgSrc});
	background-size: contain;
	margin-left: 40px;
`;

export const Nav = styled.div`
	display: flex;
    justify-content: space-between;
    height: 30px;
    margin-right: 18px;
    margin-left: 27px;
    color: #999999;
`;

export const NavItem = styled.div`
	color: #8590A6;
	padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
    
    &.first-child{
    	color: #444444;
    }
`;

export const NavSearch = styled.input.attrs({
	placeholder: '女大学生因受学校处分自缢'
})`
	display: flex;
	position: relative;
    z-index: 104;
    width: 326px;
    position: relative;
    z-index: 104;
    height: 34px;
    padding: 4px 10px;
    font-size: 14px;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    box-sizing: border-box;
    transition: background 200ms, border 200ms;
    margin-left: 20px;
    background: #EBEBEB;
`;


export const SearchButton = styled.button`
	color: #FFFFFF;
    background-color: #0084FF;
    z-index: 103;
    padding: 0 14px;
    margin-left: 16px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    border: 1px solid;
    border-radius: 3px;
    font-size: 14px;
    height: 35px;
`

export const Addition = styled.div`
	flex: 1;
    justify-content: flex-end;
    display: flex;
    align-items: center;
`

export const Notifications = styled.div`
	flex: 1;
    justify-content: flex-end;
    display: flex;
    align-items: center;
`

export const Button = styled.div`
	display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 32px;
    color: #8590A6;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid;
    border-radius: 3px;
`

export const Searchinfo = styled.div`
	position: absolute;
	left: 35%;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`

export const SearchInfoTitle = styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color: #969696;
`

export const SearchInfoSwitch = styled.span`
	font-size:13px;
	float: right;
	cursor: pointer;
`

export const SearchInfoItem = styled.a`
	font-size:12px;
	padding: 0 5px;
	line-height: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	display: block;
	float: left;
	margin-right: 10px;
	margin-bottom 15px;
`

export const SearchInfoList = styled.div`
	overflow: hidden;
`




