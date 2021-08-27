import { Container } from "./style";

import incomeImg from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="incomeImage" />
                </header>

                <strong>R$ 1.000,00</strong>
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

                <strong>R$ 1.000,00</strong>
            </div>
        </Container>
    );
}