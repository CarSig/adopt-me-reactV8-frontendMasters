import { useQuery } from "@tanstack/react-query";
// import fetchBreedList from "./fetchBreedList";
import fetchFactory from "./fetchFactory";




export default function useBreedList(animal) {
    // const results = useQuery(["breeds", animal], fetchBreedList);
    const link = `/breeds?animal=${animal}`
    const results = useQuery(["breeds", link], fetchFactory);

    return [results?.data?.breeds ?? [], results.status];
}


