import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
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