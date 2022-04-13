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
					Nós somos uma iniciativa nova que consiste em um grupo de profissionais qualificados que já se provaram no mercado. Vendo a dificuldade de empresas de pequeno e médio porte de entrar no mundo digital, decidimos unir forças para oferecer um serviço que traga resultados satisfatórios e que tenham um preço justo e acessível.
					<p>
						"Acreditamos que não é sobre estar na internet, mas sim sobre destacar o seu negócio no mundo digital!"
					</p>
				</div>

				<div className={styles.textBox2}>
					
				<div>
						<h2>
							Missão: 
						</h2>
						Incluir a sua empresa no mundo digital, oferecendo soluções de comunicação e gerando conteúdos com estratégias assertivas. Sempre alcançando resultados.					</div>
					<div>
						<h2>
							Visão: 
						</h2>
						Temos como objetivo conquistar o mundo com nossas soluções digitais, desenvolvendo estratégias/projetos que integrem a sua marca ao seu consumidor.
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
