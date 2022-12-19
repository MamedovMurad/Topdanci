import styles from './index.module.css'
type PrimaryButtonProps = {
    text:string;
    color?:string;
    bg?:string;
    size?:string;
    font?:string
}
 
const PrimaryButton:React.FC<PrimaryButtonProps> = ({text ,bg='#FFC702', color='#2B2A2A',size='9px 21px',font="16px"}) => {
    return (
        <button className={styles.primary_button} style={{background:bg, color, padding:size,fontSize:font}}>
           {text} 
        </button>
    );
}
 
 
export default PrimaryButton;