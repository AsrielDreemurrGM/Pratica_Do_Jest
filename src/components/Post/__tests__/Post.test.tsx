import { render, screen } from '@testing-library/react';
import Post from '..';

describe('Teste Para o Componente post', () => {
    test('Deve Renderizar o Componente Corretamente', () => {
        render(<Post children='' imageUrl='' />);
        expect(screen.getByTestId('post-container')).toBeInTheDocument();
    })
})