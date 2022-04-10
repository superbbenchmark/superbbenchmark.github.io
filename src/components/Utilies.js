import React from "react";
import { Box } from "@material-ui/core";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CapitalizeLetter(string) {
  return string.replace(/^\w|-\w/g, c => c.toUpperCase()).replace(/-/g, ' ');
}

function Strong(props) {
  return (
    <Box component="span" fontWeight="bold" fontStyle="italic">
      {props.children}
    </Box>
  );
}

function is_number_and_not_nan(value) {
  return (typeof (value) == "number") && (!isNaN(value))
}

function NumericalSort(rowA, rowB, columnId, desc) {
  const valueA = rowA.original[columnId];
  const valueB = rowB.original[columnId];
  const isNumberA = is_number_and_not_nan(valueA)
  const isNumberB = is_number_and_not_nan(valueB)
  if (!isNumberA && isNumberB) {
    return desc ? -1 : 1;
  }
  else if (isNumberA && !isNumberB) {
    return desc ? 1 : -1;
  }
  else if (!isNumberA && !isNumberB) {
    if (desc) {
      return rowA.original["submitName"] < rowB.original["submitName"] ? 1 : -1
    }
    else {
      return rowA.original["submitName"] < rowB.original["submitName"] ? -1 : 1
    }
  }
  else {
    return valueA > valueB ? 1 : -1;
  }
}

export { capitalizeFirstLetter, Strong, NumericalSort, is_number_and_not_nan, CapitalizeLetter };
