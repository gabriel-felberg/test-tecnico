import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode; // Definindo children como uma propriedade opcional do tipo React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null; // Se o modal não estiver aberto, não renderize nada
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-lg">
                {children} {/* Renderizando o conteúdo do modal */}
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                    Fechar Modal
                </button>
            </div>
        </div>
    );
};

export default Modal;
