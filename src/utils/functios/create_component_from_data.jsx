import { Fragment } from "react";
import { CreateAcordion } from "../../components/create-acordion";
import { CreateAcordionData } from "../../components/create-acordion-data";
export function createDataFunction(info) {
  const result = info.map((obj, i) => {
    const { title, id } = obj;
    let result;
    if (title) {
      result = (
        <CreateAcordion
          key={id}
          id={id}
          title={title}
          dataFunctions={createDataFunction(obj.data)}
        />
      );
    } else {
      result = <CreateAcordionData key={obj.id} data={obj} />;
    }
    return <Fragment key={i}>{result}</Fragment>;
  });
  return result;
}
