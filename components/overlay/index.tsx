import styles from './index.module.css'
type OverlayProps = {}
 
const Overlay:React.FC<OverlayProps> = () => {
    return (
        <section className={styles.Overlay}>
            <div>Overlay</div>
            
        </section>
    );
}
 
 
export default Overlay;