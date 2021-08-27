import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data));
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento sites</td>
                        <td className="deposit">R$ 1.500,00</td>
                        <td>Dev</td>
                        <td>21/0/2012</td>
                    </tr>
                    <tr>
                        <td>Aluguel de software</td>
                        <td className="withdraw">R$ 1.000,00</td>
                        <td>Venda</td>
                        <td>21/0/2012</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}