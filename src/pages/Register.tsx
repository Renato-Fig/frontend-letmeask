import '../styles/register.scss'

export function Register() {
    document.title = 'Cadastro'

    return (
        <div id="page-register">
            <aside>
                <div>
                    <h1>Faça seu cadastro</h1>
                    <p>Você precisa ter uma conta para entrar.</p>
                </div>
            </aside>
            <main>
                <div>
                    <h2>Cadastre-se</h2>
                    <form action=''>
                        <label htmlFor="user_name">Nome <span>*</span></label>
                        <input type="text" name='username' placeholder='Nome do Usuário'/>

                        <label htmlFor="user_email" >Email <span>*</span></label>
                        <input type="email" name='user_email'placeholder='usuario@email.com' />

                        <label htmlFor="user_password">Senha <span>*</span></label>
                        <input type="password" name='user_password' placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'/>
                        
                        <label htmlFor="user_birth_date">Data de nascimento <span>*</span></label>
                        <input type="date" name='user_birth_date'/>
                        
                        <button>Entrar</button>
                    </form>
                    <p><a href="/">Já possui uma conta?</a></p>
                </div>
            </main>
        </div>
    )
}