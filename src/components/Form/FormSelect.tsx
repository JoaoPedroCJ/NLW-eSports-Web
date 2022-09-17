import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';

export interface IItem {
  key: string
  value: string
}

interface IFormSelectProps extends Select.SelectPortalProps {
  placeholder: string;
  itens: IItem[];
  name: string;
}

export function FormSelect({ itens, placeholder, name }: IFormSelectProps) {
  return (
    <Select.Root name={name}>
      <Select.Trigger
        className="bg-zinc-900 py-3 px-4 rounded text-small text-white flex justify-between"
      >
        <Select.Value placeholder={placeholder} />
        <Select.SelectIcon>
          <CaretDown size={24} className="text-zinc-500" />
        </Select.SelectIcon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-zinc-900 rounded overflow-hidden">
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.SelectGroup>
              {itens.map((item) => (
                <Select.Item key={item.key} value={item.key} className="flex items-center justify-between py-2 px-3 m-1 bg-zinc-900 text-white cursor-pointer rounded hover:bg-zinc-800 hover:text-white">
                  <Select.ItemText>{item.value}</Select.ItemText>
                  <Select.SelectItemIndicator>
                    <Check size={24} className="text-emerald-400" />
                  </Select.SelectItemIndicator>
                </Select.Item>
              ))}
            </Select.SelectGroup>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
