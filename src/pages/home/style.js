import styled from 'styled-components';

export const HomeWrapper = styled.div`
	background: #F6F6F6;
`;

export const Topstory = styled.div`
	display: block;
    font-size: 15px;
    color: #1A1A1A;
    -webkit-tap-highlight-color: rgba(26, 26, 26, 0)
`

export const TopstoryContainer = styled.div`
	overflow: hidden
	border: 1px solid red;
	display: flex;
    align-items: flex-start;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto
`;

export const TopstoryMainColumn = styled.div`
	flex-shrink: 0;
    margin-right: 10px;
    margin-bottom: 0;
    width: 694px
`;

export const TopstoryTabCard = styled.div`
	margin-bottom: 0;
    box-shadow: none;
    border-bottom: 1px solid #F0F2F7;
    width: 100%;
    background: #FFFFFF;
    overflow: hidden;
    border-radius: 2px;
    box-sizing: border-box;
`;

export const TabCardUl = styled.ul`
	display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    padding: 0;
    margin: 0;
    border-bottom: none;
`;

export const TabCardLi = styled.div`
	display: inline-block;
    padding: 0 20px;
    list-style-type: none;
    text-align: -webkit-match-parent;
`;


export const DivLabel = styled.div`
	&.card{
		margin-bottom: 10px;
	    background: #FFFFFF;
	    overflow: hidden;
	    border-radius: 2px;
	    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
	    box-sizing: border-box;
	};

	&.globalwrite-nav{
		display: flex;
    	justify-content: center;
	};

	&.globalwrite-navtitle{
		color: #444444;
    	font-size: 16px;
    	cursor: pointer;
	};

	&.globalwrite-draft{
		align-items: center;
	    border-top: 1px solid #F0F2F7;
	    color: #8590A6;
	    display: flex;
	    height: 48px;
	    margin: 0 20px;
	    font-size: 14px;
	};

	$.globalsidebar-navtext{
		flex: 1;
    	margin: 0 10px;
    	text-align: left;
	};

	&.globalsidebar-navnumber{
		padding: 6px 10px;
	    border-radius: 2px;
	    background: #F6F6F6;
	    color: #8590A6;
	    font-size: 12px;
	};
`;


export const ALabel = styled.a`
	&.globalwrite-navitem{
		align-items: center;
	    cursor: pointer;
	    display: flex;
	    flex-direction: column;
	    margin: 23px;
	}

	&.globalwidebar-navlink{
		display: flex;
	    align-items: center;
	    padding: 0 20px;
	    height: 40px;
	    overflow: hidden;
	}
`;

export const SvgLabel = styled.svg`
	&.globalwrite-navicon{
    	margin-bottom: 6px;
    	width: 24px;
    	height: 24px;
	}

	&.zi-draft{
		fill: currentcolor;
    	width: 18px;
    	height: 18px;
	}

`;	





