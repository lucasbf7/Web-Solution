// Context, Reducer, Provider e Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    name: string;
    birthDate: number;
    cpf: number;
    gender: number;
    address: string;
    status: number;
}
type Action = { type: FormActions; payload: any; };
type ContextType = { state: State; dispatch: (action: Action) => void; };
type FormProviderProps = { children: ReactNode };


const initialData: State = {
    currentStep: 0,
    name: '',
    birthDate: 0,
    cpf: 0,
    gender: 0,
    address: '',
    status: 0,
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setBirthDate,
    setCpf,
    setGender,
    setAddress,
    setStatus
}

const FormReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setBirthDate:
            return {...state, birthDate: action.payload};
        case FormActions.setCpf:
            return {...state, cpf: action.payload};
        case FormActions.setGender:
            return {...state, gender: action.payload};
        case FormActions.setAddress:
            return {...state, address: action.payload};
        case FormActions.setStatus:
            return {...state, status: action.payload};
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context;
}