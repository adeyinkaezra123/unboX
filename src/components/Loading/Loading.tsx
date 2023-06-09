import { observer } from "mobx-react";
import { ImSpinner2 } from "react-icons/im";
import "./Loading.scss";

export const Loading = observer(function Loading({
  isLoading,
}: {
  isLoading: boolean;
}) {
  return (
    <div className={`Loading ${isLoading ? "visible" : "hidden"}`}>
      <ImSpinner2>
        <span className="sr-only">Loading...</span>
      </ImSpinner2>
    </div>
  );
});
