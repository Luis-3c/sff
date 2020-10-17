import React from 'react';
import styles from './Home.module.css';

const Index = () => {
	return (
		<div className={styles.homeCont}>
			<section className={styles.banner}>
				<h2>AQUÍ VA EL SLOGAN</h2>
				<button className={styles.btnSubscribe}>SUBSCRIBE</button>
			</section>
			<section className={styles.aboutme} id="aboutme">
				<h2>ABOUT ME</h2>
				<p>Aqui va el texto</p>
			</section>
			<section className={styles.premium} id="premium">
				<h2>UPGRADE TO A PREMIUM ACCOUNT</h2>
				<div className={styles.premiumCard}>
					<h4>Subscribe for only (precio)</h4>
					<p>Aquí va una breve descripciónde los beneficios de tener cuenta premium</p>
					<button>
						<b>GET STARTED</b>
					</button>
				</div>
			</section>
			<section className={styles.contact} id="contact">
				<h1>LONDON CRAWFORD</h1>
				<h3>Professional athlete</h3>
				<hr />
				<div className={styles.mediaIcons}>
					<i className="fa fa-instagram  fa-5x" />
					<i className="fa fa-twitter fa-5x" />
					<i className="fa fa-facebook fa-5x" />
					<i className="fa fa-youtube fa-5x" />
				</div>
			</section>
		</div>
	);
};

export default Index;
