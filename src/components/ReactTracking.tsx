import React from "react";
var Spinner = require('react-spinkit');

interface ITranckingProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const ReactTracking: React.FunctionComponent<ITranckingProps> = (props:ITranckingProps) =>
{
    const [loading, setLoading] = React.useState(true);
    const hideSpinner = () => {
        setLoading(false);
    };

    return (
        <div>
          {loading ? (
            <Spinner
              loading="lazy"
              className="loading text-center"
              name="three-bounce"
              color="blue"
              fadeIn="none"
            />
          ) : null}
          <iframe
            src="https://iframe.consoltics.com"
            width="100%"
            height="4000px"
            onLoad={hideSpinner}
            frameBorder="0"
          />
        </div>
    );
}