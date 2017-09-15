import React,{Component} from 'react';

class Header extends Component{



	render(){

		return(
			<header>
				<h2><a href="#">Website Logo</a></h2>
				<nav>
					<li><a href="#">Home</a></li>
					<li><a href="#">Products</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contacts</a></li>
				</nav>
			</header>

			);

	}


}

export default Header;