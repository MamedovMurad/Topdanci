import styles from './index.module.css'

type PrimaryButtonProps = {
    text: string;
    color?: string;
    bg?: string;
    size?: string;
    font?: string;
    onClick?: any;
    boxShadow?: string;
    width?: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
                                                         text,
                                                         bg = '#FFC702',
                                                         color = '#2B2A2A',
                                                         size = '9px 21px',
                                                         font = "16px",
                                                         boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                                         onClick,
                                                         width,
                                                         ...rest
                                                     }) => {
    return (
        <button {...rest} className={styles.primary_button}
                style={{background: bg, color, padding: size, fontSize: font, boxShadow, width}} onClick={onClick}>
            {text}
        </button>
    );
}


export default PrimaryButton;