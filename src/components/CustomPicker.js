import React from "react";
import { Picker, Item } from "native-base";

const CustomPicker = props => {
  const { items, selectedValue } = props;
  const pickerItems = items.map(item => {
    return <Item label={item.value} value={item.key} />;
  });

  return (
    <Picker
      iosHeader="Select"
      mode="dropdown"
      selectedValue={selectedValue}
      onValueChange={(item, index) => props.onValueChange(item, index)}
    >
      {pickerItems}
    </Picker>
  );
};

export { CustomPicker };
