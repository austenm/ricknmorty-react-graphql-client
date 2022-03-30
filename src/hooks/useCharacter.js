import { useQuery, gql } from "@apollo/client"

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){
        character(id: $id) {
            name
            id
            image
            episode {
                name
                episode
            }
        }
    }
`

const useCharacter = (id) => {
    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });

    return {
        error,
        loading,
        data,
    };
};

export default useCharacter;
