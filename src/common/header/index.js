import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  handleInputFocus () {
    this.setState({
      focused: true
    })
  }
  handleInputBlur () {
    this.setState({
      focused: false
    })
  }
  render() {
    return (
      <HeaderWrapper>
        <BrowserRouter>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
                <NavSearch className={this.state.focused ? 'focused' : ''} onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}></NavSearch>
              </CSSTransition>
              <i className={this.state.focused ? 'focused iconfont zoom': 'iconfont zoom'}>
                &#xe614;
              </i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting">.
                <i className="iconfont">&#xe615;</i>
                写文章
              </Button>
              <Button className='reg'>注册</Button>
            </Link>
          </Addition>
        </BrowserRouter>
        
      </HeaderWrapper>
    )
  }
}
export default Header