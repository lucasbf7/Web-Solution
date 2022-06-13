import { useNavigate } from 'react-router-dom';
import * as C from "./styles";
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    // Ação de mudança de página
    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2');
        } else {
            alert("Preencha os dados");
        }
        
    }

    // Atualização do nome do paciente que o usuário escreveu no input
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const handleBDChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setBirthDate,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Primeiro a identificação do Paciente</h1>
                <p>Preencha os campos abaixo com o nome e data de nascimento.</p>

                <hr/>

                <label>
                    Nome do Paciente
                    <input 
                        type="text"
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Data de Nascimento
                    <input 
                        type="date"
                        value={state.birthDate}
                        onChange={handleBDChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}