import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
    
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data));
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