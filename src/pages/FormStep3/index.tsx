import { useNavigate, Link } from 'react-router-dom';
import * as C from "./styles";
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    // Ação de mudança de página
    const handleNextStep = () => {
        console.log(state);
    }

    const setStatus = (status: number) => {
        dispatch({
            type: FormActions.setStatus,
            payload: status
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>{state.name}, agora indique o seu status</h1>

                <hr/>
                <SelectOption 
                    title="Ativo"
                    selected={state.status === 0}
                    onClick={()=>setStatus(0)}
                />
                <SelectOption 
                    title="Inativo"
                    selected={state.status === 1}
                    onClick={()=>setStatus(1)}
                />

                <Link to="/step2" className='backbtn'>Voltar</Link>
                <button onClick={handleNextStep}>Cadastrar</button>
            </C.Container>
        </Theme>
    )
}