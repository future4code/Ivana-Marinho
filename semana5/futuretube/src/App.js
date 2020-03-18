import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
			  <h2>FutureTube</h2>
		    <div id="busca">
			    <input type="search" placeholder="Busca"/>
		    </div>
		  </header>
		  <main>
			<section className="container1">
				<figure>		
					<a href="video1.html" target="_blank"><video src="http://soter.ninja/videos/1.mp4"></video></a>
					<figcaption>Ireland's Beauty</figcaption>
				</figure>

				<figure>
					<a href="video2.html" target="_blank"><video src="http://soter.ninja/videos/2.mp4"></video></a>
					<figcaption>Cells</figcaption>
				</figure>

				<figure>				
					<a href="detalhamento.html" target="_blank"><video src="http://soter.ninja/videos/3.mp4"></video></a>
					<figcaption>Psychedelic</figcaption>
				</figure>

				<figure>
					<a href="detalhamento.html" target="_blank"><video src="http://soter.ninja/videos/4.mp4"></video></a>
					<figcaption>Sea</figcaption>
				</figure>

			</section>	

			<section className="container2">
				<figure className="item12">
					<a href="detalhamento.html" target="_blank"><video src="http://soter.ninja/videos/5.mp4"></video></a>
					<figcaption>Farm</figcaption>
				</figure>

				<figure>
					<a href="detalhamento.html" target="_blank"><video src="http://soter.ninja/videos/6.mp4"></video></a>
					<figcaption>Rabbit</figcaption>
				</figure>

				<figure>
					<a href="detalhamento.html" target="_blank"><video src="http://soter.ninja/videos/7.mp4"></video></a>
					<figcaption>Galaxy</figcaption>
				</figure>

				<figure>
					<a href="http://soter.ninja/videos/8.mp4" target="_blank"><video src="http://soter.ninja/videos/8.mp4"></video></a>
					<figcaption>Rocket</figcaption>
				</figure>

			</section>

			<section>
				<aside>
					<div className="sidebar">
						<h3 className="menu">Menu</h3><br/>
						<ul>
							<a href="futuretube.html"><li>Home</li></a>
							<a href="?"><li>Em alta</li></a>
							<a href="?"><li>Inscrições</li></a>
							<a href="?"><li>Histórico</li></a>
							<a href="#contato"><li>Contato</li></a>
						</ul>
					</div>
				</aside>
			</section>

		<footer>
			<h3>Obrigada pela visita!</h3>
			<h4><a id="contato">Contato: contato@futuretube.com</a></h4>
		</footer>
    </main>
    </div>
  );
}

export default App;
