import React, { useContext, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { HiPlusSm } from "react-icons/hi";
import { UserContext } from "../../context/userProvider.tsx";
import ContentModalForm from "../contentModal/ContentModalForm/index.tsx";
import Modal from "../modal/index.tsx";
import ContentModalRoute from "../contentModal/ContentModalRoute/index.tsx";

export default function ActionBar() {
    const { fetchUsers, fetchequenceUsersFunction } = useContext(UserContext);
    const [searchInput, setSearchInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchRoutes, setSearchRoutes] = useState(false);

    function callBack(event) {
        event.preventDefault();
        console.log(searchInput);

        if (searchInput.includes("-")) {
            fetchUsers({ cellphone: searchInput });
        } else if (searchInput.includes("@")) {
            fetchUsers({ email: searchInput });
        } else {
            fetchUsers({ name: searchInput });
        }
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <header className="flex justify-end md:m-10 mt-10 mr-5 flex-row flex-wrap gap-2">
            <button
                className="flex text-xl w-10 text-center justify-center items-center rounded-md p-1 border-1 bg-emerald-400 text-black border-black border"
                onClick={() => {
                    fetchUsers()
                    setSearchInput("")
                }}
            >
                <GrPowerReset />
            </button>
            <button
                className="flex text-xl w-10 h-10 text-center justify-center items-center rounded-md p-1 border-1 bg-emerald-400 text-black border-black border"
                onClick={openModal} // Abre o modal quando o botão é clicado
            >
                <HiPlusSm />
            </button>
            <button
                className="flex text-xl w-auto h-10 text-center justify-center items-center rounded-md p-1 border-1 bg-emerald-400 text-black border-black border"
                onClick={() => {
                    setSearchRoutes(true)
                    fetchequenceUsersFunction()
                    openModal()
                }} // Abre o modal quando o botão é clicado
            >
                Visitação
            </button>
            {/* Renderiza o modal apenas se isModalOpen for verdadeiro */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    {searchRoutes ? <ContentModalRoute isOpen={isModalOpen} onClose={closeModal} setSearchRoutes={setSearchRoutes}/> : <ContentModalForm isOpen={isModalOpen} onClose={closeModal} />}
                </Modal>
            )}
            <form className="flex flex-row border-black border bg-white rounded-md" onSubmit={callBack}>
                <input
                    type="text"
                    width="50px"
                    value={searchInput}
                    className="outline-none px-1 rounded-md"
                    onChange={(event) => setSearchInput(event.target.value)}
                />
                <button className="w-full font-semibold rounded-md p-1 border-1 bg-emerald-400 text-black border-black border-l"
                    type="submit"
                >
                    Pesquisar
                </button>
            </form>
        </header>
    );
}
