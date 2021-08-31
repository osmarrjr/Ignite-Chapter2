import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { TransactionsContext } from '../../TransactionsContext';

import closeimg from '../../assets/close.svg'
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';


interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeimg} alt="Fechar" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input 
                    type="text"
                    placeholder="Titulo" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))} 
                />

                <TransactionTypeContainer>
                    
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={ type === 'deposit' }
                        activeColor="green"
                    >
                        <img src={income} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={ type === 'withdraw' }
                        activeColor="red"
                    >
                        <img src={outcome} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input 
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    );
}