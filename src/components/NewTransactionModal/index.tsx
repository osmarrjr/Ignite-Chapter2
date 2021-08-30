import Modal from 'react-modal';
import closeimg from '../../assets/close.svg'
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';


import { Container, TransactionTypeContainer } from './style';

interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
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
            
            <Container>
                <h2>Cadastrar Transação</h2>

                <input 
                    type="text"
                    placeholder="Titulo" 
                />

                <input 
                    type="number"
                    placeholder="Valor" 
                />

                <TransactionTypeContainer>
                    <button
                        type="submit"
                    >
                        <img src={income} alt="Entrada"/>
                        <span>Entrada</span>
                    </button>

                    <button type="submit">
                        <img src={outcome} alt="Saida" />
                        <span>Saida</span>
                    </button>
                </TransactionTypeContainer>

                <input 
                    type="text"
                    placeholder="Categoria" 
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}