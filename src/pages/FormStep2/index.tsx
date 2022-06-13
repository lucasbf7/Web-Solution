import { useNavigate, Link } from 'react-router-dom';
import * as C from "./styles";
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    // Ação de mudança de página
    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert("Preencha os dados");
        }
        
    }

    const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCpf,
            payload: e.target.value
        });
    }

    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setAddress,
            payload: e.target.value
        });
    }

    const setGender = (gender: number) => {
        dispatch({
            type: FormActions.setGender,
            payload: gender
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, agora selecione as opções nos campos abaixo</h1>
                <p>Preencha os demais campos.</p>

                <hr/>
                <label>
                    CPF
                    <input 
                        type="number"
                        value={state.cpf}
                        onChange={handleCpfChange}
                    />
                </label>

                <SelectOption 
                    title="Masculino"
                    selected={state.gender === 0}
                    onClick={()=>setGender(0)}
                />
                <SelectOption 
                    title="Feminino"
                    selected={state.gender === 1}
                    onClick={()=>setGender(1)}
                />
                <SelectOption 
                    title="Não-binário"
                    selected={state.gender === 2}
                    onClick={()=>setGender(2)}
                />
                <SelectOption 
                    title="Outro"
                    selected={state.gender === 3}
                    onClick={()=>setGender(3)}
                />
                <label>
                    Endereço
                    <input 
                        type="text"
                        value={state.address}
                        onChange={handleAddressChange}
                    />
                </label>

                <Link to="/" className='backbtn'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}