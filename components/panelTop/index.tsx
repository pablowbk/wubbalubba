import Image from "next/image";
import { Character } from "../../types/apiTypes";
import CharacterCard from "../characterCard/CharacterCard";

type ApiResponse = {
  info: {
    count: number,
    pages: number,
    next?: string,
    prev?: string,
  };
  results: Character[];
}

interface PanelTopProps {
  pageData: ApiResponse
}

const PanelTop: React.FC<PanelTopProps> = ({pageData}): JSX.Element => {
  console.log({pageData})
  const { info, results } = pageData;
  
  return (
    <div>
      {results.map(result => (
        <CharacterCard data={result} key={result.id} />
      ))}

    </div>
  )
}

export default PanelTop