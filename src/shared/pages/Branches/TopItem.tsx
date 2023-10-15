import { useStyles } from './styles';


const TopItem = () => {
    const {classes} = useStyles();
    return (
        <div className={classes.branches__blockForTopItem}>
            <h3>Andromeda1</h3>
        </div>
    );
}

export default TopItem;