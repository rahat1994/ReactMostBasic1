import React,{Component} from 'react';

class Midsection extends Component{

	render(){

		return(

				<section className="our-work">
					<h3 className="title">Some of our work</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
					<hr></hr>

						<ul className="grid">
							<li className="small lol1"></li>
							<li className="large lol2"></li>
							<li className="large lol3"></li>
							<li className="small lol4"></li>
						</ul>
				</section>
			);

	}
}


export default Midsection;