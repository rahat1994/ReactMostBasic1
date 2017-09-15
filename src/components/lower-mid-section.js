import React,{Component} from 'react';

class Lowermidsection extends Component{


	render(){


		return(
			<section className="features">
				<h3 className="title">Features and services</h3>
				<p>Lorem ipsum dolor sit amet, lit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
				<hr></hr>

				<ul className="grid">
					<li>
						<i className="fa fa-camera-retro"></i>
						<h4>Photography</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
					</li>
					<li>
						<i className="fa fa-cubes"></i>
						<h4>Web Development</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
					</li>
					<li>
						<i className="fa fa-newspaper-o"></i>
						<h4>Content Editing</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
					</li>
				</ul>
			</section>
		);



	}



}

export default Lowermidsection;