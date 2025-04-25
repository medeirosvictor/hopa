import outfits from "../../../public/dummy_data/outfits.json";
import apparels from "../../../public/dummy_data/apparels.json";
import OutfitGrid from "../OutfitGrid";

function Outfits() {
    return (
        <div>
            <h2>Outfits</h2>
            <div>Folder de outfits</div>
            <div>Lista de Todos os Outfits</div>
            <OutfitGrid outfits={outfits} />
        </div>
    );
}

export default Outfits;
