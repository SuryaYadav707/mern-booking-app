import { hotelTypes } from "../config/hotel-options-config";

type Props = {
    selectedHotelTypes: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  const HotelTypes = ({ selectedHotelTypes, onChange }: Props) => {
    return (
      <div className="border-b border-slate-300 pb-5">
        <h4 className="text-md font-semibold mb-2">Hotel Types</h4>
        {hotelTypes.map((hotelTypes) => (
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded"
              value={hotelTypes}
              checked={selectedHotelTypes.includes(hotelTypes)}
              onChange={onChange}
            />
            <span>{hotelTypes} Stars</span>
          </label>
        ))}
      </div>
    );
  };
  
  export default HotelTypes;