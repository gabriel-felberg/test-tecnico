import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { GiCancel } from "react-icons/gi";
import { UserContext } from "../../../context/userProvider.tsx";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    cellphone: string;
    coordinateX: string;
    coordinateY: string;
}

export default function ContentModal({ isOpen, onClose }: ModalProps) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
    const { fetchUsers } = useContext(UserContext);

    const onSubmit = (data: FormData) => {
        const objectUser = {
            name: data.name,
            email: data.email,
            cellphone: data.cellphone,
            coordinate: `(${data.coordinateX},${data.coordinateY})`
        }
        axios.post("http://localhost:3001/", objectUser).then(() => {
            fetchUsers()
            onClose()
        });
        
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        // Remove todos os caracteres que não são dígitos
        value = value.replace(/\D/g, "");

        // Formatação para (ddd) 99631-0387
        if (value.length === 11) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        } else if (value.length === 10) {
            value = value.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        }

        // Atualiza o valor do campo
        setValue("cellphone", value);
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white w-auto p-4 rounded-md shadow-lg relative">
                <div className="flex mb-4 fle-row justify-between items-center text-center">
                    <h2 className="text-lg font-semibold">Formulário</h2>
                    <button className="text-gray-500" onClick={onClose}>
                        <GiCancel />
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="name" className="block mb-1">Nome:</label>
                        <input type="text" id="name" {...register("name", { required: true })} className="border border-gray-300 rounded-md p-2 w-64" />
                        {errors.name && <span className="text-red-500">Campo obrigatório</span>}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="email" className="block mb-1">Email:</label>
                        <input type="email" id="email" {...register("email", { required: true })} className="border border-gray-300 rounded-md p-2 w-64" />
                        {errors.email && <span className="text-red-500">Campo obrigatório</span>}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="cellphone" className="block mb-1">Telefone:</label>
                        <input type="text" id="cellphone" {...register("cellphone", { required: true })} className="border border-gray-300 rounded-md p-2 w-64" onChange={handlePhoneChange} />
                        {errors.cellphone && <span className="text-red-500">Campo obrigatório</span>}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="coordinateX" className="block mb-1">Coordenada X:</label>
                        <input type="text" id="coordinateX" {...register("coordinateX", { required: true })} className="border border-gray-300 rounded-md p-2 w-64" />
                        {errors.coordinateX && <span className="text-red-500">Campo obrigatório</span>}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="coordinateY" className="block mb-1">Coodenada Y:</label>
                        <input type="text" id="coordinateY" {...register("coordinateY", { required: true })} className="border border-gray-300 rounded-md p-2 w-64" />
                        {errors.coordinateY && <span className="text-red-500">Campo obrigatório</span>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Enviar</button>
                </form>
            </div>
        </div>
    );
};
