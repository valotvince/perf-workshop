import { State, useSelector } from "@/utils/state";
import { simulateHeavyComputation } from "@/utils/computation";
import { useEffect, useState } from "react";

type CardProps = {
    id: string;
    title: string;
    description: string;
}

const selectImageUrl = (id: string) => (state: State) => {
    // DO NOT EDIT
    simulateHeavyComputation();

    return `https://picsum.photos/seed/${id}/${state.imageOptions.width}/${state.imageOptions.height}`;
}

export const Card = ({id, title, description} : CardProps) => {
    const imageUrl = useSelector(selectImageUrl(id));

    const [usersViewing, setUsersViewing] = useState(Math.round(Math.random() * 100))

    useEffect(() => {
        const intervalId = setInterval(() => setUsersViewing(Math.round(Math.random() * 100)), 1000);

        return () => clearInterval(intervalId);
    }, [])

    return <div className="relative rounded-lg h-36 w-64">
        <img src={imageUrl} className="absolute h-full w-auto rounded-lg" />
        <div className="absolute w-full h-full bg-black bg-opacity-30" />
        <div className="absolute w-full h-full px-4 py-2 flex flex-col">
            <h3 className="text-lg">{title}</h3>
            <p className="text-md">{description}</p>
            <p className="text-sm">{usersViewing} users are looking to the offer !</p>
        </div>
    </div>
}
