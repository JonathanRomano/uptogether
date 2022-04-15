import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import * as instagramLogo from '/public/instaLogo.png'
import * as whatsappLogo from '/public/whatsappLogo.png'
import * as linkedinLogo from '/public/linkedinLogo.png'
import React from 'react';
import { useState } from 'react'
import ReactLoading from 'react-loading'

export default function Home() {

	const [ buttonState, setButtonState ] = useState(1)

	const registrarMensagem = async (e) => {
		setButtonState(2)

		e.preventDefault()
		
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData)
		
		console.log(JSON.stringify(data))

		const response = await fetch("/api/registrarmensagem",{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		setButtonState(3)
	}

	const Teste = ({state}) => {
		if (state === 1){
			return <button className={styles.button} type='submit'>Enviar</button>

		} else if (state === 2) {
			return <button className={styles.button}><ReactLoading className={styles.loading} type='bubbles' color='black'/></button>
		} else if (state === 3) {
			return <button className={styles.button} disabled>Enviar</button>
		}
	}

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
							<Link href="/">
								<a className={styles.icon}>
									<Image src={whatsappLogo}/>
								</a>
							</Link>

							<Link href="/">
								<a className={styles.icon}>
									<Image src={instagramLogo}/>
								</a>
							</Link>

							<Link href="/">
								<a className={styles.icon}>
									<Image src={linkedinLogo}/>
								</a>
							</Link>
						</div>
						<h3>Juntos vamos levar a sua empresa para o proximo nivel!</h3>
					</div>
					
					<div className={styles.menu}>
							<Link href="/">
								<a className={styles.menuItem}>
									Blog
								</a>
							</Link>
							<Link href="/?#about">
								<a className={styles.menuItem}>
									Sobre nós
								</a>
							</Link>
							<Link href="?#contact">
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
						&ldquo;Não é apenas sobre estar na internet, e sim sobre <strong>destacar o seu negócio</strong> em um mundo novo e cheio de oportunidades.&rdquo;			
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

				<div className={styles.main3} id="contact">
					<h1 className={styles.title3}>
						Nos envie uma mensagem!
					</h1>

					<div className={styles.box}>


							<form className={styles.formulario} onSubmit={registrarMensagem} >
								<div className={styles.formBox}>
									<div>
										<p>Seu nome</p>
										<input className={styles.input} type="text" name="name"/> <br/>
									
										<p>Email profisional</p>
										<input className={styles.input} type="email" name="email"/>
									</div>
									<p>Sua mensagem</p>
									<textarea className={styles.input2} name="mensage"/>

								</div>
								<Teste state={buttonState}/>
							</form>

							<p className={styles.p1}>
								Ficou com alguma dúvida, tem alguma sugestão ou quer um orçamento?<br/>
								Envie sua mensagem que vamos responder dentro de 24 horas.
							</p>
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
