import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { useForm } from '../../context/FormContext';

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return(
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <Sidebar 
                            title="Passo 1/3"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <Sidebar 
                            title="Passo 2/3"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <Sidebar 
                            title="Passo 3/3"
                            path="/step2"
                            active={state.currentStep === 3}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}