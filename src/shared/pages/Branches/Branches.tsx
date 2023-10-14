import { useStyles } from './styles';
import Header from "../../components/header";

const Branches = () => {
    const {classes} = useStyles();

    return (
        <>
            <Header/>
            <div className={classes.hahahha}>Привет!</div>
        </>
    );
}

export default Branches;