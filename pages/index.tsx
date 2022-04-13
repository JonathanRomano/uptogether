import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import * as instagramLogo from '/public/instaLogo.png'
import * as whatsappLogo from '/public/whatsappLogo.png'
import * as linkedinLogo from '/public/linkedinLogo.png'

export default function Home() {
return (
	<div className={styles.container}>
		<Head>
			<title>Up Together</title>
			<meta name="description" content="assessoria digital especializada" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.container}>
	
			<div className={styles.main}>
				<div>
					<div className={styles.titleBox}>
						<h1 className={styles.title}>
							Up together
						</h1>
					</div>

					<div className={styles.socialMediaBox}>
						<Link href="">
							<a className={styles.icon}>
								<Image src={whatsappLogo}/>
							</a>
						</Link>

						<Link href="">
							<a className={styles.icon}>
								<Image src={instagramLogo}/>
							</a>
						</Link>

						<Link href="">
							<a className={styles.icon}>
								<Image src={linkedinLogo}/>
							</a>
						</Link>
					</div>
					<h3>Juntos vamos levar a sua empresa para o proximo nivel!</h3>
				</div>
				
				<div className={styles.menu}>
						<Link href="">
							<a className={styles.menuItem}>
								Blog
							</a>
						</Link>
						<Link href="#about">
							<a className={styles.menuItem}>
								Sobre nós
							</a>
						</Link>
						<Link href="">
							<a className={styles.menuItem}>
								Fale conosco
							</a>
						</Link>
				</div>
			</div>

			<div className={styles.main2} id="about">
				
				<div className={styles.titleBox2}>
					<h1 className={styles.title2}>
						Sobre nós
					</h1>
				</div>

				<div className={styles.textBox}>
					<div>
						A <strong>Up Together</strong> nasceu da necessidade de empresas de pequeno e médio porte  em entrar no mundo digital, <strong>a internet é o lugar mais movimentado do mundo</strong> e é pensando nisso que vamos ser a porta de entrada para que você possa <strong>se destacar em meio a concorrência</strong>. Acreditamos que a época em que apenas estar na internet era o suficiente ficou no passado, vamos levar a sua marca ao próximo nível, com excelência e qualidade.
					</div>
					<p>
						"Não é apenas sobre estar na internet, e sim sobre <strong>destacar o seu negócio</strong> em um mundo novo e cheio de oportunidades."					
					</p>
				</div>

				<div className={styles.textBox2}>
					
				<div>
						<h2>
							Missão: 
						</h2>
					Alavancar o seu negócio no mundo digital, oferecendo soluções práticas e <strong>estratégias assertivas</strong>. Nosso foco é voltado para o seu resultado.				
				</div>
					<div>
						<h2>
							Visão: 
						</h2>
						Nosso objetivo é que qualquer pessoa ou empresa tenha sua <strong>vida digital descomplicada</strong> e com uma <strong>assessoria</strong> de qualidade e confiança.
					</div>
					<div>
						<h2>
							Valores:
						</h2>
						Comunicação; Urgência; Paixão; Resultados; Inovação; Pró-atividade; Criatividade; Trabalho em equipe e Determinação.
					</div>
				</div>

			</div>

		</main>

		<footer className={styles.footer}>
			<a
			href=""
			target="_blank"
			rel="noopener noreferrer"
			>
				Powered by Up Together
			</a>
		</footer>
	</div>
	)
}
