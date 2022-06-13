import { Link } from 'react-router-dom';
import * as C from './styles';

type Props = {
    title: string;
    path: string;
    active: boolean;
}

export const Sidebar = ({ title, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                </C.Info>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}