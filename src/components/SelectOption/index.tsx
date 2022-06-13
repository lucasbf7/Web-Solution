import * as C from './styles';

type Props = {
    title: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Info>
                <C.Title>{title}</C.Title>
            </C.Info>
        </C.Container>
    );
}