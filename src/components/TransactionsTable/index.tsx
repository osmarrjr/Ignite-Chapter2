import { Container } from "./styles";

export function TransactionsTable() {
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
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Dev</td>
                        <td>21/0/2012</td>
                    </tr>
                    <tr>
                        <td>Aquisição de curso</td>
                        <td className="withdraw">- R$ 6.000,00</td>
                        <td>Estudo</td>
                        <td>21/0/2012</td>
                    </tr>
                    <tr>
                        <td>Aluguel de software</td>
                        <td className="deposit">R$ 2.000,00</td>
                        <td>Dev</td>
                        <td>21/0/2012</td>
                    </tr>
                    <tr>
                        <td>Conta</td>
                        <td className="withdraw">R$ 700,00</td>
                        <td>Energia</td>
                        <td>21/0/2012</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}