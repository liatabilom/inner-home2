import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
	render() {
		return (
			<div style={{ height: 450 }}>
				<div className="introCard">
					<ul id="textCard">
						<li>Pessoas que..</li>
						<br />
						<li>...leem muito sobre música,</li>
						<li>... se querem manter actualizadas,</li>
						<li>... para ter informação não algoritmizada,</li>
						<li>... procuram descobrir sem fronteiras de género,</li>
						<br />
						<li>saltam de plataforma em plataforma para preencher essa vontade.</li>
						<br />
						<li>
							Sempre no ecossistema da música, esta app tem como foco a Informação. WhoKnews - agregador
							de plataformas - tenta colmatar a necessidade de acesso a notícias de forma rápida,
							acessível e dinâmica independentemente do género e da localização.
						</li>
						<br />
						<li>
							Os dois feeds principais desta app - EXTENSO e EXPRESS - chega a dois readers principais:
						</li>
						<br />
						<li>- O que consome registos mais extensos, completos - ‘slow cooking’.</li>
						<br />
						<li>- O que encontra conteúdos visualmente mais dinâmicos, leves e rápidos - ‘fast food’.</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Intro;
