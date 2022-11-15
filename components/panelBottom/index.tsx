import { Character } from "../../types/apiTypes"

interface PanelBottomProps {
  compareLeft: Character | null;
  compareRight: Character | null;
}

const PanelBottom: React.FC<PanelBottomProps> = ({
  compareLeft,
  compareRight,
}): JSX.Element => {
  return (
    <div>CharactersBottom</div>
  )
}

export default PanelBottom