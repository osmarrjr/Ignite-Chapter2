import { useContext } from 'react';

import incomeImg from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {

    const {transactions} = useContext(TransactionsContext);

    const totalDeposit = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            return acc + transaction.amount;
        }
        return acc;
    }, 0);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="incomeImage" />
                </header>

                <strong>{totalDeposit}</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outCome} alt="incomeImage" />
                </header>

                <strong>R$ 1.000,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg }alt="incomeImage" />
                </header>

                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}