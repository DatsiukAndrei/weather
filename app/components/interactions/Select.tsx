import { type ChangeEvent } from "react";
import { SelectIcon } from "~/components/icons";

interface OptionsI {
  value: string;
  label: string;
}

interface SelectProps {
  options: OptionsI[];
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ options, value, onChange }: SelectProps) {
  return (
    <div className="relative inline-block w-[200px]">
      <select
        className="appearance-none w-full bg-white border border-teal-700 text-teal-700 py-2 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:border-blue-500"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
         <SelectIcon/>
      </div>
    </div>
  );
}

export { Select };
