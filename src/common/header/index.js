import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	Searchinfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
}from './style'
import { actionCreator } from './store'


class Header extends Component {
	render(){
		// 解构赋值
		const { SearchFocus, SearchBlur, list } = this.props;

		return (
		<HeaderWrapper> 
			<Logo>
				<path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"></path>
			</Logo>
			<Nav>
				<NavItem className='left active'> 首页 </NavItem>
				<NavItem className='left'> 下载App </NavItem>
				<NavItem className='right'> 登录 </NavItem>
				<NavItem className='right'> Aa </NavItem>
				<NavSearch onFocus={ () => SearchFocus(list) } onBlur={ SearchBlur }>	
				</NavSearch>
					{ this.getListArea() }
				<Addition>
					<Button className='writting'> 写文章 </Button>
					<Button className='reg'> 注册 </Button>
				</Addition>
			</Nav>
			</HeaderWrapper>
		)
	}

	getListArea = () => {
		// 解构赋值
		const { list, showSearchArea, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		// 因为 list 中的数据是 immutable对象，所以我们使用toJS方法将其转换为js对象，这样才能使用下标来取值
		const jsList = list.toJS(); 
		const pageList = []

		if (jsList.length){
			for (var i = (page-1)*10; i < page*10; i++) {
				pageList.push(
					<SearchInfoItem key={ jsList[i] }> { jsList[i] } </SearchInfoItem>
				)
			}
		}

		if (showSearchArea || mouseIn){
			return (
				<Searchinfo 
				onMouseEnter={ handleMouseEnter }
				onMouseLeave={ handleMouseLeave }
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={ ()=> handleChangePage(page, totalPage) }>
							换一换
						</SearchInfoSwitch>
					</SearchInfoTitle>
					
					<SearchInfoList>
						{ pageList }
					</SearchInfoList>
				</Searchinfo>
			)
		}else{
			return null;
		}
	}
}


const mapStateToProps = (state) => {
	return {
		showSearchArea: state.get('header').get('showSearchArea'),
		list : state.get('header').get('list'),
		page:  state.get('header').get('page'),
		mouseIn: state.get('header').get('mouseIn'),
		totalPage: state.get('header').get('totalPage'),
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		// 获得焦点，派发dispatch函数
		SearchFocus(list){
			// 没有数据的时候异步获取数据
			if (list.size === 0){
				dispatch(actionCreator.getList())
			}
			
			dispatch(actionCreator.searchFocus())
		},
		
		// 失去焦点，派发dispatch函数
		SearchBlur(){
			dispatch(actionCreator.searchBlur())
		},

		// 鼠标在上面
		handleMouseEnter(){
			dispatch(actionCreator.mouseEnter())
		},

		// 鼠标被移除
		handleMouseLeave(){
			dispatch(actionCreator.mouseLeave())
		},

		// 点击换一换更换页码
		handleChangePage(page, totalPage){
			if (page < totalPage){
				dispatch(actionCreator.changePage(page + 1))
			}else{
				dispatch(actionCreator.changePage(1))
			}
			
		}
	}
}


export default connect(mapStateToProps, mapDispathToProps)(Header);



