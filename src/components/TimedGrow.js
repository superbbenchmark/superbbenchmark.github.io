import React from 'react';
import { Grow } from '@material-ui/core'


export default function TimedGrow(props) {
  const [checked, setChecked] = React.useState(false);
  const { children, interval } = props

  React.useEffect(() => {
    var timeout = setTimeout(() => {
      setChecked(true);
    }, interval);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <React.Fragment>
      <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <div>
          {children}
        </div>
      </Grow>
    </React.Fragment>
  )
}

TimedGrow.defaultProps = {
  interval: 0,
}
