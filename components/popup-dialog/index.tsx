import React, {FC} from 'react';
import Modal from 'react-modal';
import styles from './index.module.css';
import {MyComponent} from "../../hooks/useResponsivenenessAdjuster";

const customStyles = (responsive : number) => {
    return {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minHeight : 'min-content',
            width: responsive < 900 ? '80%' : '50%'
        }
    }
};

interface PopupDialog {
    isOpen: boolean;
    title?: string;
    component: JSX.Element;
    closeModal?: () => void
}

const Index: FC<PopupDialog> = (props) => {
    const {
        isOpen, title, closeModal
    } = props;
    const responsive = MyComponent();
    return (
        <div>
            <Modal
                isOpen={isOpen}
                style={customStyles(responsive)}
                contentLabel={title}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                <div className={styles.closeButton}>
                    <button  onClick={closeModal}>&times;</button>
                </div>
                <div>I am a modal</div>
            </Modal>
        </div>
    );
};

export default Index;