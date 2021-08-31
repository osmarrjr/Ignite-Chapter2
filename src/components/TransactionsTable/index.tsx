import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionsTable() {

    const {transactions} = useContext(TransactionsContext);


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
                    {
                        transactions.map(data => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.title}</td>
                                    <td className={data.type}>
                                        {new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(data.amount)}
                                    </td>
                                    <td>{data.category}</td>
                                    <td>
                                        {new Intl.DateTimeFormat('pt-BR')
                                            .format(new Date(data.createdAt))
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    );
}