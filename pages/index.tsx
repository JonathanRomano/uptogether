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
	const [ buttonPopupState, setButtonPopupState ] = useState(false)

	const Popup = (props) => {
		const closePopup = () => {
			setButtonPopupState(false)
		}
		return (props.trigger) ? (
			<div className={styles.popup}>
				<div className={styles.inner}>
					{ props.children }
					
					<button onClick={closePopup} className={styles.closeBtn}>Close</button>
				</div>
			</div>
		) : <></>
	}

	
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

		e.target.reset()

		setButtonState(3)
		setButtonPopupState(true)
	}

	const ButtonForm = ({state}) => {
		if (state === 1){
			return <button className={styles.button} type='submit'>Enviar</button>
		} else if (state === 2) {
			return <button className={styles.button} type='button'><ReactLoading className={styles.loading} type='bubbles' color='black'/></button>
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
							<Link href="https://api.whatsapp.com/send?phone=5541996392002&text=Ol%c3%a1%2c+gostaria+de+saber+mais+sobre+a+Up+Together%2c+podemos+agendar+uma+reuni%c3%a3o%3f">
								<a className={styles.icon}>
									<Image src={whatsappLogo}/>
								</a>
							</Link>

							<Link href="https://www.instagram.com/_uptogether/">
								<a className={styles.icon}>
									<Image src={instagramLogo}/>
								</a>
							</Link>

							<Link href="https://www.linkedin.com/company/up-together-assessoria-digital/">
								<a className={styles.icon}>
									<Image src={linkedinLogo}/>
								</a>
							</Link>
						</div>
						<h3>Juntos vamos levar a sua empresa para o pr??ximo n??vel!</h3>
					</div>
					
					<div className={styles.menu}>
							<Link href="/">
								<a className={styles.menuItem}>
									Blog
								</a>
							</Link>
							<Link href="/?#about">
								<a className={styles.menuItem}>
									Sobre n??s
								</a>
							</Link>
							<Link href="?#contact">
								<a className={styles.menuItem}>
									Fale conosco
								</a>
							</Link>
					</div>

					<div className={styles.socialMediaBoxMobile}>
							<Link href="https://api.whatsapp.com/send?phone=5541996392002&text=Ol%c3%a1%2c+gostaria+de+saber+mais+sobre+a+Up+Together%2c+podemos+agendar+uma+reuni%c3%a3o%3f">
								<a className={styles.icon}>
									<Image src={whatsappLogo}/>
								</a>
							</Link>

							<Link href="https://www.instagram.com/_uptogether/">
								<a className={styles.icon}>
									<Image src={instagramLogo}/>
								</a>
							</Link>

							<Link href="https://www.linkedin.com/company/up-together-assessoria-digital/">
								<a className={styles.icon}>
									<Image src={linkedinLogo}/>
								</a>
							</Link>
						</div>
				</div>

				<div className={styles.main2} id="about">
					
					<div className={styles.titleBox2}>
						<h1 className={styles.title2}>
							Sobre n??s
						</h1>
					</div>

					<div className={styles.textBox}>
						<div>
							A <strong>Up Together</strong> nasceu da necessidade de empresas de pequeno e m??dio porte  em entrar no mundo digital, <strong>a internet ?? o lugar mais movimentado do mundo</strong> e ?? pensando nisso que vamos ser a porta de entrada para que voc?? possa <strong>se destacar em meio a concorr??ncia</strong>. Acreditamos que a ??poca em que apenas estar na internet era o suficiente ficou no passado, vamos levar a sua marca ao pr??ximo n??vel, com excel??ncia e qualidade.
						</div>
						<p>
						&ldquo;N??o ?? apenas sobre estar na internet, e sim sobre <strong>destacar o seu neg??cio</strong> em um mundo novo e cheio de oportunidades.&rdquo;			
						</p>
					</div>

					<div className={styles.textBox2}>
						
					<div>
							<h2>
								Miss??o: 
							</h2>
						Alavancar o seu neg??cio no mundo digital, oferecendo solu????es pr??ticas e <strong>estrat??gias assertivas</strong>. Nosso foco ?? voltado para o seu resultado.				
					</div>
						<div>
							<h2>
								Vis??o: 
							</h2>
							Nosso objetivo ?? que qualquer pessoa ou empresa tenha sua <strong>vida digital descomplicada</strong> e com uma <strong>assessoria</strong> de qualidade e confian??a.
						</div>
						<div>
							<h2>
								Valores:
							</h2>
							Comunica????o; Urg??ncia; Paix??o; Resultados; Inova????o; Pr??-atividade; Criatividade; Trabalho em equipe e Determina????o.
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
										<input className={styles.input} type="text" name="name" required/> <br/>
									
										<p>Email profisional</p>
										<input className={styles.input} type="email" name="email" required/>
									</div>
									<p>Sua mensagem</p>
									<textarea className={styles.input2} name="mensage" required/>

									<ButtonForm state={buttonState}/>
								</div>

							</form>

							<p className={styles.p1}>
								Ficou com alguma d??vida, tem alguma sugest??o ou quer um or??amento?<br/>
								Envie sua mensagem que vamos responder dentro de 24 horas.
							</p>
					</div>

				</div>

			</main>

			<Popup trigger={buttonPopupState}>
				Okay, agora a gente vai entrar em contato quando der na telha, muito brigado valeu e tchau!
			</Popup>

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
