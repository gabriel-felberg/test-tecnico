import React, { useContext } from "react";
import { GiCancel } from "react-icons/gi";
import { UserContext } from "../../../context/userProvider.tsx";

interface ModalRouteProps {
    isOpen: boolean;
    onClose: () => void;
    setSearchRoutes: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContentModalRoute({ isOpen, onClose, setSearchRoutes }: ModalRouteProps) {

    const { fetchSequenceUsers } = useContext(UserContext)
    console.log(fetchSequenceUsers);


    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white w-auto p-4 rounded-md shadow-lg relative">
                <div className="flex mb-4 fle-row justify-between items-center text-center">
                    <h2 className="text-lg font-semibold">Roda de visitação</h2>
                    <button className="text-gray-500" onClick={() => {
                        onClose()
                        setSearchRoutes(false)
                    }
                    }>
                        <GiCancel />
                    </button>
                </div>
                <ol className="flex flex-col max-h-96 overflow-y-auto gap-2">

                    {fetchSequenceUsers.length === 0 ? <h1 className="text-lg">Sem rotas no momento</h1> : fetchSequenceUsers.map((element) => {
                        return (
                            <li className="bg-gray-300 border border-black rounded-md p-2">
                                <h2>Nome: <b>{element.name}</b></h2>
                                <h3>Telefone: {element.cellphone}</h3>
                                <h3>Coodenada: ({element.coordinate.x}, {element.coordinate.y})</h3>
                            </li>
                        )
                    })}
                </ol>

            </div>
        </div >
    );
};
