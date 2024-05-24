import Link from "next/link";
import { BiPencil } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

export function DeleteEtudiant({id}: {id: string}) {
    return (
        <Link
            href={`/dashboard/etudiants/${id}/delete`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <BiPencil className="w-5"/>
        </Link>
    );
}


export function EditEtudiant({id}: {id: string}) {
    return (
      <Link
        href={`/dashboard/etudiants/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <FiTrash className="w-5"/>
      </Link>
    );
}

