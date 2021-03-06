import { useLocation, Link } from "react-router-dom"
import { LastPage } from "./style"

export const Success = () => {
    const location = useLocation();
    const {state} = location
    console.log(state)

    return (
        <LastPage>
            <h1>Pedido feito com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <span>{state.title}</span>
            <span>{state.date} {state.time}</span>

            <h2>Ingressos</h2>
            {state.seats.map(el => <span key={el}>Assento {el}</span>)}

            <h2>Comprador</h2>
            <span>Nome: {state.name}</span>
            <span>CPF: {state.cpf}</span>

            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </LastPage>
    )
}