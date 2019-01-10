import React, { Component } from 'react'
import Topic from './components/Topic' 
import List from './components/List' 
import Recommend from './components/Recommend' 
import Writer from './components/Writer' 
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style'

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';


class Home extends Component {

	render(){
		return (
			"index"
		)
	}

}



export default connect(null, null)(Home);