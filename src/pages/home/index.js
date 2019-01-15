import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style'

import { 
	HomeWrapper,
	Topstory,
	TopstoryContainer,
	TopstoryMainColumn,
	TopstoryTabCard,
	TabCardUl,
	TabCardLi,
	ALabel,
	DivLabel,
	SvgLabel,
	ContentItemtitle
} from './style';


class Home extends Component {

	render(){
		return (
			<HomeWrapper>
				<Topstory>
					<TopstoryContainer>
						<TopstoryMainColumn>
							<TopstoryTabCard>
								<TabCardUl>
									<TabCardLi> 推荐 </TabCardLi>
									<TabCardLi> 关注 </TabCardLi>
									<TabCardLi> 热榜 </TabCardLi>
								</TabCardUl>
							</TopstoryTabCard>
						
							<DivLabel className="bopstory-content">
								<DivLabel>
									<DivLabel className="topstoryitem">
										<ContentItemtitle> 如何看待「女子纱布入腹死亡」被定性为一级甲等医疗事故？谁应该承担主要责任？ </ContentItemtitle>
									</DivLabel>

									<DivLabel className="RichContent">
										
									</DivLabel>

								</DivLabel>
							</DivLabel>

						</TopstoryMainColumn>

						

					<DivLabel className="card">
						<DivLabel className="globalwrite-nav">
							<ALabel className="globalwrite-navitem">
								<SvgLabel className="globalwrite-navicon" viewBox="0 0 24 24">
									<path d="M9.273 5.63c-1.103 0-1.439.064-1.782.243a1.348 1.348 0 0 0-.576.564c-.183.336-.248.664-.248 1.743v6.64c0 1.079.065 1.407.248 1.743.135.247.323.431.576.564.343.18.68.243 1.782.243h5.454c1.103 0 1.439-.064 1.782-.243.253-.133.44-.317.576-.564.183-.336.248-.664.248-1.743V8.18c0-1.079-.065-1.407-.248-1.743a1.348 1.348 0 0 0-.576-.564c-.343-.18-.68-.243-1.782-.243H9.273zm0-1.63h5.454c1.486 0 2.025.151 2.568.436.543.284.97.7 1.26 1.232.29.532.445 1.059.445 2.512v6.64c0 1.453-.155 1.98-.445 2.512-.29.531-.717.948-1.26 1.232-.543.285-1.082.436-2.568.436H9.273c-1.486 0-2.025-.151-2.568-.436a2.997 2.997 0 0 1-1.26-1.232C5.155 16.8 5 16.273 5 14.82V8.18c0-1.453.155-1.98.445-2.512.29-.531.717-.948 1.26-1.232C7.248 4.15 7.787 4 9.273 4zM8.5 8.076v1.467h7V8.076h-7zm0 2.609v1.467h7v-1.467h-7zm0 2.608v1.468h4.667v-1.468H8.5z"></path>
								</SvgLabel>
								<DivLabel className="globalwrite-navtitle"> 写回答 </DivLabel>
							</ALabel>

							<ALabel className="globalwrite-navitem">
								<SvgLabel className="globalwrite-navicon" viewBox="0 0 24 24">
									<path d="M15.764 7.279l-3.76 3.765c-.428.43-.555.567-.667.713a1.666 1.666 0 0 0-.208.348c-.076.167-.137.344-.314.926l-.073.243.242-.074c.58-.177.757-.238.925-.314.13-.06.232-.12.347-.209.146-.112.282-.239.712-.668l3.759-3.766-.963-.964zm.963-.965l.963.965.685-.686c.167-.168.227-.263.253-.349a.187.187 0 0 0 0-.12c-.026-.086-.086-.18-.253-.348l-.148-.148c-.167-.167-.262-.228-.348-.254a.187.187 0 0 0-.12 0c-.085.026-.18.087-.347.254l-.685.686zm.87 5.471l1.702-1.705v5.549c0 1.52-.158 2.07-.455 2.626a3.096 3.096 0 0 1-1.287 1.29c-.555.297-1.105.455-2.623.455h-5.57c-1.517 0-2.068-.158-2.622-.455a3.096 3.096 0 0 1-1.287-1.29C5.158 17.7 5 17.15 5 15.63v-5.58c0-1.52.158-2.071.455-2.627a3.096 3.096 0 0 1 1.287-1.289c.554-.297 1.105-.455 2.622-.455h3.497l-1.702 1.705H9.364c-1.126 0-1.47.066-1.82.254-.258.138-.45.33-.588.59-.188.35-.254.694-.254 1.822v5.58c0 1.128.066 1.472.254 1.822.138.259.33.452.588.59.35.188.694.254 1.82.254h5.57c1.127 0 1.47-.066 1.82-.254.258-.138.45-.331.589-.59.187-.35.253-.694.253-1.822v-3.844zm1.593-7.121l.148.147c.33.33.502.616.594.918.09.301.09.61 0 .911-.092.302-.265.587-.594.917l-5.408 5.416c-.486.487-.648.635-.845.786a3.02 3.02 0 0 1-.614.37c-.226.102-.433.176-1.091.376l-.852.26a1.021 1.021 0 0 1-1.275-1.277l.26-.854c.2-.659.273-.866.375-1.092.103-.227.218-.418.369-.616.15-.197.299-.36.785-.846l5.407-5.416c.33-.33.614-.504.915-.595.301-.092.61-.092.91 0 .301.09.586.264.916.595z"></path>
								</SvgLabel>
								<DivLabel className="globalwrite-navtitle"> 写文章 </DivLabel>
							</ALabel>

							<ALabel className="globalwrite-navitem">
								<SvgLabel className="globalwrite-navicon" viewBox="0 0 24 24">
									<path d="M16.63 6.02V4h1.35v2.02H20v1.35h-2.02V9.4h-1.35V7.36H14.6V6.02h2.03zm-.17 4.9h1.7v4.76c0 1.5-.17 2.05-.46 2.6-.3.55-.73.98-1.28 1.27-.54.3-1.1.45-2.6.45h-5.5c-1.5 0-2.05-.16-2.6-.45-.55-.3-.98-.72-1.27-1.27-.3-.55-.45-1.1-.45-2.6v-5.5c0-1.5.16-2.06.45-2.6.3-.55.72-.98 1.27-1.28.55-.3 1.1-.45 2.6-.45h4.78v1.7H8.3c-1.12 0-1.46.05-1.8.24-.26.1-.45.3-.58.55-.2.35-.26.7-.26 1.8v5.5c0 1.13.07 1.47.26 1.8.13.27.32.46.58.6.34.18.68.25 1.8.25h5.5c1.12 0 1.46-.06 1.8-.25.27-.13.46-.32.6-.58.18-.34.24-.68.24-1.8V10.9l.02.02zm-3.86-.22c.7-.16 1.45.06 1.98.6.83.83.83 2.2 0 3.04l-.03.03c-.84.85-2.2.85-3.04 0l-1.92-2a.628.628 0 0 0-.88 0l-.04.04c-.25.28-.25.7 0 .95.15.16.37.22.57.17.4-.1.82.18.9.58.1.4-.16.82-.57.9-.7.17-1.46-.04-1.98-.58-.83-.85-.83-2.2 0-3.06l.03-.02c.86-.85 2.2-.85 3.05 0l1.93 1.95c.24.25.63.25.87 0l.03-.02a.67.67 0 0 0 0-.93.687.687 0 0 0-.58-.17c-.4.1-.8-.16-.9-.57-.1-.4.16-.8.57-.9l.01-.01z"></path>
								</SvgLabel>
								<DivLabel className="globalwrite-navtitle"> 写想法 </DivLabel>
							</ALabel>
						</DivLabel>

						<DivLabel className="globalwrite-draft">
							<ALabel className="globalwidebar-navlink">
								<SvgLabel className="zi-draft" viewBox="0 0 24 24">
									<path d="M7.958 13.23c.588 1.704 2.176 2.924 4.042 2.924 1.866 0 3.454-1.22 4.042-2.923h4.53c.788 0 1.428.64 1.428 1.428v5.912c0 .79-.64 1.429-1.429 1.429H3.43C2.639 22 2 21.36 2 20.571V14.66c0-.789.64-1.428 1.429-1.428h4.53zm11.185-2h-4.526l-.466 1.348c-.325.943-1.186 1.576-2.151 1.576-.965 0-1.826-.633-2.151-1.576l-.466-1.347H4.857V4.46C4.857 3.655 5.511 3 6.32 3h11.395c.79 0 1.429.64 1.429 1.429v6.802z"></path>
								</SvgLabel>
								<DivLabel className="globalsidebar-navtext"> 我的草稿 </DivLabel>
								<DivLabel className="globalsidebar-navnumber"> 1 </DivLabel>
							</ALabel>
						</DivLabel>

					</DivLabel>

					</TopstoryContainer>
				</Topstory>
			</HomeWrapper>
		)
	}

}



export default connect(null, null)(Home);