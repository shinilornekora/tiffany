import { useStyles } from './styles';


const TopItem = () => {
    const {classes} = useStyles();
    return (
        <div className={classes.branches__blockForTopItem}>
            <span>Andromeda1</span>
        </div>
    );
}

export default TopItem;