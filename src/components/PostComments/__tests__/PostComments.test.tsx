import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve testar a inserção de dois comentários', () => {
        render(<PostComment/>);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('btn-add-comment');
        
        fireEvent.change(textarea, {target: {value: 'Pessoa Normal: É o Batman!'}});
        fireEvent.click(button);

        expect(screen.getByText('Pessoa Normal: É o Batman!')).toBeInTheDocument();

        fireEvent.change(textarea, {target: {value: 'Coringa: É o Morcego!'}});
        fireEvent.click(button);

        expect(screen.getByText('Coringa: É o Morcego!')).toBeInTheDocument();
    })
});